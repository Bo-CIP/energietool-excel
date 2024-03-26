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

export default function CardWithForm() {
  return (
    <>
    {/*Eerste rij aan invoer velden op cards*/}

    {/*Eerste card */}

    <div className="flex flex-row">
      <div className="flex flex-col">
      <Card className="w-[560px] h-[280px] ml-36 mt-24">
        <CardHeader>
          <CardTitle className="mb-2">Huidig energieverbruik</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-1" htmlFor="name">Elektriciteit van energiemij (kWh eigen zonnepanelen niet aftrekken)</Label>
                <Input id="elektriciteit" placeholder="Uw waarden" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-1" htmlFor="framework">Gas m3 (maximaal 20.000 m3)</Label>
                <Input id="gas-m3" placeholder="Uw waarden"></Input>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
        </CardFooter>
      </Card>

      {/* Einde eerste card */}

      {/* Begin tweede card */}

      <Card className="w-[560px] mt-12 ml-36 ">
        <CardHeader>
          <CardTitle className=""></CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-1" htmlFor="name">Aantal gezinsleden? Vul 0 in bij bedrijf zonder tapwater op gas</Label>
                <Input id="elektriciteit" placeholder="Uw waarden" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-1" htmlFor="framework">Lager gasverbruik door hybride verwarming of airco (60-100%) klik op 90%</Label>
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
                <Label className="" htmlFor="framework">Oppervlak woning/bedrijf in m2 t.b.v. berekening energielabel</Label>
                <Input id="elektriciteit" placeholder="Uw waarden" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-1" htmlFor="framework">Correctie 50-100% extra gasverbruik voor onregelmatig gebruik klik op 0%</Label>
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
        <CardFooter className="flex justify-between">
        </CardFooter>
      </Card>

      {/*Einde tweede card */ }
      </div>

      {/*Einde eerste rij aan invoer velden op cards */}


      
      {/* Begin tweede rij aan invoer velden op cards*/}


    <Card className="w-[560px] h-[400px] mt-5 ml-24 mt-24 mb-1">
        <CardHeader>
          <CardTitle className=""></CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-1" htmlFor="name">Aantal gezinsleden? Vul 0 in bij bedrijf zonder tapwater op gas</Label>
                <Input id="elektriciteit" placeholder="Uw waarden" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label className="" htmlFor="framework">Oppervlak woning/bedrijf in m2 t.b.v. berekening energielabel</Label>
                <Input id="elektriciteit" placeholder="Uw waarden" />
              </div>
              
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
        </CardFooter>
      </Card>
      </div>

      

  
      {/*Einde tweede rij aan invoer velden op cards */}
    
      
  </>


  );
}