import React, { Dispatch, SetStateAction, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FinalForm, Stap1Form } from "@/lib/definitions";
import { useAuth } from "@/hooks/auth";
import { Button } from "../ui/button";


const Stap1: React.FC = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [bedrijf_naam, setBedrijfNaam] = useState<string>("");
  const [contact_persoon, setContactPersoon] = useState<string>("");
  const [straatnaam, setStraat] = useState<string>("");
  const [huisnummer, setHuisnummer] = useState<string>("");
  const [plaats, setPlaats] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [telefoonnummer, setTelefoonnummer] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{
    bedrijf_naam: string[];
    contact_persoon: string[];
    straatnaam: string[];
    huisnummer: string[];
    plaats: string[];
    postcode: string[];
    telefoonnummer: string[];
    email: string[];
}>({
  bedrijf_naam: [],
  contact_persoon: [],
  straatnaam: [],
  huisnummer: [],
  plaats: [],
  postcode: [],
  telefoonnummer: [],
  email: []
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
      email,
      setErrors,
  });
};


  return (
    <>
      <div className="flex justify-center mx-auto mt-6">
        <form onSubmit={submitForm} className="max-w-[500px]">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="" htmlFor="name">
                Naam bedrijf
              </Label>
              <Input
                maxLength={30}
                name="bedrijf_naam"
                id=""
                placeholder="Uw waarden"
                value={bedrijf_naam}
                onChange={(event) => setBedrijfNaam(event.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="" htmlFor="framework">
                Naam contactpersoon
              </Label>
              <Input
                maxLength={40}
                name="contactpersoon_naam"
                id=""
                placeholder="Uw waarden"
                value={contact_persoon}
                onChange={(event) => setContactPersoon(event.target.value)}
              />
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Straat
                  </Label>
                  <Input
                    maxLength={25}
                    name="straatnaam"
                    id=""
                    placeholder="Uw waarden"
                    value={straatnaam}
                    onChange={(event) => setStraat(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Huisnummer
                  </Label>
                  <Input
                    maxLength={10}
                    name="huisnummer"
                    id=""
                    placeholder="Uw waarden"
                    value={huisnummer}
                    onChange={(event) => setHuisnummer(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Plaats
                  </Label>
                  <Input
                    maxLength={25}
                    name="plaats"
                    id=""
                    placeholder="Uw waarden"
                    value={plaats}
                    onChange={(event) => setPlaats(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Postcode
                  </Label>
                  <Input
                    maxLength={6}
                    name="postcode"
                    id=""
                    placeholder="Uw waarden"
                    value={postcode}
                    onChange={(event) => setPostcode(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="" htmlFor="framework">
                Telefoonnummer
              </Label>
              <Input
                maxLength={10}
                name="telefoonnummer"
                id=""
                placeholder="Uw waarden"
                value={telefoonnummer}
                onChange={(event) => setTelefoonnummer(event.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="" htmlFor="framework">
                Emailadres
              </Label>
              <Input
                maxLength={50}
                name="email"
                id=""
                placeholder="Uw waarden"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-1"></div>
          </div>
          <Button type="submit">Test</Button>
        </form>
      </div>
    </>
  );
};

export default Stap1;
