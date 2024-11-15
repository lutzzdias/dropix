import { Button } from "@headlessui/react";
import { useDialogContext } from "../../context/DialogContext";

export function OrderSuccess() {
  const { setIsOpen, setSuccess } = useDialogContext();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSuccess(false);
    }, 100);
  };

  return (
    <>
      <p className="mt-2 text-sm/6 text-gray-900/50">
        Your order has been successfully submitted. Thank you for your purchase!
      </p>
      <Button
        className="rounded-md px-3 py-1.5 text-sm/6 font-semibold text-gray-700 shadow-sm ring-1 ring-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        onClick={handleClose}
      >
        Close
      </Button>
    </>
  );
}
