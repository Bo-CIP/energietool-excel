// Stap3Context.tsx
import React, { createContext, useContext, useState } from 'react';

interface FormData {
  zp_teruglevering: string;
  kwh_netto_levering: string;
  kwh_vergoeding: string;
  zp_nodig: string;
  extra_zp_boven: string;
  aansluitvermogen_amp: string;
}

interface Stap4ContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Stap4Context = createContext<Stap4ContextType | undefined>(undefined);

export const useStap4Context = () => {
  const context = useContext(Stap4Context);
  if (!context) {
    throw new Error('useStap3Context must be used within a Stap3Provider');
  }
  return context;
};

interface Stap4ProviderProps {
  children: React.ReactNode;
}

export const Stap4Provider: React.FC<Stap4ProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    zp_teruglevering: '',
    kwh_netto_levering: '',
    kwh_vergoeding: '',
    zp_nodig: '',
    extra_zp_boven: '',
    aansluitvermogen_amp: ''
  });

  return (
    <Stap4Context.Provider value={{ formData, setFormData }}>
      {children}
    </Stap4Context.Provider>
  );
};
