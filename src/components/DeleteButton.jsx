import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const DeleteButton = ({ todoid, onDelete }) => {
    const handleDelete = async () => {
        console.log('Todo ID to delete:', todoid); // Log todoid to ensure it's correct

        if (!todoid) {
            console.error('Invalid todoid:', todoid); // Catch case where todoid is undefined or null
            return;
        }

        try {
            const response = await axios.delete(`http://127.0.0.1:3000/todos/${todoid}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', response); // Log the response to check for any issues
            onDelete(todoid);
        } catch (error) {
            console.error('Error occurred during deleting data!', error.response || error.message);
        }
    };

    return (
        <Button variant="contained" color="error" onClick={handleDelete}>
            <DeleteIcon />
        </Button>
    );
};

export default DeleteButton;
