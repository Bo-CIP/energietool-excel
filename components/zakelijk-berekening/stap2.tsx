import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectValue,
    SelectItem,
    SelectTrigger
} from "@/components/ui/select"

export default function Stap2() {
    return (
        <>
            <div className="flex justify-center mx-auto mt-8">
            <form className="min-w-[500px]">
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label className="" htmlFor="name">
                            Wat is het bouwjaar van het pand/woning
                        </Label>
                        <Input id="elektriciteit" placeholder="Uw waarden" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label className="" htmlFor="framework">
                            Hoeveel m2 woonoppervlak?
                        </Label>
                        <Input id="" placeholder="Uw waarde" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Is er vloerverwarming of radiatoren?
                            </Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Kies uit..." />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Vloer">Vloer</SelectItem>
                                    <SelectItem value="Radiatoren">Radiatoren</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Hoe hoog is de CV water temperatuur?{" "}
                            </Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Kies uit..." />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="40">40</SelectItem>
                                    <SelectItem value="50">50</SelectItem>
                                    <SelectItem value="60">60</SelectItem>
                                    <SelectItem value="70">70</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Wat is uw huidige verwarmingssysteem?{" "}
                            </Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Kies uit..." />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Gas">Gas</SelectItem>
                                    <SelectItem value="Pelletkachel">
                                        Pelletkachel
                                    </SelectItem>
                                    <SelectItem value="Luchtverwarming">
                                        Luchtverwarming
                                    </SelectItem>
                                    <SelectItem value="Infrarood">Infrarood</SelectItem>
                                    <SelectItem value="Warmtepomp">Warmtepomp</SelectItem>
                                    <SelectItem value="Hybride warmtepomp">
                                        Hybride warmtepomp
                                    </SelectItem>
                                    <SelectItem value="Luchtwater warmtepomp">
                                        Luchtwater warmtepomp
                                    </SelectItem>
                                    <SelectItem value="Airco">Airco</SelectItem>
                                    <SelectItem value="Grondwater warmtepomp">
                                        Grondwater warmtepomp
                                    </SelectItem>
                                    <SelectItem value="Anders">Anders</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mb-1"></div>
                </div>
            </form>
            </div>
        </>
    )
}
