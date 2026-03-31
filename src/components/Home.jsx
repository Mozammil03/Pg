import React from 'react'
import { theme } from '../styles/theme'
import { useState } from 'react';
import AboutModal from './AboutModal';
import { useData } from '../App';
import Register from './user/Register';

const RoomCard = ({ room }) => {
  const [isActive] = useState(room.active);


  return (
    <div className={`border-[1px] flex flex-row border-gray-200 rounded-xl bg-gray-50 p-4 m-2 ${theme.shadow}`}>
      <div className='mr-4'>
  <div className={`${isActive ? "opacity-100" : "hidden opacity-0"} overflow-hidden rounded-xl border-[1px] border-gray-200 m-2 h-40 w-40 bg-gradient-to-b bg-slate-400`}>
    <img 
      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
      alt={`Room ${room.id}`}
      className="w-full h-full object-cover"
    />
  </div>
</div>
      <div className='w-full'>
        <h1 className='text-3xl font-bold'>Room {room.id}</h1>
        <div className={`flex flex-row justify-between mt-2 w-full text-center place-items-center`}>
          <p className={`bg-gray-${room.status === 'VACANT' ? '100' : '300'} rounded-xl w-fit p-2`}>{room.status}</p>
          <p>${room.price}/mo</p>
        </div>
        <div className='flex flex-row justify-between mt-2 w-full text-center place-items-center'>
          <p>{room.occupancy} Occupancy</p>
          <p>{room.floor} floor</p>
        </div>
      </div>
      <div><Register/></div>
    </div>
  );
};

const Home = () => {
  const { isModalOpen, setIsModalOpen } = useData();
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className='h-full w-full gap-2 bg-white flex flex-row p-4 items-center overflow-hidden'>
      <div className='flex flex-col w-1/2 text-left justify-start'>
        <h1 className='text-7xl font-bold mb-8'>
          Smarter PG Management
        </h1>
        <p className='text-lg leading-relaxed text-gray-600'>
          Streamline your PG operations with our all-in-one management solution. 
          From room allocations to payment tracking, maintain complete control of your 
          property. Reduce administrative workload by 70% and boost occupancy rates. 
          Join 500+ PG owners who trust PG Joe for efficient property management.
        </p>
        
        <div className='flex flex-row gap-4 mt-8'>
          <button 
            className='bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors' 
            onClick={openModal}
          >
            Start Free Trial
          </button>
          <button 
            className='border border-gray-900 text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors'
            onClick={openModal}
          >
            View Demo
          </button>
        </div>

        <div className='flex flex-row gap-8 mt-12'>
          <div className='flex flex-col'>
            <span className='text-3xl font-bold text-gray-900'>500+</span>
            <span className='text-sm text-gray-600'>Active Properties</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-3xl font-bold text-gray-900'>98%</span>
            <span className='text-sm text-gray-600'>Collection Rate</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-3xl font-bold text-gray-900'>30min</span>
            <span className='text-sm text-gray-600'>Setup Time</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-1/2 items-center justify-center h-full'>
        <div className={`mt-80 border-[1px] border-gray-200 w-full h-80% rounded-xl bg-gray-50 ${theme.shadow}`}>
          <div className='flex flex-row items-center gap-5 h-10 p-8 border-b-2' >
            <button className='text-gray-500'>&lt; </button>
            <button className='text-gray-500'>&gt;</button>
            <button className='bg-gray-200 p-[0.2rem] h-8 w-8 rounded-md border-white'> + </button>
         
            <ul className='w-1/2 flex flex-row items-center justify-between '>
              <li className=''>Room</li>
              <li className='text-gray-500'>Tenants</li>
              <li className='text-gray-500'>Payment</li>
            </ul>
          </div>

          <div className=''>
            <h1 className='text-5xl p-4 text-gray-900'>Rooms</h1>
          </div>
          <RoomCard room={{ id: 1, status: 'VACANT', price: 7000, active: true , floor: '1st', occupancy: 1}} />
            <RoomCard room={{ id: 2, status: 'VACANT', price: 7000 , active: false, floor: 'Ground', occupancy: 1}} />
            <RoomCard room={{ id: 3, status: 'VACANT', price: 5000 , active: false, floor: '2nd', occupancy:1}} />
            <RoomCard room={{ id: 4, status: 'VACANT', price: 2000 , active: false, occupancy: 2}} />
         
          
        </div>

      </div>
      
    </div>
  )
}

export default Home