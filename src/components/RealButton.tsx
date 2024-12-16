import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "../utils/cn";

export const realButtonVariantColors = {
  red: ["text-white bg-primary border-[#b10000]", "active:border-primary"],
  orange: ["text-white bg-secondary border-[#b77515]", "active:border-secondary"],
  dark: [
    "bg-gray-700 text-[#f3f2f0] border-gray-900",
    "hover:text-white",
    "active:border-gray-700",
    "dark:bg-gray-700 dark:border-gray-900 dark:active:border-gray-700",
    "outline-darkOutline",
  ],
  light: [
    "bg-slate-50 text-slate-700 border-slate-200",
    "hover:text-gray-800",
    "active:border-slate-50",
    "outline-lightOutline",
  ],
  green: [
    "bg-lime-500 text-[#f3f2f0] border-lime-600",
    "hover:text-white",
    "active:border-lime-500",
  ],
  blue: [
    "bg-blue-700 text-[#f3f2f0] border-blue-900",
    "hover:text-white",
    "active:border-blue-700",
    "dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700",
    "focus:ring-blue-500",
    "outline-blueOutline",
  ],
  blue1: [
    "bg-blue-400 text-[#f3f2f0] border-blue-500",
    "hover:text-white",
    "active:border-blue-400",
  ],
  blue2: [
    "bg-blue-500 text-[#f3f2f0] border-blue-600",
    "hover:text-white",
    "active:border-blue-500",
  ],
  gold: [
    "text-textGray bg-gold border-goldDarker",
    "hover:text-textGray",
    "active:border-gold",
    "outline-goldOutline",
  ],
  gray: [
    "text-textGray bg-casualGray border-casualGrayDarker",
    "hover:text-textGray",
    "active:border-casualGray",
    "outline-casualGrayOutline",
  ],
};

export const realButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "m-0 border-b-[6px] text-center font-medium tracking-wider font-sans whitespace-nowrap",
    "transition-all duration-300 hover:-translate-y-[0.15rem]",
    "active:translate-y-[0.2rem] active:duration-75",
  ],
  {
    // regular --> hover --> active --> dark --> focus
    variants: {
      variant: realButtonVariantColors,
      size: {
        icon: `py-3 px-5 text-md rounded-lg`,
        xs: `py-2 px-4 text-sm rounded-2xl`,
        sm: `py-2 px-10 text-sm rounded-2xl`,
        md: `py-2 px-14 text-sm lg:text-md rounded-2xl`,
        lg: `py-3 px-18 text-lg rounded-2xl`,
        oneLetter: `py-3 px-5 text-md rounded-lg uppercase`,
      },
      focus: {
        true: `focus:outline-[3.5px] focus:outline focus:-translate-y-[0.2rem]`,
      },
      isValid: {
        false: "cursor-not-allowed opacity-50",
      },
    },
    defaultVariants: { variant: "dark", size: "md", focus: false },
  },
);

export interface RealButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof realButtonVariants> {}

export const RealButton = forwardRef<HTMLButtonElement, RealButtonProps>(
  ({ className, variant, size, type = "button", isValid, focus, ...props }, ref) => (
    <button
      type={type}
      className={cn(realButtonVariants({ variant, size, focus, isValid, className }), "")}
      ref={ref}
      {...props}
    />
  ),
);

RealButton.displayName = "RealButton";
