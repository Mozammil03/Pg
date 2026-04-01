import React, { useEffect } from 'react'
import { theme } from '../styles/theme'
import AboutModal from './AboutModal'
import { useData } from '../App';
import Register from './user/Register';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const{isRegisterOpen, setIsRegisterOpen} = useData();
    const [user, setUser] = React.useState(null);
    const showRegister = () => {
        setIsRegisterOpen(!isRegisterOpen);
    }
    const navigate = useNavigate();
    const logoutt = () => {
        localStorage.removeItem('pgUser');
        localStorage.setItem('Lock', 0);
        navigate('/login');
        console.log('User logged out, Lock set to ' + localStorage.getItem('Lock'));
    }
    useEffect(() => {
        const storedUser = localStorage.getItem('pgUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);



  return (
    <div className='flex flex-row items-center justify-between p-4 h-[10%]'>
        <div className='font-extrabold'><span className={`${theme.borderRadius} bg-black p-2 mr-2 text-white `}>PG</span>JOE</div>
        <div className={` border-[1px] border-gray-200 rounded-xl bg-gray-50 ${theme.shadow} flex flex-row ${theme.fontFamily} w-1/3 ${theme.borderRadius} ${theme.shadow} ${theme.transition} bg-gray-200 p-4`}>
            <ul className='flex justify-between w-full'>
                <Link to="/Home"><li className='hover:underline hover:cursor-pointer'>Home</li></Link>
                <Link to="/about"><li className='hover:underline hover:cursor-pointer'>About</li></Link>
                <Link to="/contact"><li className='hover:underline hover:cursor-pointer'>Contact</li></Link>
                <Link to="/services"><li className='hover:underline hover:cursor-pointer'>Services</li></Link>
                {user && user.accountType === "ADMIN" && (
                    <Link to="/dashboard">
                        <li className='hover:underline hover:cursor-pointer'>Dashboard</li>
                    </Link>
                )}
            </ul>
            
        </div>
        <div className=''>
            <ul className='flex justify-between  ml-auto'>
                <Link to="/login"><li className='hover:underline'>Login</li></Link><div onClick={logoutt}>/Logout/</div>
                <li className='hover:underline' onClick={showRegister}>Register</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar