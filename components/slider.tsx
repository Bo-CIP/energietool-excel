// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Stap1 from "./particuliere-berekening/stap1";
import Stap2 from "./particuliere-berekening/stap2";
import Stap3 from "./particuliere-berekening/stap3";
import Stap4 from "./particuliere-berekening/stap4";
import { Progress } from "./ui/progress";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import { SetStateAction, useActionState, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FinalForm } from "@/lib/definitions";
import { ZodError, ZodIssue } from "zod";
import { useAuth } from "@/hooks/auth";

export default () => {
  const { berekening } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });
  var [currentprogressvalue, setProgressValue] = useState(25);
  const [my_swiper, setMySwiper] = useState<SwiperClass>();
  var [currentindexvalue, setCurrentIndexValue] = useState(1);
  var [formState, setFormState] = useState<FinalForm>({
    bedrijf_naam: "",
    contact_persoon: "",
    straatnaam: "",
    huisnummer: "",
    plaats: "",
    postcode: "",
    telefoonnummer: "",
    email: "",
    bouwjaar: "",
    oppervlakte: "",
    vw_systeem: "",
    vw_type: "Vloer",
    isolatie: "Ja",
    cv_temp: "",
    vent_type: "",
    glas_type: "",
    zp_aanwezig: "",
    elek_aantal_kwh: "",
    elek_kale_kwh: "",
    gas_aantal_kwh: "",
    gas_kale_kwh: "",
    aantal_gezinsleden: "",
    lager_gasverbruik: "",
    woon_oppervlak: "",
    gasverbr_correctie: "",
    km_met_elek_auto: "",
    zp_teruglevering: "",
    kwh_netto_levering: "",
    kwh_vergoeding: "",
    zp_nodig: "",
    extra_zp_boven: "",
    aansluitvermogen_amp: "",
    elek_stroom_gas_jr: "",
    elek_totaal_jaar_mnd: "",
    gas_stroom_gas_jr: "",
    gas_totaal_jaar_mnd: ""
  });

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

  useEffect(() => {}, [currentindexvalue]);

  const getButtonValue = () => {
    if (currentindexvalue == 4) {
      return (
        <Button onClick={submitForm}>
          <Link href="dashboard/resultaat">Ga naar uw resulaten</Link>;
        </Button>
      );
    } else {
      return <ArrowRight />;
    }
  };

  const submitForm = () => {
    berekening({
      formState,
      setErrors,
    });
  };

  return (
    <>
      <div className="flex box-content bg-black h-4 w-4 p-4 rounded-md items-center justify-self-center mt-8">
        <p className="text-white mx-auto font-bold">{currentindexvalue}</p>
      </div>
      <div className="flex justify-center">
        <Progress
          value={currentprogressvalue}
          className="max-w-[450px] justify-center"
        />
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        simulateTouch={false}
        onInit={(swiper) => setMySwiper(swiper)}
        onSlideChange={(index) => {
          setProgressValue((index.activeIndex + 1) * 25);
          setCurrentIndexValue(index.activeIndex + 1);
        }}
      >
        <SwiperSlide>
          <Stap1 value={formState} setValue={setFormState} />
        </SwiperSlide>
        <SwiperSlide>
          <Stap2 value={formState} setValue={setFormState} />
        </SwiperSlide>
        <SwiperSlide>
          <Stap3 value={formState} setValue={setFormState} />
        </SwiperSlide>
        <SwiperSlide>
          <Stap4 value={formState} setValue={setFormState} />
        </SwiperSlide>
      </Swiper>
      {/* {
        errors && errors.map((error, index) => (
          <h1 key={index} className='text-red'>{error.message}</h1>
        ))
      } */}
      <div className="flex mt-16 justify-center gap-56">
        <Button
          disabled={currentindexvalue == 1}
          className=""
          onClick={() => my_swiper!.slidePrev()}
        >
          <ArrowLeft />
        </Button>
        <Button className="" onClick={() => my_swiper!.slideNext()}>
          {getButtonValue()}
        </Button>
      </div>
    </>
  );
};
