import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, CreditCardIcon, BanknotesIcon, 
  UserIcon, ChartBarIcon, WrenchScrewdriverIcon,
  UserGroupIcon, Cog6ToothIcon 
} from '@heroicons/react/24/outline';

const menuItems = [
  { icon: HomeIcon, text: 'Dashboard', path: '/' },
  { icon: BanknotesIcon, text: 'Transactions', path: '/transactions' },
  { icon: UserIcon, text: 'Accounts', path: '/accounts' },
  { icon: ChartBarIcon, text: 'Investments', path: '/investments' },
  { icon: CreditCardIcon, text: 'Credit Cards', path: '/credit-cards' },
  { icon: BanknotesIcon, text: 'Loans', path: '/loans' },
  { icon: WrenchScrewdriverIcon, text: 'Services', path: '/services' },
  { icon: UserGroupIcon, text: 'My Privileges', path: '/privileges' },
  { icon: Cog6ToothIcon, text: 'Setting', path: '/setting' }
];

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col w-64 bg-white h-screen p-4 border-r">
      <div className="flex items-center mb-8">
        <img src="/logo.svg" alt="Soar Task" className="h-8 w-8" />
        <span className="ml-2 text-xl font-bold text-[#2B3674]">Soar Task</span>
      </div>
      
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-lg mb-1"
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;