import React, { Dispatch, SetStateAction, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FinalForm } from "@/lib/definitions";
import { useAuth } from "@/hooks/auth";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface Props {
  value: FinalForm;
  setValue: Dispatch<SetStateAction<FinalForm>>;
}

const Stap1: React.FC<Props> = (props) => {
  const { berekening } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    props.setValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex justify-center mx-auto mt-6">
        <form className="max-w-[500px]">
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
                value={props.value.bedrijf_naam}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="" htmlFor="framework">
                Naam contactpersoon
              </Label>
              <Input
                maxLength={40}
                name="contact_persoon"
                id=""
                placeholder="Uw waarden"
                value={props.value.contact_persoon}
                onChange={handleChange}
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
                    value={props.value.straatnaam}
                    onChange={handleChange}
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
                    value={props.value.huisnummer}
                    onChange={handleChange}
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
                    value={props.value.plaats}
                    onChange={handleChange}
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
                    value={props.value.postcode}
                    onChange={handleChange}
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
                value={props.value.telefoonnummer}
                onChange={handleChange}
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
                value={props.value.email}
                onChange={handleChange}
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
