import Header from "./Header";
import CreditCard from "./CreditCard";
import TransactionList from "./TransactionList";
import ActivityChart from "./ActivityChart";
import ExpenseChart from "./ExpenseChart";
import QuickTransfer from "./QuickTransfer";

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
    type: "withdraw" as "withdraw",
    icon: "https://cdn-icons-png.flaticon.com/512/147/147258.png",
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    type: "deposit" as "deposit",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
  },
  {
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    type: "deposit" as "deposit",
    icon: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];

const contacts = [
  {
    name: "Livia Bator",
    role: "CEO",
    avatar:
      "https://s3-alpha-sig.figma.com/img/0727/540c/433df02fba013e4fd8c4ed33e379a35d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1QwE1npOH7xsFhVwwxy6mvoRNT~pRBNC-G3U5uwiW8x~gs5tmcve58waZCrDLmrPg0W2raXHRxXjSz87i-6ED0IZjD~f8jQZ5q5SbUzKufmTfbVhHQQeHv7LGc8MwSu8n2514i-F1obnYBzq6tNb8gy8eSG3~lvIEjwtMQG0~i~3L8x14GjLWSaL7hpIs3bXD06lNIHDVElxRiEP79v~2UmdtRqq0yrukzyDTNVNvR6YI9nLIdofqDiDu6dblL~V4QmHGocAsMCNhZiGZFxpbzxmnONdH-BEkDFIgFaSL2H3Ueof6P0g2uFzgkbx6AtD3w2YotJlQAbbiNlM8kfmA__",
  },
  {
    name: "Randy Press",
    role: "Director",
    avatar:
      "https://s3-alpha-sig.figma.com/img/0727/540c/433df02fba013e4fd8c4ed33e379a35d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1QwE1npOH7xsFhVwwxy6mvoRNT~pRBNC-G3U5uwiW8x~gs5tmcve58waZCrDLmrPg0W2raXHRxXjSz87i-6ED0IZjD~f8jQZ5q5SbUzKufmTfbVhHQQeHv7LGc8MwSu8n2514i-F1obnYBzq6tNb8gy8eSG3~lvIEjwtMQG0~i~3L8x14GjLWSaL7hpIs3bXD06lNIHDVElxRiEP79v~2UmdtRqq0yrukzyDTNVNvR6YI9nLIdofqDiDu6dblL~V4QmHGocAsMCNhZiGZFxpbzxmnONdH-BEkDFIgFaSL2H3Ueof6P0g2uFzgkbx6AtD3w2YotJlQAbbiNlM8kfmA__",
  },
  {
    name: "Workman",
    role: "Designer",
    avatar:
      "https://s3-alpha-sig.figma.com/img/0727/540c/433df02fba013e4fd8c4ed33e379a35d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1QwE1npOH7xsFhVwwxy6mvoRNT~pRBNC-G3U5uwiW8x~gs5tmcve58waZCrDLmrPg0W2raXHRxXjSz87i-6ED0IZjD~f8jQZ5q5SbUzKufmTfbVhHQQeHv7LGc8MwSu8n2514i-F1obnYBzq6tNb8gy8eSG3~lvIEjwtMQG0~i~3L8x14GjLWSaL7hpIs3bXD06lNIHDVElxRiEP79v~2UmdtRqq0yrukzyDTNVNvR6YI9nLIdofqDiDu6dblL~V4QmHGocAsMCNhZiGZFxpbzxmnONdH-BEkDFIgFaSL2H3Ueof6P0g2uFzgkbx6AtD3w2YotJlQAbbiNlM8kfmA__",
  },
];

export default function Dashboard() {
  return (
    <div className="flex-1 bg-[#F4F7FE] min-h-screen">
      <Header />
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#2B3674] mb-4">My Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            <TransactionList transactions={transactions} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ActivityChart data={activityData} />
            <QuickTransfer contacts={contacts} />
          </div>
          <div className="space-y-6">
            <ExpenseChart data={expenseData} />
          </div>
        </div>
      </div>
    </div>
  );
}
