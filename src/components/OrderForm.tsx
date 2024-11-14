import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { TextField } from "./TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "E-mail is required").email("Invalid e-mail"),
  phone_number: z.string().min(8, "Phone number is required"),
  street_number: z.coerce
    .number()
    .min(1, "Street number is required")
    .positive("Invalid street number"),
  street: z.string().min(1, "Street is required"),
  district: z.string().min(1, "District is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
});

export function OrderForm(props: any) {
  const { isOpen, close, productId } = props;

  const [orderSuccess, setOrderSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const requestBody = data;

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
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        register={register("name")}
                        label="Name"
                        placeholder="John Doe"
                        errors={errors.name}
                      />
                      <TextField
                        register={register("email")}
                        label="Email"
                        placeholder="johndoe@gmail.com"
                        errors={errors.email}
                      />
                      <TextField
                        register={register("phone_number")}
                        label="Phone"
                        placeholder="(12) 3456-7890"
                        errors={errors.phone_number}
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
                            register={register("street")}
                            label="Street"
                            placeholder="Elm Street"
                            errors={errors.street}
                          />
                        </div>
                        <div className="w-32">
                          <TextField
                            register={register("street_number")}
                            label="Number"
                            placeholder="42"
                            errors={errors.street_number}
                          />
                        </div>
                      </div>

                      <TextField
                        register={register("district")}
                        label="District"
                        placeholder="Downtown"
                        errors={errors.district}
                      />

                      <div className="flex w-full gap-4">
                        <div className="flex-1">
                          <TextField
                            register={register("city")}
                            label="City"
                            placeholder="Anytown"
                            errors={errors.city}
                          />
                        </div>
                        <div className="w-32">
                          <TextField
                            register={register("state")}
                            label="State"
                            placeholder="Nowhere"
                            errors={errors.state}
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
                      type="submit"
                    >
                      Confirm
                    </Button>
                  </div>
                </form>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
