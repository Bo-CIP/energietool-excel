import {z} from "zod";
import validator from "validator";

export type FinalForm = {
    stap1: Stap1Form
    stap2: Stap2Form
}

export type Stap1Form = {
    bedrijf_naam: string;
    contactpersoon_naam: string;
    straatnaam: string;
    huisnummer: string;
    plaats: string;
    postcode: string; 
    telefoonnummer: string;
    email: string;

}

export type Stap2Form = {
    bouwjaar: number | undefined;
    oppervlakte: string;
    vw_systeem: string;
    verwarming: string;
    isolatie_type: string;
    cv_temp: string; 
    ventilatie: string;
    glas_type: string;
    zp_aanwezig: string;

}



const FormDataStap1 = z.object({
    bedrijf_naam: z.string().min(5).max(50),
    contactpersoon_naam: z.string().min(1).max(50),
    straatnaam: z.string().min(5).max(50),
    huisnummer: z.string().min(1).max(10),
    plaats: z.string().min(5).max(50),
    postcode: z.string().regex(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i),          
    telefoonnummer: z.string().refine(validator.isMobilePhone),
    email: z.string().email()
  });

  const FormDataStap2 = z.object({
    bouwjaar: z.number().int().min(4).max(4),
    oppervlakte: z.string().min(1).max(18),
    vw_systeem: z.string().min(1).max(18),
    verwarming: z.string().min(1).max(18),
    isolatie_type: z.string().min(1).max(50),
    cv_temp: z.number().min(1).max(18),
    ventilatie: z.string().min(1).max(50),
    glas_type: z.string().email(),
    zp_aanwezig: z.string().min(10).max(10)
});
 

export function Stap1Validator(form: FinalForm) {
    
        const isValidData = FormDataStap1.safeParse(form.stap1);
        return isValidData;
};
    
export function Stap2Validator(form: FinalForm) {

        const isValidData = FormDataStap2.safeParse(form.stap2);
        return isValidData;
}
