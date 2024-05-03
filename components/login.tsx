import { env } from 'process';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginFormInputs {
  email: string;
  password: string;
}



const LoginForm: React.FC = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Authentication successful, redirect user
        window.location.href = '/dashboard';
      } else {
        // Authentication failed, display error message
        const { error } = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: true })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
    
  );
};

export default LoginForm;