import React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { Terminal } from "lucide-react"
import { CircleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"


export default function Stap4() {

    return (
        <>

            <div className="flex justify-center mt-6">
                <form className="min-w-[500px] max-w-[500px]">
                    <div className="grid w-full items-center gap-4">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5 ">
                                    <Label className="" htmlFor="name">
                                        Teruglever aantal in kWh
                                    </Label>
                                    <Input id="aantal-kwh" placeholder="Aantal kWh" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="name">
                                        Netto levering
                                    </Label>
                                    <Input id="kale-kwh" placeholder="Kale kWh / m3" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="name">
                                        Vergoeding per kWh
                                    </Label>
                                    <Input id="bouwjaar" placeholder="Aantal kWh" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="name">
                                        Aantal panelen nodig
                                    </Label>
                                    <Input id="woonoppervlak" placeholder="Kale kWh / m3" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="name">
                                        Extra zonnepanelen boven
                                    </Label>
                                    <Input id="bouwjaar" placeholder="Uw waarden" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="" htmlFor="framework">
                                        Aansluitvermogen in Amp
                                    </Label>
                                    <Input id="woonoppervlak" placeholder="Uw waarden" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 mt-12">
                        <Alert>
                        <CircleAlert />
      <AlertTitle className="ml-2">Let op!</AlertTitle>
      <AlertDescription className="ml-2">
        Het meeste van de bovenstaande gegevens komen van uw energie leverancier, u kunt hun het best benaderen als u vragen heeft over uw verbruik.
      </AlertDescription>
    </Alert>
                        </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}