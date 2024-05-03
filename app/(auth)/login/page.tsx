'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus';
import { useRouter} from 'next/dist/client/router';
import { useSearchParams } from 'next/navigation';

const Login: React.FC = () => {

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });
    
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [shouldRemember, setShouldRemember] = useState<boolean>(false);
    const [errors, setErrors] = useState<{
        email: string[];
        password: string[];
    }>({
        email: [],
        password: [],
    });
    


const [status, setStatus] = useState<string | null>(null);

useEffect(() => {
    const reset = searchParams.get('reset');

    if (
        reset &&
        Array.isArray(reset) &&
        reset.length > 0 &&
        errors.email.length === 0 &&
        errors.password.length === 0
    ) {
        setStatus(atob(reset[0]));
    } else {
        setStatus(null);
    }
}, [searchParams, errors]);

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        });
    };

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email" className={undefined}>
                        Email
                    </Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        autoFocus
                    />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password" className={undefined}>
                        Password
                    </Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />
                </div>

                {/* Remember Me */}
                <div className="block mt-4">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(event) =>
                                setShouldRemember(event.target.checked)
                            }
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href="/forgot-password" passHref>
                        <a className="underline text-sm text-gray-600 hover:text-gray-900">
                            Forgot your password?
                        </a>
                    </Link>

                    <Button type="submit">Login</Button>
                </div>
            </form>
        </>
    );
};

export default Login;
