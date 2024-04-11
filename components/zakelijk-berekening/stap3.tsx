import React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"


export default function Stap3() {

    return(
        <>

        <div className="flex justify-center mt-16">
        <form className="min-w-[500px]">
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mb-1" htmlFor="name">
                        Elektriciteit van energiemij (kWh eigen zonnepanelen
                        niet aftrekken)
                      </Label>
                      <Input id="elektriciteit" placeholder="Uw waarden" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mb-1" htmlFor="framework">
                        Gas m3 (maximaal 20.000 m3)
                      </Label>
                      <Input id="gas-m3" placeholder="Uw waarden"></Input>
                    </div>
                  </div>
                </form>
                </div>
                               
                </>
    )
}