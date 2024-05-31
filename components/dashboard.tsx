"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Slider from "@/components/slider";
import { useAuth } from "@/hooks/auth";
import { Dispatch, SetStateAction, useState } from "react";
import { FinalForm } from "@/lib/definitions";
import { Pagination } from "./ui/pagination";
import { Separator } from "@radix-ui/react-dropdown-menu";

interface User {
  name: string;
  email: string;
  bedrijf_naam: string;
  account_type: string;
}

interface Contact {
  contact_persoon: string;
  telefoonnummer: string;
}

interface Adres {
  straatnaam: string;
  huisnummer: string;
  postcode: string;
  plaats: string;
}

interface Pand {
  woon_oppervlak: string;
  aantal_gezinsleden: string;
  bouwjaar: string;
}

interface Energielabel{
  label: string;
}

interface Props {
  user: User | null;
  contact: Contact | null;
  adres: Adres | null;
  pand: Pand | null;
  energielabel: Energielabel | null;
  value: FinalForm;
  setValue: Dispatch<SetStateAction<FinalForm>>;
}


const LandingsDashboard: React.FC<Props> = () => {
  const { user, contact, adres, gebouw, energielabel, dashboard } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  
  const[bedrijf_naam] = useState<string>("");
  const[contact_persoon] = useState<string>("");
  const[telefoonnummer] = useState<string>("");
  const[straatnaam] = useState<string>("");
  const[huisnummer] = useState<string>("");
  const[postcode] = useState<string>("");
  const[plaats] = useState<string>("");
  const [errors, setErrors] = useState<{
    bedrijf_naam: string[];
    contact_persoon: string[];
    straatnaam: string[];
    huisnummer: string[];
    plaats: string[];
    postcode: string[];
    telefoonnummer: string[];
    email: string[];
    bouwjaar: string[];
    oppervlakte: string[];
    vw_systeem: string[];
    vw_type: string[];
    isolatie: string[];
    cv_temp: string[];
    vent_type: string[];
    glas_type: string[];
    zp_aanwezig: string[];
    elek_aantal_kwh: string[];
    elek_kale_kwh: string[];
    gas_aantal_kwh: string[];
    gas_kale_kwh: string[];
    aantal_gezinsleden: string[];
    lager_gasverbruik: string[];
    woon_oppervlak: string[];
    gasverbr_correctie: string[];
    km_met_elek_auto: string[];
    zp_teruglevering: string[];
    kwh_netto_levering: string[];
    kwh_vergoeding: string[];
    zp_nodig: string[];
    extra_zp_boven: string[];
    aansluitvermogen_amp: string[];
    elek_stroom_gas_jr: string[];
    elek_totaal_jaar_mnd: string[];
    gas_stroom_gas_jr: string[];
    gas_totaal_jaar_mnd: string[];
  }>({
    bedrijf_naam: [],
    contact_persoon: [],
    straatnaam: [],
    huisnummer: [],
    plaats: [],
    postcode: [],
    telefoonnummer: [],
    email: [],
    bouwjaar: [],
    oppervlakte: [],
    vw_systeem: [],
    vw_type: [],
    isolatie: [],
    cv_temp: [],
    vent_type: [],
    glas_type: [],
    zp_aanwezig: [],
    elek_aantal_kwh: [],
    elek_kale_kwh: [],
    gas_aantal_kwh: [],
    gas_kale_kwh: [],
    aantal_gezinsleden: [],
    lager_gasverbruik: [],
    woon_oppervlak: [],
    gasverbr_correctie: [],
    km_met_elek_auto: [],
    zp_teruglevering: [],
    kwh_netto_levering: [],
    kwh_vergoeding: [],
    zp_nodig: [],
    extra_zp_boven: [],
    aansluitvermogen_amp: [],
    elek_stroom_gas_jr: [],
    elek_totaal_jaar_mnd: [],
    gas_stroom_gas_jr: [],
    gas_totaal_jaar_mnd: [],
  });

  const submitForm = () => {
    dashboard({
      bedrijf_naam,
      telefoonnummer,
      contact_persoon,
      setErrors
    });
  };
  


  const [status, setStatus] = useState<string | null>(null);
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 mt-10">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle>Berekenen</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Met de onderstaande knop kunt u een formulier openen waarmee
                    u uw energie berekeningen kan maken
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Maak een berekening</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[750px]">
                      <Slider />
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Berekeningen</CardDescription>
                  <CardTitle className="text-4xl">561</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    136 meer dan gisteren
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Gebruikers</CardDescription>
                  <CardTitle className="text-4xl">38</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    16 meer als vorig uur
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
            <div className="flex items-center"></div>

            <Card x-chunk="dashboard-05-chunk-3" className="min-h-[680px]">
              <CardHeader className="px-7">
                <CardTitle>Berekeningen</CardTitle>
                <CardDescription>Uw recente berekeningen</CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
          </div>
          <div className="mt-10">
          <Card className="overflow-hidden min-h-[878px] flex flex-col" x-chunk="dashboard-05-chunk-4">
  <CardHeader className="flex flex-row items-start bg-muted/50">
    <div className="grid gap-0.5">
      <CardTitle className="group flex items-center gap-2 text-lg">
        {user?.bedrijf_naam}
      </CardTitle>
      <CardDescription>{user?.account_type}</CardDescription>
    </div>
  </CardHeader>
  <CardContent className="p-6 text-sm flex-grow">
    <div className="grid gap-3">
      <div className="font-semibold">Contact gegevens</div>
      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Contact persoon
          </span>
          <span>{contact?.contact_persoon}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Telefoonnummer
          </span>
          <span>{contact?.telefoonnummer}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            E-mail
          </span>
          <span>{user?.email}</span>
        </li>
      </ul>
      <Separator className="my-2" />
      <div className="font-semibold">Adres gegevens</div>
      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Straatnaam</span>
          <span>{adres?.straatnaam}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Huisnummer</span>
          <span>{adres?.huisnummer}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Postcode</span>
          <span>{adres?.postcode}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">provincie</span>
          <span>{adres?.plaats}</span>
        </li>
      </ul>
    </div>
    <Separator className="my-4" />
    <div className="font-semibold mb-3 mt-9">Pand gegevens</div>
      <ul className="grid gap-3">
      <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Bouwjaar</span>
          <span>{gebouw?.bouwjaar}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Woon oppervlak</span>
          <span>{gebouw?.woon_oppervlak}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Aantal gezinsleden</span>
          <span>{gebouw?.aantal_gezinsleden}</span>
        </li>
        
      </ul>
    <Separator className="my-4" />
    <div className="grid gap-3">
      <div className="font-semibold mb-3 mt-9">Energielabel</div>
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Huidig energielabel</div>
          <div>{energielabel?.label}</div>
      </div>
    </div>
    
    </div>
    <Separator className="my-4" />
  </CardContent>
  <CardFooter className="flex flex-row items-center justify-between border-t bg-muted/50 px-6 py-3 mt-auto">
    <div className="text-xs text-muted-foreground">
      Updated <time dateTime="2023-11-23">November 23, 2023</time>
    </div>
    <Pagination className="ml-auto mr-0 w-auto" />
  </CardFooter>
</Card>
<Button onClick={submitForm}>fhdjsk
        </Button>

          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingsDashboard;
