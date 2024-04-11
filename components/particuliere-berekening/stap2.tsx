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

            <div className="flex justify-center mx-auto mt-6">
                <form className="min-w-[500px] max-w-[500px]">
                    <div className="grid w-full items-center gap-4">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="name">
                                        Bouwjaar van woning
                                    </Label>
                                    <Input id="bouwjaar" placeholder="Uw waarden" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        m2 woonoppervlak
                                    </Label>
                                    <Input id="woonoppervlak" placeholder="Uw waarden" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Verwarmings systeem
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Kies uit..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Gas">Gas</SelectItem>
                                            <SelectItem value="Pelletkachel">Pelletkachel</SelectItem>
                                            <SelectItem value="Luchtverwarming">Luchtverwarming</SelectItem>
                                            <SelectItem value="Warmtepomp">Warmtepomp</SelectItem>
                                            <SelectItem value="Infrarood">Infrarood</SelectItem>
                                            <SelectItem value="Hybride WP">Hybride WP</SelectItem>
                                            <SelectItem value="Luchtwater WP">Luchtwater WP</SelectItem>
                                            <SelectItem value="Airco">Airco</SelectItem>
                                            <SelectItem value="Grondwater WP">Grondwater WP</SelectItem>
                                            <SelectItem value="Anders">Anders</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Verwarming
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Kies uit..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Vloer">Vloer</SelectItem>
                                            <SelectItem value="Radiatoren">Radiatoren</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label className="" htmlFor="framework">
                                Is er spouw en/of vloer isolatie
                            </Label>
                            <Input id="gas-m3" placeholder="Uw waarden"></Input>
                        </div>

                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        CV temperatuur
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Kies uit..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="40">40</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                            <SelectItem value="60">60</SelectItem>
                                            <SelectItem value="70">70</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Ventilatie
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Kies uit..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="centraal">WTW centraal</SelectItem>
                                            <SelectItem value="lokaal">WTW lokaal</SelectItem>
                                            <SelectItem value="roosters">Roosters</SelectItem>
                                            <SelectItem value="kieren">Kieren</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Glas beneden
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Kies uit..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="triple">Triple</SelectItem>
                                            <SelectItem value="hr">HR++</SelectItem>
                                            <SelectItem value="dubbel-glas">Dubbel glas</SelectItem>
                                            <SelectItem value="enkel-glas">Enkel Glas</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Zonnepanelen al aanwezig
                                    </Label>
                                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                                </div>
                            </div>
                        </div>
                        <div className="mb-1"></div>
                    </div>
                </form>
            </div>
        </>
    )
}
