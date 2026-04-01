import React, { createContext, useContext, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { theme } from './styles/theme'
import Home from './pages/Home'
import AboutModal from './components/AboutModal'
import Services from './components/Services'
import Dashboard from './components/admin/Dashboard'

import { tenantsData } from './store/userData'
import Clay from './pages/Clay'
import Router from './Router'


// Create the context
const Data = createContext();


export const useData = () => useContext(Data);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
  // Initialize tenants from localStorage or default data
  const [tenants, setTenants] = useState(() => {
    const savedTenants = localStorage.getItem('pgTenants');
    return savedTenants ? JSON.parse(savedTenants) : tenantsData.tenants;
  });

  // Effect to sync tenants with tenantsData
  useEffect(() => {
    tenantsData.tenants = tenants;
  }, [tenants]);

  return (
    <div className={`transition-all w-full h-screen flex flex-col items-center justify-center ${theme.fontFamily}`}>
      <div className='w-[90%] h-screen overflow-x-hidden bg-white transition-all'>
        <Data.Provider value={{ 
          isModalOpen, 
          setIsModalOpen, 
          isRegisterOpen, 
          setIsRegisterOpen, 
          tenants, 
          setTenants 
        }}>
          <div className='w-[90%] fixed top-0 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/75 z-50'>
        <Navbar/>
      </div>
          
          <Router />
        </Data.Provider>
      </div>
    </div>
  );
};

export default App;