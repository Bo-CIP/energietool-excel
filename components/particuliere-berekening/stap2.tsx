import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { CircleHelp } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FinalForm } from "@/lib/definitions";
import { useAuth } from "@/hooks/auth";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "../ui/use-toast";

interface Props {
  value: FinalForm;
  setValue: Dispatch<SetStateAction<FinalForm>>;
}

const Stap2: React.FC<Props> = (props) => {
  const { berekening } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  // Function to handle select changes and update the form state
  const handleSelectChange = (name: string, value: string) => {
    props.setValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle input changes and update the form state
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
        <form className="min-w-[500px] max-w-[500px]">
          <div className="grid w-full items-center gap-4">
             {/* Grid for form fields */}
            <div className="grid grid-cols-12 gap-4">
              {/* Bouwjaar input field */}
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                    Bouwjaar
                  </Label>
                  <Input
                    maxLength={30}
                    name="bouwjaar"
                    placeholder="Uw waarden"
                    value={props.value.bouwjaar}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Oppervlakte input field */}
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                    Oppervlakte
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
            </div>
             {/* Select fields for glass type, presence of solar panels, insulation, and heating system */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Glas beneden
                  </Label>
                  <Select
                    name="glas_type"
                    value={props.value.glas_type}
                    onValueChange={(v: string) =>
                      handleSelectChange("glas_type", v)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Kies uit..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Triple">Triple</SelectItem>
                      <SelectItem value="HR++">HR++</SelectItem>
                      <SelectItem value="Dubbel glas">Dubbel glas</SelectItem>
                      <SelectItem value="Enkel Glas">Enkel Glas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Zonnepanelen al aanwezig
                  </Label>
                  <Input
                    maxLength={30}
                    name="zp_aanwezig"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.zp_aanwezig}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Is er vloer/spouw isolatie
                  </Label>
                  <RadioGroup
                    name="isolatie"
                    defaultValue={props.value.isolatie}
                    onValueChange={(v: string) =>
                      handleSelectChange("isolatie", v)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Ja" id="r1" />
                      <Label htmlFor="r1">Ja</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Nee" id="r2" />
                      <Label htmlFor="r2">Nee</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Is er vloer of radiator verwarming
                  </Label>
                  <RadioGroup
                    name="vw_type"
                    defaultValue={props.value.vw_type}
                    onValueChange={(v: string) =>
                      handleSelectChange("vw_type", v)
                    }
                    >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Vloer" id="r1" />
                      <Label htmlFor="r1">Vloer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Radiator" id="r2" />
                      <Label htmlFor="r2">Radiator</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Additional select fields for heating system parameters */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="relative inline-block" htmlFor="framework">
                    CV temperatuur
                    <HoverCard>
                      <HoverCardTrigger>
                        <CircleHelp
                          size={16}
                          className="absolute top-0 right-[7rem]"
                        />
                      </HoverCardTrigger>
                      <HoverCardContent>
                        Als CV water bij koud weer boven 50 graden C. komt dan
                        uitsluitend hybride warmtepomp of airco toepassen
                      </HoverCardContent>
                    </HoverCard>
                  </Label>

                  <Select
                    name="cv_temp"
                    value={props.value.cv_temp}
                    onValueChange={(v: string) =>
                      handleSelectChange("cv_temp", v)
                    }
                  >
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
                  <Select
                    name="vent_type"
                    value={props.value.vent_type}
                    onValueChange={(v: string) =>
                      handleSelectChange("vent_type", v)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Kies uit..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="WTW centraal">WTW centraal</SelectItem>
                      <SelectItem value="WTW lokaal">WTW lokaal</SelectItem>
                      <SelectItem value="Roosters">Roosters</SelectItem>
                      <SelectItem value="Kieren">Kieren</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Verwarmings systeem
                  </Label>
                  <Select
                    name="vw_systeem"
                    value={props.value.vw_systeem}
                    onValueChange={(v: string) =>
                      handleSelectChange("vw_systeem", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Kies uit..."></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Gas">Gas</SelectItem>
                      <SelectItem value="Pelletkachel">Pelletkachel</SelectItem>
                      <SelectItem value="Luchtverwarming">
                        Luchtverwarming
                      </SelectItem>
                      <SelectItem value="Warmtepomp">Warmtepomp</SelectItem>
                      <SelectItem value="Infrarood">Infrarood</SelectItem>
                      <SelectItem value="Hybride WP">Hybride WP</SelectItem>
                      <SelectItem value="Luchtwater WP">
                        Luchtwater WP
                      </SelectItem>
                      <SelectItem value="Airco">Airco</SelectItem>
                      <SelectItem value="Grondwater WP">
                        Grondwater WP
                      </SelectItem>
                      <SelectItem value="Anders">Anders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mb-1"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Stap2;
