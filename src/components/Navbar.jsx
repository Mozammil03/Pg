import React, {  } from 'react'
import { theme } from '../styles/theme'
import AboutModal from './AboutModal'
import { useData } from '../App';
import Register from './user/Register';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const{isRegisterOpen, setIsRegisterOpen} = useData();
    const showRegister = () => {
        setIsRegisterOpen(!isRegisterOpen);
    }
  return (
    <div className='flex flex-row items-center justify-between p-4 h-[10%]'>
        <div className='font-extrabold'><span className={`${theme.borderRadius} bg-black p-2 mr-2 text-white `}>PG</span>JOE</div>
        <div className={` border-[1px] border-gray-200 rounded-xl bg-gray-50 ${theme.shadow} flex flex-row ${theme.fontFamily} w-1/3 ${theme.borderRadius} ${theme.shadow} ${theme.transition} bg-gray-200 p-4`}>
            <ul className='flex justify-between w-full'>
                <Link to="/Home"><li className='hover:underline hover:cursor-pointer'>Home</li></Link>
                <Link to="/about"><li className='hover:underline hover:cursor-pointer'>About</li></Link>
                <Link to="/contact"><li className='hover:underline hover:cursor-pointer'>Contact</li></Link>
                <Link to="/services"><li className='hover:underline hover:cursor-pointer'>Services</li></Link>
                <Link to="/dashboard">
                <li className='hover:underline hover:cursor-pointer'>Dashboard</li>
                </Link>
            </ul>
            
        </div>
        <div className=''>
            <ul className='flex justify-between  ml-auto'>
                <li className='hover:underline'>Login</li>/
                <li className='hover:underline' onClick={showRegister}>Register</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar