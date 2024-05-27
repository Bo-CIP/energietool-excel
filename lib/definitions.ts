import {z} from "zod";
import validator from "validator";

export type FinalForm = {
    bedrijf_naam: string;
    contact_persoon: string;
    straatnaam: string;
    huisnummer: string;
    plaats: string;
    postcode: string; 
    telefoonnummer: string;
    email: string;
    bouwjaar: string;
    oppervlakte: string;
    vw_systeem: string;
    vw_type: string;
    isolatie: string;
    cv_temp: string; 
    vent_type: string;
    glas_type: string;
    zp_aanwezig: string;
    elek_aantal_kwh: string;
    elek_kale_kwh: string;
    gas_aantal_kwh: string;
    gas_kale_kwh: string;
    aantal_gezinsleden: string;
    lager_gasverbruik: string;
    woon_oppervlak: string;
    gasverbr_correctie: string;
    km_met_elek_auto: string;
    zp_teruglevering: string;
    kwh_netto_levering: string;
    kwh_vergoeding: string;
    zp_nodig: string;
    extra_zp_boven: string;
    aansluitvermogen_amp: string;
}




const formSchema = z.object({
  bedrijf_naam: z.string(),
  contact_persoon: z.string(),
  straatnaam: z.string(),
  huisnummer: z.string(),
  plaats: z.string(),
  postcode: z.string(),
  telefoonnummer: z.string(),
  email: z.string().email(), // Controleert of het een geldig e-mailadres is
  bouwjaar: z.string(),
  oppervlakte: z.string(),
  vw_systeem: z.string(),
  vw_type: z.string(),
  isolatie: z.string(),
  cv_temp: z.string(),
  vent_type: z.string(),
  glas_type: z.string(),
  zp_aanwezig: z.string(),
  elek_aantal_kwh: z.string(),
  elek_kale_kwh: z.string(),
  gas_aantal_kwh: z.string(),
  gas_kale_kwh: z.string(),
  aantal_gezinsleden: z.string(),
  lager_gasverbruik: z.string(),
  woon_oppervlak: z.string(),
  gasverbr_correctie: z.string(),
  km_met_elek_auto: z.string(),
  zp_teruglevering: z.string(),
  kwh_netto_levering: z.string(),
  kwh_vergoeding: z.string(),
  zp_nodig: z.string(),
  extra_zp_boven: z.string(),
  aansluitvermogen_amp: z.string(),
});
