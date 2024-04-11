import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";


export default function Stap1() {
    return (
        <>
        
        
        <div className="flex justify-center mx-auto mt-8">
        <form className="max-w-[500px]">
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label className="" htmlFor="name">
                        Naam bedrijf
                    </Label>
                    <Input id="elektriciteit" placeholder="Uw waarden" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label className="" htmlFor="framework">
                        Naam contactpersoon
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Straat en huisnummer
                            </Label>
                            <Input id="gas-m3" placeholder="Uw waarden"></Input>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Postcode plaats
                            </Label>
                            <Input id="gas-m3" placeholder="Uw waarden"></Input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label className="" htmlFor="framework">
                        Telefoonnummer
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label className="" htmlFor="framework">
                        Emailadres
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                </div>
                <div className="mb-1"></div>
            </div>
        </form>
        </div>
        </>
    )
}