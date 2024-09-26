import React,{useState} from 'react'

function Selector() {
     const [isOpen, setIsOpen] = useState(false);
  const [cricketer, setCricketer] = useState('');

  const cricketers = [
    { label: 'Rohit', value: 'rohit' },
    { label: 'Virat', value: 'virat' },
    { label: 'Dhoni', value: 'dhoni' },
  ];

  const handleSelectCricketer = (value) => {
    setCricketer(value);
    setIsOpen(false); // Close the dropdown
  };
  return (
   <div className="bg-slate-800 h-screen w-screen flex items-start justify-start p-10">
      <div className="relative">
        {/* Dropdown Toggle Button */}
        <button
          className="p-2 bg-white border border-gray-300 rounded-md shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {cricketer ? cricketers.find(c => c.value === cricketer)?.label : 'Select cricketer'}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute  mt-2 ml-2 bg-white border border-gray-300 rounded-md shadow-lg w-40">
            {cricketers.map((c) => (
              <li
                key={c.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectCricketer(c.value)}
              >
                {c.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Selector
