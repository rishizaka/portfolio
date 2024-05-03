import { VariantProps, cva } from "class-variance-authority";
import classNames from "classnames";
import { isValidElement } from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariant = cva(
  "font-medium py-2.5 px-3.5 rounded-md text-white focus:outline-[#5881E0] focus:outline-8",
  {
    variants: {
      variant: {
        default: "bg-[#153448] hover:bg-[#265F84]",
        secondary: "bg-[#948979] text-[#153448] hover:bg-[#DFD0B8]",
        link: "bg-transparent text-black underline hover:no-underline px-0 py-0",
      },
      outline: {
        true: "border border-[#B9CDD9]",
      },
      size: {
        default: "h-[44px]",
        lg: "h-12",
      },
    },
    compoundVariants: [
      {
        variant: "secondary",
        outline: true,
        class: "border-[#153448]",
      },
    ],
    defaultVariants: {
      variant: "default",
      outline: false,
      size: "default",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  asChild?: boolean;
}

export const Button = ({
  variant,
  outline,
  className,
  asChild = false,
  children,
  ...props
}: Props) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={classNames(buttonVariant({ variant, outline }))}
      {...props}
    >
      {children}
    </Comp>
  );
};
