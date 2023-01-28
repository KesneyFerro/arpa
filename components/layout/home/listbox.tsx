import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

interface Props {
  width: string;
  my: string;
}

const grade = [
  { name: "2023" },
  { name: "2022" },
  { name: "2021" },
  { name: "2020" },
  { name: "2019" },
  { name: "2018" },
];

const ListBox = ({ width, my }: Props) => {
  const [selected, setSelected] = useState(grade[0]);
  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className={`relative mt-1 ${width} ${my}`}>
          <Listbox.Button
            className={`relative w-auto cursor-default rounded-full bg-white p-[20px] text-left shadow-lg focus:outline-none`}
          >
            <span className="block truncate">{selected.name}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-3 max-h-[150px] w-full overflow-auto rounded-3xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {grade.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-[10px] px-[20px] ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBox;
