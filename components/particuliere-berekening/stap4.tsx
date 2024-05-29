import React, { Dispatch, SetStateAction } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { FinalForm } from "@/lib/definitions";
import { useAuth } from "@/hooks/auth";
import { Button } from "../ui/button";

interface Props {
  value: FinalForm;
  setValue: Dispatch<SetStateAction<FinalForm>>;
}

const Stap4: React.FC<Props> = (props) => {
  const { berekening } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

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
      <div className="flex justify-center mt-6">
        <form className="min-w-[500px] max-w-[500px]">
          <div className="grid w-full items-center gap-4">
            {/* Section for solar panel data */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="flex flex-col space-y-1.5">
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
                    name="elek_aantal_kwh"
                    id=""
                    placeholder="Uw waarden"
                    value={props.value.elek_aantal_kwh}
                    onChange={handleChange}
                    disabled={true}
                  />
                </div>
              </div>
            </div>

            {/* Section for compensation and needed panels */}
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

            {/* Section for additional panels and connection capacity */}
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

            {/* Alert section */}
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
        </form>
      </div>
    </>
  );
}

export default Stap4;
