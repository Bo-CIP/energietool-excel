import React, { Dispatch, SetStateAction } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FinalForm, Stap1Form } from "@/lib/definitions";

interface Props {
    form: FinalForm
    setValue: Dispatch<SetStateAction<FinalForm>>
  }

const Stap1 = (props: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        // Update the form state with the new value
        props.setValue((prevForm) => ({
          ...prevForm,
          stap1: {
            ...prevForm.stap1,
            [name]: value,
          }
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
                    <Input name="bedrijf_naam" id="" placeholder="Uw waarden" value={props.form.stap1.bedrijf_naam} onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label className="" htmlFor="framework">
                        Naam contactpersoon
                    </Label>
                    <Input name="contactpersoon_naam" id="" placeholder="Uw waarden" value={props.form.stap1.contactpersoon_naam} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Straat 
                            </Label>
                            <Input name="straatnaam" id="" placeholder="Uw waarden" value={props.form.stap1.straatnaam} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Huisnummer
                            </Label>
                            <Input name="huisnummer" id="" placeholder="Uw waarden" value={props.form.stap1.huisnummer} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Plaats
                            </Label>
                            <Input name="plaats" id="" placeholder="Uw waarden" value={props.form.stap1.plaats} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Postcode
                            </Label>
                            <Input name="postcode" id="" placeholder="Uw waarden" value={props.form.stap1.postcode} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label className="" htmlFor="framework">
                        Telefoonnummer
                    </Label>
                    <Input name="telefoonnummer" id="" placeholder="Uw waarden" value={props.form.stap1.telefoonnummer} onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label className="" htmlFor="framework">
                        Emailadres
                    </Label>
                    <Input name="email" id="" placeholder="Uw waarden" value={props.form.stap1.email} onChange={handleChange} />
                </div>
                <div className="mb-1"></div>
            </div>
        </form>
        </div>
        </>
    )
}

export default Stap1