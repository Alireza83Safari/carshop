import { inputProps } from "@/types/form.type";
import React from "react";

const Input = ({
  label,
  name,
  error,
  className,
  placeholder,
  type,
  onChange,
  value,
  onfocus,
  defaultValue,
}: inputProps) => {
  return (
    <>
      <label className="bolck text-sm mb-2 px-1">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        name={name}
        className={`w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={onfocus}
        defaultValue={defaultValue}
        required
      />
      <p className="text-red text-sm">{error}</p>
    </>
  );
};

export default Input;
