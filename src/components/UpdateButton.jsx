import React, { useState } from 'react';
import { Button, Modal, Box, TextField, Typography } from '@mui/material';
import EditNote from '@mui/icons-material/EditNote';
import axios from 'axios';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UpdateButton = ({ todo, onUpdate }) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [desc, setDesc] = useState(todo.desc);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async () => {
        try {
            const updatedTodo = { ...todo, title, desc };
            const response = await axios.put(`http://127.0.0.1:3000/todos/${todo.todoid}`, updatedTodo);

            if (response.status === 200) {
                onUpdate(updatedTodo); // Pass the updated todo back to TodoDisplay
                handleClose(); // Close the modal
            }
        } catch (error) {
            console.log('Error occurred while updating the todo!', error);
        }
    };

    return (
        <>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                <EditNote />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="update-todo-modal"
                aria-describedby="modal-to-update-todo"
            >
                <Box sx={modalStyle}>
                    <Typography variant='h4' id="update-todo-modal">
                        Update Todo
                    </Typography>
                    
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default UpdateButton;
