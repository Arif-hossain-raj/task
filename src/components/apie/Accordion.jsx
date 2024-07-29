"use client"
import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Tekstas",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    { title: "Tekstas", content: "" },
    { title: "Tekstas", content: "" },
    { title: "Tekstas", content: "" }
  ];

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div key={index} className="">
          <button
            className="w-full flex justify-between items-center py-[10px] px-[20px] text-left border-grad rounded-[10px] mb-2"
            onClick={() => handleToggle(index)}
          >
            <h5 className='leading-400'>{section.title}</h5>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {activeIndex === index && (
            <div className="p-4">
                <p>{section.content}</p>
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;