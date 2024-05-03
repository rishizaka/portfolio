import { VariantProps, cva } from "class-variance-authority"

const buttonVaritant = cva(['font-medium', 'py-2.5', 'px-3.5', 'rounded-md'], {
    variants: {
        variant: {
        default: ['bg-blue-500', 'text-white'],
        primary: ['bg-blue-500', 'text-white'],
        secondary: ['bg-black', 'text-white'],
        ghost: ['text-blue-500'],
      },
    },
    defaultVariants: {
        variant: 'primary',
    },
  })
  
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> ,
VariantProps<typeof buttonVaritant> {

}

export const Button = ({ className, variant, ...props }: Props) => {
    return (
        <p className="text-red-500">Hello!!</p>
    )
}