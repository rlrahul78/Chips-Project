import React, { useState } from 'react';

const Chips = () => {
  const [inputtext, setInputtext] = useState('Rahul');
  const [chipslist, setChipslist] = useState([]);

  const handleEnter = (e) => {
    if (e.key === 'Enter' && inputtext.trim() !== '') {
      setChipslist([...chipslist, inputtext.trim()]);
      setInputtext('');
    }
  };

  const handleDelete = (index) => {
    const updatedarr = [...chipslist];
    updatedarr.splice(index, 1);
    setChipslist(updatedarr);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Input Section */}
      <div className="flex justify-center">
        <input
          value={inputtext}
          onKeyDown={handleEnter}
          onChange={(e) => setInputtext(e.target.value)}
          placeholder="Type and press Enter"
          className="w-full sm:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Chips List */}
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        {chipslist.map((chip, index) => (
          <div
            key={index}
            className="flex items-center bg-amber-400 text-black rounded-full px-4 py-2 max-w-full"
          >
            <span className="truncate max-w-[140px]">{chip}</span>
            <button
              onClick={() => handleDelete(index)}
              className="ml-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full px-2 py-1 text-xs"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chips;
