import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import EditNote from '@mui/icons-material/EditNote';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

const apidata = 'http://127.0.0.1:3000/todos';

const TodoDisplay = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodoData() {
            try {
                const response = await axios.get(apidata);
                setTodos(response.data);
                console.log(response.data);

            } catch (error) {
                console.log('Error in fetching data!', error);
            }
        }
        getTodoData();
    }, []);

    const handleDelete = (todoid) => {
        console.log('Deleting todo with ID:', todoid);
        setTodos(todos.filter((todo) => todo.id !== todoid));
    };

    const handleUpdate = (updatedTodo) => {
        setTodos(todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo));
    };

    return (
        <Box>
            <Table
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TableBody>
                    {todos.map((todo) => (
                        <TableRow key={todo.id}>
                            <TableCell>{todo.title}</TableCell>
                            <TableCell>{todo.desc}</TableCell>
                            <TableCell>
                                <DeleteButton todoid={todo.todoid} onDelete={handleDelete} />
                            </TableCell>
                            <TableCell>
                                <UpdateButton todo={todo} onUpdate={handleUpdate} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default TodoDisplay;
