import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { TextField } from "./TextField";
import { useState } from "react";

export function OrderForm(props: any) {
  const { isOpen, close, productId } = props;

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
  });

  function handleChange(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function order() {
    const requestBody = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      street_number: +formData.number,
      street: formData.street,
      district: formData.district,
      city: formData.city,
      state: formData.state,
      product_id: +productId,
    };

    try {
      const response = await fetch(
        `https://api-candidate.ogruposix.com/buy/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "user-token": "2A50C22E-7954-4C73-9CF9-F6D298C047A7",
          },
          body: JSON.stringify(requestBody),
        },
      );

      if (response.ok) {
        setOrderSuccess(true);
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  }

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
              {orderSuccess && (
                <>
                  <DialogTitle
                    as="h3"
                    className="text-xl font-medium text-gray-900"
                  >
                    Order successfull
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-gray-900/50">
                    Your order has been successfully submitted. Thank you for
                    your purchase!
                  </p>
                  <Button
                    className="rounded-md px-3 py-1.5 text-sm/6 font-semibold text-gray-700 shadow-sm ring-1 ring-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    onClick={close}
                  >
                    Close
                  </Button>
                </>
              )}
              {!orderSuccess && (
                <>
                  <DialogTitle
                    as="h3"
                    className="text-xl font-medium text-gray-900"
                  >
                    Register order
                  </DialogTitle>

                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-base font-medium text-gray-900">
                      Personal information
                    </h4>

                    <div className="flex flex-col gap-2">
                      <TextField
                        label="Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(value: string) =>
                          handleChange("name", value)
                        }
                      />
                      <TextField
                        label="Email"
                        placeholder="johndoe@gmail.com"
                        value={formData.email}
                        onChange={(value: string) =>
                          handleChange("email", value)
                        }
                      />
                      <TextField
                        label="Phone"
                        placeholder="(12) 3456-7890"
                        value={formData.phone}
                        onChange={(value: string) =>
                          handleChange("phone", value)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-base font-medium text-gray-900">
                      Address
                    </h4>

                    <div className="flex flex-col gap-2">
                      <div className="flex w-full gap-4">
                        <div className="flex-1">
                          <TextField
                            label="Street"
                            placeholder="Elm Street"
                            value={formData.street}
                            onChange={(value: string) =>
                              handleChange("street", value)
                            }
                          />
                        </div>
                        <div className="w-32">
                          <TextField
                            label="Number"
                            placeholder="42"
                            value={formData.number}
                            onChange={(value: string) =>
                              handleChange("number", value)
                            }
                          />
                        </div>
                      </div>

                      <TextField
                        label="District"
                        placeholder="Downtown"
                        value={formData.district}
                        onChange={(value: string) =>
                          handleChange("district", value)
                        }
                      />

                      <div className="flex w-full gap-4">
                        <div className="flex-1">
                          <TextField
                            label="City"
                            placeholder="Anytown"
                            value={formData.city}
                            onChange={(value: string) =>
                              handleChange("city", value)
                            }
                          />
                        </div>
                        <div className="w-32">
                          <TextField
                            label="State"
                            placeholder="Nowhere"
                            value={formData.state}
                            onChange={(value: string) =>
                              handleChange("state", value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      className="rounded-md px-3 py-1.5 text-sm/6 font-semibold text-gray-700 shadow-sm ring-1 ring-red-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={close}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="rounded-md px-3 py-1.5 text-sm/6 font-semibold text-gray-700 shadow-sm ring-1 ring-green-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={order}
                    >
                      Confirm
                    </Button>
                  </div>
                </>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
