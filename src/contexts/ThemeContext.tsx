import React, { createContext, useContext, useState } from "react";

interface ButtonContextProps {
  buttonState: string;
  setButtonState: (state: string) => void;
}

const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

export const ButtonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [buttonState, setButtonState] = useState<string>("default");

  return (
    <ButtonContext.Provider value={{ buttonState, setButtonState }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
};