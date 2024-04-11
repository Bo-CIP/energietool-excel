import React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"


export default function Stap3() {

    return(
        <>

        <div className="flex justify-center mt-6">
        <form className="min-w-[500px] max-w-[500px]">
                  <div className="grid w-full items-center gap-4">
                    <h6 className="text-md">Elektriciteit van energiemij</h6>
                  <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5 ">
                                    <Input id="aantal-kwh" placeholder="Aantal kWh" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Input id="kale-kwh" placeholder="Kale kWh / m3" />
                                </div>
                            </div>
                        </div>
                        <h6>Gas m3</h6>
                        <div className="grid grid-cols-12 gap-4 mb-2">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Input id="bouwjaar" placeholder="Aantal kWh" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Input id="woonoppervlak" placeholder="Kale kWh / m3" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 mt-2">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="name">
                                        Aantal gezinsleden
                                    </Label>
                                    <Input id="bouwjaar" placeholder="Uw waarden" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Lager gasvebruik
                                    </Label>
                                    <Input id="woonoppervlak" placeholder="Uw waarden" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="name">
                                        Oppervlak woning in m2
                                    </Label>
                                    <Input id="bouwjaar" placeholder="Uw waarden" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Extra gasverbruik correctie
                                    </Label>
                                    <Input id="woonoppervlak" placeholder="Uw waarden" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1.5 mb-1">
                                    <Label className="" htmlFor="framework">
                                        Totaal aantal kilometers per jaar met elektricsche auto
                                    </Label>
                                    <Input id="woonoppervlak" placeholder="Uw waarden" />
                                </div>
                  </div>
                </form>
                </div>
                
                </>
    )
}