import React, {  } from 'react'
import { theme } from '../styles/theme'
import AboutModal from './AboutModal'
import { useData } from '../App';
import Register from './user/Register';

const Navbar = () => {
    const{isModalOpen, setIsModalOpen} = useData();
    const{isRegisterOpen, setIsRegisterOpen} = useData();
    const showRegister = () => {
        setIsRegisterOpen(!isRegisterOpen);
    }
    const aboutModal = () => {
        setIsModalOpen(!isModalOpen);
    }
  return (
    <div className='flex flex-row items-center justify-between p-4 h-[10%]'>
        <div className='font-extrabold'><span className={`${theme.borderRadius} bg-black p-2 mr-2 text-white `}>PG</span>JOE</div>
        <div className={` border-[1px] border-gray-200 rounded-xl bg-gray-50 ${theme.shadow} flex flex-row ${theme.fontFamily} w-1/3 ${theme.borderRadius} ${theme.shadow} ${theme.transition} bg-gray-200 p-4`}>
            <ul className='flex justify-between w-full'>
                <li className='hover:underline hover:cursor-pointer'>Home</li>
                <li className='hover:underline hover:cursor-pointer' onClick={aboutModal}>About</li>
                <li className='hover:underline hover:cursor-pointer'>Contact</li>
                <li className='hover:underline hover:cursor-pointer'>Services</li>
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