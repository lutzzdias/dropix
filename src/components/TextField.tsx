import { Field, Input, Label } from "@headlessui/react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextFieldProps = {
  register: UseFormRegisterReturn;
  label: string;
  placeholder: string;
  type?: string;
  errors?: FieldError;
};

export function TextField(props: TextFieldProps) {
  const { register, label, placeholder, type = "text", errors } = props;

  return (
    <Field className="w-full">
      <Label className="text-sm/6 font-medium text-gray-900">{label}</Label>
      <Input
        {...register}
        type={type}
        placeholder={placeholder}
        className={` ${errors ? "ring-red-600 focus:ring-red-900" : "ring-gray-200 focus:ring-gray-900"} w-full rounded-md border-none px-3 py-1.5 text-gray-900 ring-1 placeholder:text-gray-400 focus:outline-none focus:ring-1 sm:text-sm/6`}
      />
      {errors && <div className="text-xs text-red-600">{errors.message}</div>}
    </Field>
  );
}
