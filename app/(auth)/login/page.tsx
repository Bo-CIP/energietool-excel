"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import AuthSessionStatus from "@/app/(auth)/AuthSessionStatus";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login: React.FC = () => {
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [shouldRemember, setShouldRemember] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    email: string[];
    password: string[];
  }>({
    email: [],
    password: [],
  });
  const [status, setStatus] = useState<string | null>(null);

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
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthSessionStatus className="mb-4" status={status} />
          <form onSubmit={submitForm}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className={undefined}>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  className="flex block mt-1 w-full"
                  onChange={(event) => setEmail(event.target.value)}
                  autoFocus
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className={undefined}>
                  Password
                </Label>

                <Input
                  id="password"
                  type="password"
                  value={password}
                  className="block mt-1 w-full"
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="block mt-4">
              <label htmlFor="remember_me" className="inline-flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  name="remember"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(event) => setShouldRemember(event.target.checked)}
                />

                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </>
  );
};

export default Login;
