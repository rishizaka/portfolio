import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { cn } from "@/utils/cn";

const buttonVariant = cva(
  "py-2.5 px-3.5 rounded-md text-white focus:outline-[#5881E0] focus:outline-8 flex justify-center",
  {
    variants: {
      variant: {
        default: "bg-navy hover:bg-[#265F84]",
        secondary: "bg-[#948979] text-navy hover:bg-[#DFD0B8]",
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
  className?: string;
}

export const Button = ({
  variant,
  outline,
  className = "",
  asChild = false,
  children,
  ...props
}: Props) => {
  const Comp = asChild ? Slot : "button";
  return (
    // <Comp className={clsx(buttonVariant({ variant, outline }))} {...props}>
    <Comp
      className={cn(
        "py-2.5 px-3.5 rounded-md text-white focus:outline-[#5881E0] focus:outline-8 flex justify-center bg-navy",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
