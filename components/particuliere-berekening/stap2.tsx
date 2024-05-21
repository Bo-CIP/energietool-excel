import React, { Dispatch, SetStateAction, useState } from "react";
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
import { FinalForm, Stap2Form } from "@/lib/definitions";
import { useAuth } from "@/hooks/auth";
import { Button } from "../ui/button";

const Stap2: React.FC = () => {
  const { pand } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [bouwjaar, setBouwjaar] = useState<string>("");
  const [oppervlakte, setOppervlakte] = useState<string>("");
  const [vw_systeem, setVWSysteem] = useState<string>("");
  const [verwarming, setVerwarming] = useState<string>("");
  const [isolatie_type, setIsolatie] = useState<string>("");
  const [cv_temp, setCVTemp] = useState<string>("");
  const [ventilatie, setVentilatie] = useState<string>("");
  const [glas_type, setGlasType] = useState<string>("");
  const [zp_aanwezig, setZPAanwezig] = useState<string>("");
  const [errors, setErrors] = useState<{
    bouwjaar: number[];
    oppervlakte: number[];
    vw_systeem: string[];
    verwarming: string[];
    isolatie_type: string[];
    cv_temp: string[];
    ventilatie: string[];
    glas_type: string[];
    zp_aanwezig: string[];
  }>({
    bouwjaar: [],
    oppervlakte: [],
    vw_systeem: [],
    verwarming: [],
    isolatie_type: [],
    cv_temp: [],
    ventilatie: [],
    glas_type: [],
    zp_aanwezig: [],
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    pand({
      bouwjaar,
      oppervlakte,
      vw_systeem,
      verwarming,
      isolatie_type,
      cv_temp,
      ventilatie,
      glas_type,
      zp_aanwezig,
      setErrors,
    });
  };

  return (
    <>
      <div className="flex justify-center mx-auto mt-6">
        <form onSubmit={submitForm} className="min-w-[500px] max-w-[500px]">
          <div className="grid w-full items-center gap-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
              <div className="flex flex-col space-y-1.5">
              <Label className="" htmlFor="name">
                Bouwjaar
              </Label>
              <Input
                maxLength={30}
                name="bouwjaar"
                id=""
                placeholder="Uw waarden"
                value={bouwjaar}
                onChange={(event) => setBouwjaar(event.target.value)}
              />
            </div>
              </div>
              <div className="col-span-6">
              <div className="flex flex-col space-y-1.5">
              <Label className="" htmlFor="name">
                Naam bedrijf
              </Label>
              <Input
                maxLength={30}
                name="oppervlakte"
                id=""
                placeholder="Uw waarden"
                value={oppervlakte}
                onChange={(event) => setOppervlakte(event.target.value)}
              />
            </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Verwarmings systeem
                  </Label>
                  <Select
                    value={vw_systeem}
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setVWSysteem(event.target.value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Kies uit..." />
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
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Verwarming
                  </Label>
                  <Select
                    value={verwarming}
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setVerwarming(event.target.value)}
                  >
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
              <Input
                maxLength={30}
                name="isolatie_type"
                id=""
                placeholder="Uw waarden"
                value={isolatie_type}
                onChange={(event) => setOppervlakte(event.target.value)}
              />
            </div>

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
                    value={cv_temp}
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setCVTemp(event.target.value)}
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
                    value={ventilatie}
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setVentilatie(event.target.value)}
                  >
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
                  <Select
                    value={glas_type}
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setGlasType(event.target.value)}
                  >
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
                  <Input
                    maxLength={30}
                    name="bedrijf_naam"
                    id=""
                    placeholder="Uw waarden"
                    value={zp_aanwezig}
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setZPAanwezig(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-1"></div>
          </div>
          <Button type="submit">Test</Button>
        </form>
      </div>
    </>
  );
};

export default Stap2;
