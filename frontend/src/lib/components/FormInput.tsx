import { TextInput } from "@tremor/react";
import { UseFormRegisterReturn } from "react-hook-form";

type PropTypes = {
  label: string;
  id: string;
  type: "text" | "password" | "email" | "url" | undefined;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
};

export default function FormInput({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: PropTypes) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        errorMessage={error}
        error={!!error}
      />
    </>
  );
}
