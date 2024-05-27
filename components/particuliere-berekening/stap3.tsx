import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { FinalForm } from "@/lib/definitions";
import { useAuth } from "@/hooks/auth";
import { Button } from "../ui/button";
import { useStap3Context } from "@/lib/stap3Context";
import { useToast } from "../ui/use-toast";


interface Props {
  value: FinalForm
  setValue: Dispatch<SetStateAction<FinalForm>>
}

const Stap3: React.FC<Props> = (props) => {
  const { berekening } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });


  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    props.setValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

              
             
  return (   
    <>
      <div className="flex justify-center mt-6">
        <form className="min-w-[500px] max-w-[500px]">
          <div className="grid w-full items-center gap-4">
            <h6 className="text-md">Elektriciteit van energiemij</h6>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5 ">
                <Input
                    maxLength={30}
                    name="elek_aantal_kwh"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.elek_aantal_kwh}
                    onChange={handleChange}
                   
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                <Input
                    maxLength={30}
                    name="elek_kale_kwh"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.elek_kale_kwh}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <h6>Gas m3</h6>
            <div className="grid grid-cols-12 gap-4 mb-2">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                <Input
                    maxLength={30}
                    name="gas_aantal_kwh"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.gas_aantal_kwh}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                <Input
                    maxLength={30}
                    name="gas_kale_kwh"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.gas_kale_kwh}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-2">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                    Aantal gezinsleden
                  </Label>
                  <Input
                    maxLength={30}
                    name="aantal_gezinsleden"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.aantal_gezinsleden}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Lager gasvebruik
                  </Label>
                  <Input
                    maxLength={30}
                    name="lager_gasverbruik"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.lager_gasverbruik}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                    Oppervlak woning in m2
                  </Label>
                  <Input
                    maxLength={30}
                    name="woon_oppervlak"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.woon_oppervlak}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Extra gasverbruik correctie
                  </Label>
                  <Input
                    maxLength={30}
                    name="gasverbr_correctie"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.gasverbr_correctie}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 mb-1">
              <Label className="" htmlFor="framework">
                Totaal aantal kilometers per jaar met elektricsche auto
              </Label>
              <Input
                    maxLength={30}
                    name="km_met_elek_auto"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.km_met_elek_auto}
                    onChange={handleChange}
                  />
            </div>
          </div>
          <Button type="submit">Test</Button>
        </form>
      </div>
    </>
  );
}

export default Stap3;
