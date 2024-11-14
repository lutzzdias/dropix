import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { OrderSuccess } from "./Success";
import { OrderForm } from "./Form";
import { useDialogContext } from "../../context/DialogContext";

export function OrderDialog() {
  const { isOpen, setIsOpen, success, setSuccess } = useDialogContext();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSuccess(false);
    }, 100);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 transition duration-300 ease-out focus:outline-none data-[closed]:opacity-0"
        onClose={handleClose}
        transition
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="flex w-full max-w-lg flex-col gap-6 rounded-lg bg-white p-6 shadow-md"
            >
              <DialogTitle
                as="h3"
                className="text-xl font-medium text-gray-900"
              >
                {success ? "Order successfull" : "Register order"}
              </DialogTitle>
              {success ? <OrderSuccess /> : <OrderForm />}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
