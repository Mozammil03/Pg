import React from 'react';
import { theme } from '../../styles/theme';
import { useData } from '../../App';

const Register = () => {
  const { isRegisterOpen, setIsRegisterOpen } = useData();

  const onClose = () => {
    setIsRegisterOpen(false);
  }

  return (
    <div className={`${isRegisterOpen?"":"hidden"} ${theme.modalView}`}>
        
      <button 
        onClick={onClose}
        className="text-gray-1-600 hover:text-gray-100 p-2 rounded-full bg-gray-300 transition-colors duration-200 absolute top-[9rem] right-[30.5rem] border-[1px] border-gray-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-6 space-y-4 overflow-y-auto max-h-[90vh] mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Register</h2>
        <form className='flex flex-col space-y-4'>
          <input type="text" placeholder='Name' className={`${theme.input} p-4`} />
          <input type="email" placeholder='Email' className={`${theme.input} p-4`} />
          <input type="password" placeholder='Password' className={`${theme.input} p-4`} />
          <input type="text" placeholder='Phone Number' className={`${theme.input} p-4`} />
          <button type='submit' className='bg-gray-900 text-white p-4 rounded-xl'>Register</button>
        </form>
        <p className='text-gray-600 text-center border-t pt-4'>
          Already have an account? <span className='text-gray-900 font-semibold cursor-pointer hover:underline'>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;