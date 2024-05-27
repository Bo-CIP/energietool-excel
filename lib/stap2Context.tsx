
// Stap2Context.tsx
import React, { createContext, useContext, useState } from 'react';

interface FormData {
  bouwjaar: string;
  woon_oppervlak: string;
  vw_systeem: string;
  verwarming: string;
  isolatie: string;
  cv_temp: string;
  ventilatie: string;
  glas_type: string;
  zp_aanwezig: string;
}

interface Stap2ContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Stap2Context = createContext<Stap2ContextType | undefined>(undefined);

export const useStap2Context = () => {
  const context = useContext(Stap2Context);
  if (!context) {
    throw new Error('useStap2Context must be used within a Stap3Provider');
  }
  return context;
};

interface Stap2ProviderProps {
  children: React.ReactNode;
}

export const Stap2Provider: React.FC<Stap2ProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    bouwjaar: '',
    woon_oppervlak: '',
    vw_systeem: '',
    verwarming: '',
    isolatie: '',
    cv_temp: '',
    ventilatie: '',
    glas_type: '',
    zp_aanwezig: '',
  });

  return (
    <Stap2Context.Provider value={{ formData, setFormData }}>
      {children}
    </Stap2Context.Provider>
  );
};
