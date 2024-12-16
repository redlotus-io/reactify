/* eslint-disable jsx-a11y/no-autofocus */
import { VariantProps, cva } from "class-variance-authority";
import { useField } from "formik";
import { ReactNode, forwardRef } from "react";

import { cn } from "../utils/cn";

import { InputErrorText } from "./InputErrorText";

const formikInputVariants = cva(["placeholder:text-stone-500 relative placeholder:text-base"], {
  // regular --> hover --> active --> dark --> focus
  variants: {
    variant: {
      unstyled: "",
      default: `bg-white text-slate-700 border-2 border-blue-500 focus:outline-none focus:border-blue-800`,
      green: `bg-lime-500 text-[#f3f2f0] border-lime-600
      hover:text-white`,
      dark: `bg-gray-700 text-[#f3f2f0] border-gray-900
        hover:text-white`,
      blue: `bg-blue-700 text-[#f3f2f0] border-blue-900
        hover:text-white`,
    },
    // size is already defined on input element
    inputSize: {
      sm: "py-2 px-4 text-md rounded-xl",
      md: "py-2 px-4 text-lg font-semibold rounded-xl",
      lg: "py-3 px-4 text-xl font-semibold rounded-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "md",
  },
});

interface FormikInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formikInputVariants> {
  name: string;
  label?: string | ReactNode;
  inputPrefix?: ReactNode;
  inputAfterfix?: ReactNode;
}

export const FormikInput = forwardRef<HTMLInputElement, FormikInputProps>(
  (
    {
      label,
      name,
      className = "appearance-none",
      inputPrefix,
      inputAfterfix,
      variant,
      inputSize,
      required,
      ...props
    },
    ref,
  ) => {
    const [field, { touched, error }] = useField(name);

    return (
      <div>
        {label && (
          <div className="ml-1">
            <label className="text-xs sm:text-sm text-stone-400" htmlFor={props.id || name}>
              {label}
            </label>
            {required && <span className="ml-1 text-red-500">*</span>}
          </div>
        )}

        <div className="relative">
          {/* <div className="absolute inset-0 scale-105 bg-blue-200 rounded-lg" /> */}
          {inputPrefix && (
            <div className="absolute z-[1] inset-y-0 left-0 flex items-center pl-3">
              <span>{inputPrefix}</span>
            </div>
          )}
          <input
            className={cn(
              "flex w-full",
              formikInputVariants({ variant, inputSize, className }),
              error && "border-2 border-red-400 outline-none caret-red-400 focus:border-red-500",
              inputPrefix && "pl-8",
              inputAfterfix && "pr-9",
            )}
            autoFocus={false}
            autoComplete="off"
            ref={ref}
            {...field}
            {...props}
          />
          {inputAfterfix && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span>{inputAfterfix}</span>
            </div>
          )}
        </div>
        <InputErrorText className="mt-1 ml-1" touched={touched} error={error} />
      </div>
    );
  },
);

FormikInput.displayName = "FormikInput";

interface FormikTextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof formikInputVariants> {
  name: string;
  label?: string | ReactNode;
}

export const FormikTextArea = forwardRef<HTMLTextAreaElement, FormikTextareaProps>(
  ({ label, name, className = "appearance-none", variant, inputSize, required, ...props }, ref) => {
    const [field, { touched, error }] = useField(name);

    return (
      <div>
        {label && (
          <div className="ml-1">
            <label className="text-sm text-stone-400" htmlFor={props.id || name}>
              {label}
            </label>
            {required && <span className="ml-1 text-red-500">*</span>}
          </div>
        )}

        <div className="relative">
          <textarea
            className={cn(
              formikInputVariants({ variant, inputSize, className }),
              "scrollbar-overflow overflow-x-hidden",
              error && "border-2 border-red-400 outline-none caret-red-400 focus:border-red-500",
            )}
            autoFocus={false}
            autoComplete="off"
            ref={ref}
            {...field}
            {...props}
          />
        </div>
        <InputErrorText className="mt-1 ml-1" touched={touched} error={error} />
      </div>
    );
  },
);

FormikTextArea.displayName = "FormikTextArea";
