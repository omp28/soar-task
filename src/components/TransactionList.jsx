import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#2B3674]">Recent Transaction</h2>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.type === 'deposit' ? 'bg-blue-100' : 'bg-red-100'
              }`}>
                <img src={transaction.icon} alt="" className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <p className="font-medium text-[#2B3674]">{transaction.title}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={`font-medium ${
              transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {transaction.amount > 0 ? '+' : ''}{transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;