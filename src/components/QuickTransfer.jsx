import React from 'react';

const QuickTransfer = ({ contacts }) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <h2 className="text-lg font-bold text-[#2B3674] mb-4">Quick Transfer</h2>
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center min-w-[80px]">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-12 h-12 rounded-full mb-2"
            />
            <p className="text-sm font-medium text-[#2B3674]">{contact.name}</p>
            <p className="text-xs text-gray-500">{contact.role}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Write Amount"
          className="flex-1 p-2 border rounded-lg"
        />
        <button className="bg-[#2B3674] text-white px-6 py-2 rounded-lg flex items-center">
          Send
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;