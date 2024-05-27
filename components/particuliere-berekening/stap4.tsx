import React, {Dispatch, SetStateAction, useState} from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Terminal } from "lucide-react";
import { CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { FinalForm } from "@/lib/definitions";
import { useAuth } from "@/hooks/auth";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";


interface Props {
  value: FinalForm
  setValue: Dispatch<SetStateAction<FinalForm>>
}

const Stap4: React.FC<Props> = (props) => {
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
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="flex flex-col space-y-1.5 ">
                  <Label className="" htmlFor="name">
                    Teruglever aantal van zonnepanelen in kWh
                  </Label>
                  <Input
                    maxLength={30}
                    name="zp_teruglevering"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.zp_teruglevering}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                  Netto levering door energieleverancier kWh berekend
                  </Label>
                  <Input
                    maxLength={30}
                    name="kwh_netto_levering"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.kwh_netto_levering}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                    Vergoeding per kWh
                  </Label>
                  <Input
                    maxLength={30}
                    name="kwh_vergoeding"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.kwh_vergoeding}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                    Aantal panelen nodig
                  </Label>
                  <Input
                    maxLength={30}
                    name="zp_nodig"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.zp_nodig}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="name">
                    Extra zonnepanelen boven
                  </Label>
                  <Input
                    maxLength={30}
                    name="extra_zp_boven"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.extra_zp_boven}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col space-y-1.5">
                  <Label className="" htmlFor="framework">
                    Aansluitvermogen in Amp
                  </Label>
                  <Input
                    maxLength={30}
                    name="aansluitvermogen_amp"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.aansluitvermogen_amp}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 mt-12">
                <Alert>
                  <CircleAlert />
                  <AlertTitle className="ml-2">Let op!</AlertTitle>
                  <AlertDescription className="ml-2">
                    Het meeste van de bovenstaande gegevens komen van uw energie
                    leverancier, u kunt hun het best benaderen als u vragen
                    heeft over uw verbruik.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
          <Button type="submit">Test</Button>
        </form>
      </div>
    </>
  );
}

export default Stap4;
