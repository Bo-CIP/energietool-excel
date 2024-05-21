"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";

const Page: React.FC = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/login",
  });

  const [contact_persoon, setContactPersoon] = useState<string>("");
  const [straatnaam, setStraat] = useState<string>("");
  const [huisnummer, setHuisnummer] = useState<string>("");
  const [plaats, setPlaats] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [telefoonnummer, setTelefoonnummer] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bedrijf_naam, setBedrijfNaam] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [errors, setErrors] = useState<{
    name: string[];
    email: string[];
    bedrijf_naam: string[];
    password: string[];
    password_confirmation: string[];
    contact_persoon: string[];
    straatnaam: string[];
    huisnummer: string[];
    plaats: string[];
    postcode: string[];
    telefoonnummer: string[];
  }>({
    contact_persoon: [],
    straatnaam: [],
    huisnummer: [],
    plaats: [],
    postcode: [],
    telefoonnummer: [],
    name: [],
    email: [],
    bedrijf_naam: [],
    password: [],
    password_confirmation: [],
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({
      bedrijf_naam,
      contact_persoon,
      straatnaam,
      huisnummer,
      plaats,
      postcode,
      telefoonnummer,
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <form onSubmit={submitForm}>
      {/* Naam bedrijf */}
      <div>
        <Label htmlFor="name">bedrijfs naam</Label>

        <Input
          id="bedrijf_naam"
          type="text"
          value={bedrijf_naam}
          className="block mt-1 w-full"
          onChange={(event) => setBedrijfNaam(event.target.value)}
          required
          autoFocus
        />
      </div>
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
        <Label htmlFor="passwordConfirmation">Confirm Password</Label>

        <Input
          id="passwordConfirmation"
          type="password"
          value={passwordConfirmation}
          className="block mt-1 w-full"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="name">straatnaam</Label>

        <Input
          id="straatnaam"
          type="text"
          value={straatnaam}
          className="block mt-1 w-full"
          onChange={(event) => setStraat(event.target.value)}
          required
          autoFocus
        />
      </div>
      <div>
        <Label htmlFor="name">huisnummer</Label>

        <Input
          id="huisnummer"
          type="text"
          value={huisnummer}
          className="block mt-1 w-full"
          onChange={(event) => setHuisnummer(event.target.value)}
          required
          autoFocus
        />
      </div>

      <div>
        <Label htmlFor="name">postcode</Label>

        <Input
          id="postcode"
          type="text"
          value={postcode}
          className="block mt-1 w-full"
          onChange={(event) => setPostcode(event.target.value)}
          required
          autoFocus
        />
      </div>

      <div>
        <Label htmlFor="name">plaats</Label>

        <Input
          id="plaats"
          type="text"
          value={plaats}
          className="block mt-1 w-full"
          onChange={(event) => setPlaats(event.target.value)}
          required
          autoFocus
        />
      </div>
      <div>
        <Label htmlFor="name">telefoonnummer</Label>

        <Input
          id="telefoonnummer"
          type="text"
          value={telefoonnummer}
          className="block mt-1 w-full"
          onChange={(event) => setTelefoonnummer(event.target.value)}
          required
          autoFocus
        />
      </div>

      <div>
        <Label htmlFor="name">Contact persoon</Label>

        <Input
          id="contact_persoon"
          type="text"
          value={contact_persoon}
          className="block mt-1 w-full"
          onChange={(event) => setContactPersoon(event.target.value)}
          required
          autoFocus
        />
      </div>

      <div className="flex items-center justify-end mt-4">
        <Link
          href="/login"
          className="underline text-sm text-gray-600 hover:text-gray-900"
        >
          Already registered?
        </Link>

        <Button type="submit" className="ml-4">
          Register
        </Button>
      </div>
    </form>
  );
};

export default Page;
