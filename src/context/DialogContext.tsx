import { createContext, useContext, useState, ReactNode } from "react";
import { DialogContextType } from "../types";

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogContextProvider(props: {
  productId: number;
  children: ReactNode;
}) {
  const { productId, children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <DialogContext.Provider
      value={{ isOpen, setIsOpen, success, setSuccess, productId }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "useDialogContext must be used within a DialogContextProvider",
    );
  }
  return context;
};
