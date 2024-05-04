import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: "text" | "email" | "password" | "tel";
}

export const TextInput = ({ type, name, ...props }: Props) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="border border-navy rounded-sm px-2 py-1"
      {...props}
    />
  );
};
