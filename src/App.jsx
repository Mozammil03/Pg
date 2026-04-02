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
import Footer from './components/Footer'


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
    <div
      className={`transition-all w-full min-h-screen flex flex-col ${theme.fontFamily}`}
    >
      <div className='flex flex-col justify-center items-center'>
        <Data.Provider
          value={{
            isModalOpen,
            setIsModalOpen,
            isRegisterOpen,
            setIsRegisterOpen,
            tenants,
            setTenants,
          }}
        >
          <div className="w-[90%] fixed top-0 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/75 z-50">
            <Navbar />
          </div>
          <div className="w-[90%] mx-auto flex-grow bg-white">
            <Router />
          </div>
          <div className="w-[90%] flex-grow bg-white p-4">
            <Footer />
          </div>
        </Data.Provider>
      </div>
    </div>
  );
};

export default App;