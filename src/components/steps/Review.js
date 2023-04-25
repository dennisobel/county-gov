import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function BusinessActivity() {
  //   const { userData, setUserData } = useStepperContext();
  const review = [
    {
      name: "Business Category",
      fields: [
        {
          name: "Business Category",
          value: "Hospitality",
        },
        {
          name: "Business Sub Category",
          value: "Hotel",
        },
      ],
    },
    {
      name: "Business Details",
      fields: [
        {
          name: "",
          value: "",
        },
      ],
    },
    {
      name: "Business Activity Information",
      fields: [
        {
          name: "",
          value: "",
        },
      ],
    },
    {
      name: "Business Contacts",
      fields: [
        {
          name: "",
          value: "",
        },
      ],
    },
  ];
  const [isAccordionOpen, setIsAccordionOpen] = useState(Array(review.length).fill(false));

  const handleAccordionClick = (index) => {
    const newAccordionOpen = [...isAccordionOpen];
    newAccordionOpen[index] = !newAccordionOpen[index];
    setIsAccordionOpen(newAccordionOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        {review.map((item,index) => {
          return (
            <div className="w-full mx-2" key={index}>
              <button
                className="flex items-center justify-between w-full bg-white text-gray-600 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={() => handleAccordionClick(index)}
              >
                <span className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  {item.name}
                </span>
                <ChevronDownIcon
                  className={`${
                    isAccordionOpen[index] ? "transform rotate-180" : ""
                  } h-5 w-5 text-gray-500`}
                />
              </button>
              {isAccordionOpen[index] && (
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  {item.fields.map((field,index) => {
                    return (
                      <div className="" key={index}>
                        <div className="w-full mx-2 flex-1">
                          <p className="text-gray-500 text-sm mb-1 text-4xl font-bold">
                            {field.name}
                          </p>
                          <p className="text-gray-700 text-lg mb-1 text-4xl">
                            {field.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
