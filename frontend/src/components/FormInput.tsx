import { RiErrorWarningFill } from "@remixicon/react";
import { TextInput } from "@tremor/react";
import { UseFormRegisterReturn } from "react-hook-form";

type PropTypes = {
  label: string;
  id: string;
  type: "text" | "password" | "email" | "url" | undefined;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string | null;
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
        className={`${error ? "border border-red-500" : ""}`}
      />
      {error ? (
        <small className="text-sm mt-1 text-red-700 flex items-center gap-1">
          <RiErrorWarningFill size={16} />
          <span>{error}</span>
        </small>
      ) : null}
    </>
  );
}
