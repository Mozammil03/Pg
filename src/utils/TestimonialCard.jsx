import React from 'react'
import { theme } from '../styles/theme'

const TestimonialCard = ({ profileUrl, name, role, content }) => {
  return (
    <div
      className={`p-4 border-[1px] border-gray-200 bg-gray-50 ${theme.shadow} w-1/3 h-fit justify-center
        flex flex-col ${theme.fontFamily} ${theme.borderRadius} ${theme.transition} bg-gray-200`}
    >
      <p className='text-gray-500 font-serif italic pb-4'>"{content}"</p>
      <div className='flex fles-row'>
        <img
        src={profileUrl}
        alt={name}
        className="w-16 h-16 rounded-full border-[1px] border-gray-200 pt-2 "
        />
        <div className='leading-snug pl-4'>
            <h3 className='font-extrabol text-2xl'>{name}</h3>
            <p>{role}</p>
        </div>
      </div>
      
     
    </div>
  );
}

export default TestimonialCard