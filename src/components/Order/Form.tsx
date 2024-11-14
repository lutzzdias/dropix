import { Button } from "@headlessui/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../api";
import { TextField } from "../TextField";
import { useDialogContext } from "../../context/DialogContext";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "E-mail is required").email("Invalid e-mail"),
  phone_number: z
    .string()
    .min(1, "Phone number is required")
    .min(8, "Invalid phone number"),
  street_number: z.coerce
    .number()
    .min(1, "Street number is required")
    .positive("Invalid street number"),
  street: z.string().min(1, "Street is required"),
  district: z.string().min(1, "District is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
});

export function OrderForm() {
  const { setSuccess, productId, setIsOpen } = useDialogContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    api
      .postOrder({ ...data, product_id: productId })
      .then(() => setSuccess(true))
      .catch((error) => alert(error));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5">
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
        <h4 className="text-base font-medium text-gray-900">Address</h4>

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
          onClick={() => setIsOpen(false)}
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
  );
}
