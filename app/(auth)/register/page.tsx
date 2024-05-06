'use client'

import React, { useState } from 'react';
import { Button }  from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';

const Page: React.FC = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/login',
    });

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [errors, setErrors] = useState<{
        name: string[];
        email: string[];
        password: string[];
        password_confirmation: string[];
    }>({
        name: [],
        email: [],
        password: [],
        password_confirmation: [],
    });

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        });
    };

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <div>
                <Label htmlFor="name">Name</Label>

                <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block mt-1 w-full"
                    onChange={(event) => setName(event.target.value)}
                    required
                    autoFocus
                />
            </div>

            {/* Email Address */}
            <div className="mt-4">
                <Label htmlFor="email">Email</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-1 w-full"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>

            {/* Password */}
            <div className="mt-4">
                <Label htmlFor="password">Password</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-1 w-full"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Label htmlFor="passwordConfirmation">
                    Confirm Password
                </Label>

                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-1 w-full"
                    onChange={(event) => setPasswordConfirmation(event.target.value)}
                    required
                />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/login"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>

                <Button type="submit" className="ml-4">Register</Button>
            </div>
        </form>
    );
}

export default Page;