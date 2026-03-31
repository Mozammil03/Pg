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

// const tenantExample = {
//   "id": 1,
//   "firstName": "Emily",
//   "lastName": "Johnson",
//   "age": 28,
//   "gender": "female",
//   "email": "emily.johnson@example.com",
//   "phone": "+91 965-431-3024",
//   "image": "https://dummyjson.com/icon/emilys/128",
//   "bloodGroup": "O+",
//   "company": {
//     "name": "TechCorp Solutions",
//     "title": "Software Engineer"
//   },
//   "address": {
//     "address": "626 Main Street",
//     "city": "Bangalore",
//     "state": "Karnataka",
//     "postalCode": "560034"
//   },
//   "emergencyContact": {
//     "name": "Robert Johnson",
//     "relation": "Father",
//     "phone": "+91 9876543210"
//   },
//   "pgDetails": {
//     "room": "201",
//     "joinDate": "2025-01-15",
//     "status": "ACTIVE",
//     "monthlyRent": 7000,
//     "securityDeposit": 10000,
//     "dueDate": 5
//   },
//   "idProofs": {
//     "aadhar": "XXXX-XXXX-1234",
//     "pan": "ABCDE1234F"
//   }
// }

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
      <div className='w-[90%] h-screen overflow-x-hidden bg-white'>
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
          {/* <AboutModal /> */}
          {/* <Services /> */}
          {/* <Dashboard/>
          <Clay/> */}
        </Data.Provider>
      </div>
    </div>
  );
};

export default App;