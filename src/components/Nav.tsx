import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo_sign.png';
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoChatboxSharp, IoSettings } from "react-icons/io5";

// icons to to rendered out
const DashboardIcon = () => <BsFileBarGraphFill />;
const ProductsIcon = () => <FaBoxOpen />;
const InventoryIcon = () => <FaBoxesPacking />;
const SalesIcon = () => <GrMoney />;
const UsersIcon = () => <FaUsers />;
const ChatIcon = () => <IoChatboxSharp />;
const SettingsIcon = () => <IoSettings />;

export default function Nav() {
    const navItems = [
        { path: '/', text: 'Dashboard', icon: <DashboardIcon /> },
        { path: '/products', text: 'Products', icon: <ProductsIcon /> },
        { path: '/inventory', text: 'Inventory', icon: <InventoryIcon /> },
        { path: '/sales', text: 'Sales', icon: <SalesIcon /> },
        { path: '/users', text: 'Users', icon: <UsersIcon /> },
        { path: '/chat', text: 'Chat', icon: <ChatIcon /> },
        { path: '/settings', text: 'Settings', icon: <SettingsIcon /> },
    ];

    return (
        <nav className="w-55 bg-stone-800 h-screen fixed left-0 text-white flex flex-col">
            <div className="p-4 flex justify-center">
                <img src={Logo} alt="La Choza Logo" className='w-35 h-auto'/>
            </div>
            
            <div className="mt-8 flex-1">
                <ul>
                    {navItems.map((item) => ( // dry coding solution for nav menu
                        <li key={item.path} className="mb-2">
                            <NavLink 
                                to={item.path} 
                                className={({ isActive }) => 
                                    `flex items-center px-6 py-3 hover:bg-stone-700 transition-colors ${
                                        isActive ? 'bg-stone-700 border-l-4 border-amber-500' : ''
                                    }`}>
                                <span className="mr-3">{item.icon}</span>
                                {item.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="p-4 text-center text-stone-400 text-sm">
                System v1.0
            </div>
        </nav>
    );
}