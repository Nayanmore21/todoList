import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
    // Two state variables to store values for each input field
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    // Handler for the first input field
    const handleInputChange1 = (e) => {
        setTitle(e.target.value);
    };

    // Handler for the second input field
    const handleInputChange2 = (e) => {
        setDesc(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = 'http://127.0.0.1:3000/todos';

        const bodyData = {
            title: title,
            desc: desc,
        };

        console.log('Sending data:', bodyData);

        try {
            const response = await axios.post(apiUrl, bodyData);
            console.log('Response status:', response.status);
            console.log('Response body:', response.data);

            if (response.status === 200) {
                console.log('Data submitted successfully');
                setTitle('');
                setDesc('');
            }
        } catch (error) {
            
            console.error('Failed to submit data:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>

            <div>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '20px 0 0 0'
                    }}
                >
                    <Typography
                        variant='h5' gutterBottom
                    >
                        Todo List
                    </Typography>
                </Box>
                <Box sx={{
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField
                        type="text"
                        id="inputField1"
                        value={title}
                        onChange={handleInputChange1}
                        label='Title'
                        sx={{
                            margin: '10px'
                        }}
                    />
                    <TextField
                        type="text"
                        id="inputField2"
                        value={desc}
                        onChange={handleInputChange2}
                        label='Description'
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Button onClick={handleSubmit} variant='contained'>Submit</Button>
                </Box>
            </div>
        </>
    );
};

export default Form;
