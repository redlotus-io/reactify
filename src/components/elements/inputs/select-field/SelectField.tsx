import { Listbox } from "@headlessui/react";

import { useField, useFormikContext } from "formik";

import { HiCheck, HiSelector } from "react-icons/all";

import { AnimationWrapper } from "components";
import { SelectOption } from "types";

import { InputErrorText, animations } from "../..";

interface Props {
  options: SelectOption[];
  title: string;
  name: string;
}

export const SelectField = ({ name, options, title }: Props) => {
  const [field, { touched, error }] = useField<SelectOption>(name);
  const { setFieldValue } = useFormikContext();

  return (
    <Listbox value={field?.value} onChange={value => setFieldValue(name, value)}>
      <div className="relative">
        <div className="mt-0 mb-2">
          <label htmlFor="select-input">{title}</label>
        </div>
        <>
          <Listbox.Button
            id="select-input"
            className="relative py-3 pr-10 pl-3 w-full text-left bg-white rounded-lg focus-visible:border-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 
        focus-visible:ring-offset-purple-300 shadow-md cursor-pointer sm:py-2"
          >
            <span className="block font-semibold truncate sm:text-lg text-md">
              {field?.value.name}
            </span>
            <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
              <AnimationWrapper keyIndex="selector" variants={animations.rotateInFromLeft}>
                <HiSelector className="w-5 h-5 fill-gray-400" aria-hidden="true" />
              </AnimationWrapper>
            </span>
          </Listbox.Button>
        </>
        <InputErrorText touched={touched} error={error} />

        <Listbox.Options className="overflow-y-auto absolute z-20 py-1 mt-1 w-full max-h-52 text-base bg-white rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 shadow-lg cursor-pointer">
          {options.map(option => (
            <Listbox.Option
              key={option.id}
              className={({ active }) =>
                `select-none relative py-2 pl-10 pr-4 ${active ? "bg-slate-100" : "text-slate-800"}`
              }
              value={option}
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                    {option.name}
                  </span>
                  {selected ? (
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                      <HiCheck className="w-5 h-5 fill-slate-600" aria-hidden="true" />
                    </div>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
