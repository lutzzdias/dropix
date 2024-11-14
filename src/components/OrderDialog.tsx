import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { OrderSuccess } from "./OrderSuccess";
import { OrderForm } from "./OrderForm";

export function OrderDialog(props: any) {
  const { isOpen, close, productId } = props;

  const [success, setSuccess] = useState(false);

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 transition duration-300 ease-out focus:outline-none data-[closed]:opacity-0"
        onClose={close}
        transition
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="flex w-full max-w-lg flex-col gap-6 rounded-lg bg-white p-6 shadow-md"
            >
              {success ? (
                <>
                  <DialogTitle
                    as="h3"
                    className="text-xl font-medium text-gray-900"
                  >
                    Order successfull
                  </DialogTitle>

                  <OrderSuccess />
                </>
              ) : (
                <>
                  <DialogTitle
                    as="h3"
                    className="text-xl font-medium text-gray-900"
                  >
                    Register order
                  </DialogTitle>

                  <OrderForm
                    setSuccess={setSuccess}
                    productId={productId}
                    close={close}
                  />
                </>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
