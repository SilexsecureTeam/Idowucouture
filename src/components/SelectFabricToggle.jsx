import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const fabricOptions = ["Cotton", "Silk", "Wool"];

const SelectFabricToggle = () => {
  const [open, setOpen] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState("Select Fabric");

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (fabric) => {
    setSelectedFabric(fabric);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex relative items-center justify-center px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition w-48"
      >
        {selectedFabric}
        {open ? (
          <ChevronUp className="w-4 h-4 ml-2 cursor-pointer absolute right-5 top-2.5" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-2 cursor-pointer absolute right-5 top-2.5" />
        )}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-md">
          <ul className="text-sm text-gray-700 divide-y divide-gray-200">
            {fabricOptions.map((fabric) => (
              <li
                key={fabric}
                onClick={() => handleSelect(fabric)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {fabric}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectFabricToggle;
