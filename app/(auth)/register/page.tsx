import React from "react";

import { useState } from 'react';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Registration failed');
            }

            // Registration successful, handle accordingly
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form inputs */}
        </form>
    );
};

export default RegistrationForm;