// Stap3Context.tsx
import React, { createContext, useContext, useState } from 'react';

interface FormData {
  elek_aantal_kwh: string;
  elek_kale_kwh: string;
  gas_aantal_kwh: string;
  gas_kale_kwh: string;
  aantal_gezinsleden: string;
  woon_oppervlak: string;
  lager_gasverbruik: string;
  gasverbr_correctie: string;
  km_met_elek_auto: string;
}

interface Stap3ContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Stap3Context = createContext<Stap3ContextType | undefined>(undefined);

export const useStap3Context = () => {
  const context = useContext(Stap3Context);
  if (!context) {
    throw new Error('useStap3Context must be used within a Stap3Provider');
  }
  return context;
};

interface Stap3ProviderProps {
  children: React.ReactNode;
}

export const Stap3Provider: React.FC<Stap3ProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    elek_aantal_kwh: '',
    elek_kale_kwh: '',
    gas_aantal_kwh: '',
    gas_kale_kwh: '',
    aantal_gezinsleden: '',
    woon_oppervlak: '',
    lager_gasverbruik: '',
    gasverbr_correctie: '',
    km_met_elek_auto: '',
  });

  return (
    <Stap3Context.Provider value={{ formData, setFormData }}>
      {children}
    </Stap3Context.Provider>
  );
};
