"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Calculator } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import Background from "@/components/ui/Background";
import { Chart } from "@/components/ui/chart";
import { Home } from "lucide-react";
import CardBackground from "@/components/ui/CardBackground";
import Image from "next/image";

export default function CardWithForm() {
  return (
    <>
      <Background />

      {/*Begin eerste rij aan invoer velden op cards*/}

      {/*Eerste card */}

      <div className="flex flex-row z-[10]">
        <div className="flex flex-col">
          <Card className="card w-[550px] h-[600px] ml-16 mt-8">
            <CardHeader>
              <CardTitle className="mb-2">Bedrijf gegevens</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="name">
                      Naam bedrijf
                    </Label>
                    <Input id="elektriciteit" placeholder="Uw waarden" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="framework">
                      Naam contactpersoon/bewoner
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="framework">
                      Straat en huisnummer
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="framework">
                      Postcode plaats
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="framework">
                      Telefoonnummer
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="framework">
                      Emailadres
                    </Label>
                    <Input id="gas-m3" placeholder="Uw waarden"></Input>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>

          {/* Einde eerste card */}

          {/* Begin tweede card */}

          <Card className="card w-[550px] h-[450px] mt-8 ml-16 mb-8 ">
            <CardHeader>
              <CardTitle className=""></CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="name">
                      Wat is het bouwjaar van het pand/woning
                    </Label>
                    <Input id="elektriciteit" placeholder="Uw waarden" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mb-1" htmlFor="framework">
                      Hoeveel m2 woonoppervlak?
                    </Label>
                    <Input id="" placeholder="Uw waarde" />
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mb-1 mt-1" htmlFor="framework">
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
                      <Label className="mb-1" htmlFor="framework">
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
                      <Label className="mb-1" htmlFor="framework">
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
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>

          {/*Einde tweede card */}
        </div>

        {/*Einde eerste rij aan invoer velden op cards*/}

        {/*Begin tweede rij aan invoer velden op cards*/}

        {/*Eerste card */}

        <div className="flex flex-row">
          <div className="flex flex-col">
            <Card className="card w-[555px] h-[280px] ml-8 mt-8 ">
              <CardHeader>
                <CardTitle className="mb-2">Huidig energieverbruik</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
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
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
            {/* Einde eerste card */}
            {/* Begin tweede card */}
            <Card className="card w-[555px] h-[388px] mt-8 ml-8 ">
              <CardHeader>
                <CardTitle className=""></CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mb-1" htmlFor="name">
                        Aantal gezinsleden? Vul 0 in bij bedrijf zonder tapwater
                        op gas
                      </Label>
                      <Input id="elektriciteit" placeholder="Uw waarden" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mb-1" htmlFor="framework">
                        Lager gasverbruik door hybride verwarming of airco
                        (60-100%) klik op 90%
                      </Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Kies uit..." />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="60">60%</SelectItem>
                          <SelectItem value="70">70%</SelectItem>
                          <SelectItem value="80">80%</SelectItem>
                          <SelectItem value="90">90%</SelectItem>
                          <SelectItem value="100">100%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="" htmlFor="framework">
                        Oppervlak woning/bedrijf in m2 t.b.v. berekening
                        energielabel
                      </Label>
                      <Input id="elektriciteit" placeholder="Uw waarden" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mb-1" htmlFor="framework">
                        Correctie 50-100% extra gasverbruik voor onregelmatig
                        gebruik klik op 0%
                      </Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Kies uit..." />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="50">50%</SelectItem>
                          <SelectItem value="60">60%</SelectItem>
                          <SelectItem value="70">70%</SelectItem>
                          <SelectItem value="80">80%</SelectItem>
                          <SelectItem value="90">90%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>{" "}
            {/*Einde tweede card */}
            <Card className="card w-[560px] h-[350px] ml-8 mt-8 mb-3">
              <CardHeader>
                <CardTitle className="mb-4">Uw energielabel</CardTitle>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Let op!</AlertTitle>
                  <AlertDescription>
                    C is het minimum voor een bedrijfspand of 100 m2 kantoor
                  </AlertDescription>
                </Alert>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mb-1" htmlFor="name">
                        kWh
                      </Label>
                      <Input id="elektriciteit" placeholder="Uw waarden" />
                    </div>
                  </div>
                </form>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-[200px] h-[50px] mt-8 ml-40 items-center">
                      Bereken uw energielabel
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="mb-8">
                        Uw huidige energielabel is
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-center text-5xl mt-64">
                        G
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-6">
                      <AlertDialogAction>Oke</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
            {/*Begin derde card*/}
          </div>

          {/*Einde tweede rij aan invoer velden op cards */}

          {/* Begin derde rij aan invoer velden op cards*/}

          <div className="flex flex-row">
            <div className="flex flex-col">
              <Card className="card w-[560px] h-[700px] ml-8 mt-8 mb-1">
                <CardHeader>
                  <CardTitle className=""></CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label className="mb-1" htmlFor="name">
                          Teruglevering bestaande zonnepanelen, hoeveel kWh ?
                        </Label>
                        <Input id="elektriciteit" placeholder="Uw waarden" />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label className="" htmlFor="framework">
                          Netto levering door energieleverancier kWh berekend
                        </Label>
                        <Input id="elektriciteit" placeholder="Uw waarden" />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label className="" htmlFor="framework">
                          Vergoeding per kWh voor netto teruglevering boven
                          eigen verbruik
                        </Label>
                        <Input id="elektriciteit" placeholder="Uw waarden" />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label className="" htmlFor="framework">
                          Aantal panelen nodig voor verbruik inclusief
                          <p className="mt-2">
                            <span className="text-orange-500">HYBRIDE WP</span>,
                            <span className="text-blue-300">
                              {" "}
                              LUCHTWATER WP
                            </span>{" "}
                            en
                            <span className="text-green-500">
                              {" "}
                              GRONDWATER WP
                            </span>
                          </p>
                          <p className="mt-2 ">
                            Dakruimte aanwezig voor extra zonnepanelen 420 WP
                            per paneel 2 m2
                          </p>
                        </Label>
                        <Input id="elektriciteit" placeholder="Uw waarden" />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label className="" htmlFor="framework">
                          Extra zonnepanelen boven berekend minimum aantal
                          (bijv. bij schaduw)
                        </Label>
                        <Input id="elektriciteit" placeholder="Uw waarden" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label className="" htmlFor="framework">
                          Netto levering door energieleverancier kWh berekend
                        </Label>
                        <Input id="elektriciteit" placeholder="Uw waarden" />
                      </div>
                    </div>
                  </form>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-[300px] h-[50px] mt-8 ml-28 items-center">
                        Bereken uw energieverbruik
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="min-w-[1600px] h-[910px] flex flex-col justify-between">
                      <DialogHeader>
                        <DialogTitle className="mb-8">
                          Hieronder ziet u uw berekend energieverbruik
                        </DialogTitle>
                        <DialogDescription className="text-center text-5xl mt-64">
                          <Chart />
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="mt-6">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="default"
                            className="mb-5"
                          >
                            Sluiten
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>

              <Card className="card w-[560px] h-[175px] ml-8 mt-7 mb-1">
                <CardHeader>
                <Image
                    src="/images/logo.png"
                    quality={100}
                    width={600}
                    height={135}
                    alt="Picture of the author"
                  />
                  <CardTitle className="mt-9 text-center"></CardTitle>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>

              <Button
                type="button"
                variant="ghost"
                className="card w-[560px] h-[75px] ml-8 mt-2 mb-1 bg-white"
              >
                <div className="flex items-center">
                  <Calculator className="mr-2" />
                  <span className="text-black">
                    Zie uw eerdere berekeningen
                  </span>
                </div>
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="card w-[560px] h-[75px] ml-8 mt-2 mb-1 bg-white"
              >
                <div className="flex items-center">
                  <Home className="mr-2" />
                  <span className="text-black">
                    Ga terug naar de home pagina
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/*Einde derde rij aan invoer velden op cards */}
    </>
  );
}
