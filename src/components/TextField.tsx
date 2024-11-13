import { Field, Input, Label } from "@headlessui/react";

export function TextField(props: any) {
  const { label, placeholder, type = "text", value, onChange } = props;

  return (
    <Field className="w-full">
      <Label className="text-sm/6 font-medium text-gray-900">{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border-none px-3 py-1.5 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 sm:text-sm/6"
      />
    </Field>
  );
}
