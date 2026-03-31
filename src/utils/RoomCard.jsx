import { useState } from "react";
import { theme } from "../styles/theme";
import Register from "../components/user/Register";

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
export default RoomCard;