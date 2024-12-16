import React from "react";

const GuidelinesDropdown = ({ title, sections }) => {
    return (
        <div
            id={`${title.replace(/\s/g, '-')}-guidelines`}
            className="left-0 right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            tabIndex="-1"
        >
            <div className="py-1" role="none">
                {sections.map((section, index) => (
                    <div key={index} className="block px-4 py-2 text-sm text-gray-700">
                        <h3 className="font-semibold text-[#BF0000] mb-1">{section.heading}</h3>
                        <p>{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuidelinesDropdown;
