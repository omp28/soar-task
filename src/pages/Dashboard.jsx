import React from "react";
import Header from "../components/Header";
import CreditCard from "../components/CreditCard";
import TransactionList from "../components/TransactionList";
import ActivityChart from "../components/ActivityChart";
import ExpenseChart from "../components/ExpenseChart";
import QuickTransfer from "../components/QuickTransfer";

const activityData = [
  { name: "Sat", withdraw: 400, deposit: 240 },
  { name: "Sun", withdraw: 300, deposit: 139 },
  { name: "Mon", withdraw: 200, deposit: 980 },
  { name: "Tue", withdraw: 278, deposit: 390 },
  { name: "Wed", withdraw: 189, deposit: 480 },
  { name: "Thu", withdraw: 239, deposit: 380 },
  { name: "Fri", withdraw: 349, deposit: 430 },
];

const expenseData = [
  { name: "Entertainment", value: 30 },
  { name: "Investment", value: 20 },
  { name: "Bill Expense", value: 15 },
  { name: "Others", value: 35 },
];

const transactions = [
  {
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    type: "withdraw",
    icon: "/card-icon.svg",
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    type: "deposit",
    icon: "/paypal-icon.svg",
  },
  {
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    type: "deposit",
    icon: "/user-icon.svg",
  },
];

const contacts = [
  { name: "Livia Bator", role: "CEO", avatar: "/avatar1.jpg" },
  { name: "Randy Press", role: "Director", avatar: "/avatar2.jpg" },
  { name: "Workman", role: "Designer", avatar: "/avatar3.jpg" },
];

const Dashboard = () => {
  return (
    <div className="flex-1 bg-[#F4F7FE] min-h-screen">
      <Header />
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#2B3674] mb-4">My Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
            />
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              isDark={false}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ActivityChart data={activityData} />
            <QuickTransfer contacts={contacts} />
          </div>
          <div className="space-y-6">
            <TransactionList transactions={transactions} />
            <ExpenseChart data={expenseData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
