import React, { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';

const AddRoomModal = ({ isOpen, onClose, onAdd, onUpdate, editingRoom }) => {
  const [roomData, setRoomData] = useState({
    id: '',
    price: '',
    floor: '',
    occupancy: '1',
    status: 'VACANT',
    active: true,
    imageUrl: ''
  });

  useEffect(() => {
    if (editingRoom) {
      setRoomData(editingRoom);
    } else {
      setRoomData({
        id: '',
        price: '',
        floor: '',
        occupancy: '1',
        status: 'VACANT',
        active: true,
        imageUrl: ''
      });
    }
  }, [editingRoom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRoom) {
      onUpdate(roomData);
    } else {
      onAdd(roomData);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={theme.modalView}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {editingRoom ? 'Edit Room' : 'Add New Room'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Room Number</label>
            <input
              type="text"
              className={theme.input}
              value={roomData.id}
              onChange={(e) => setRoomData({...roomData, id: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹/month)</label>
            <input
              type="number"
              className={theme.input}
              value={roomData.price}
              onChange={(e) => setRoomData({...roomData, price: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Floor</label>
            <select 
              className={theme.input}
              value={roomData.floor}
              onChange={(e) => setRoomData({...roomData, floor: e.target.value})}
              required
            >
              <option value="">Select Floor</option>
              <option value="Ground">Ground Floor</option>
              <option value="1st">1st Floor</option>
              <option value="2nd">2nd Floor</option>
              <option value="3rd">3rd Floor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Occupancy</label>
            <select 
              className={theme.input}
              value={roomData.occupancy}
              onChange={(e) => setRoomData({...roomData, occupancy: e.target.value})}
              required
            >
              <option value="1">Single Occupancy</option>
              <option value="2">Double Occupancy</option>
              <option value="3">Triple Occupancy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              className={theme.input}
              value={roomData.status}
              onChange={(e) => setRoomData({...roomData, status: e.target.value})}
              required
            >
              <option value="VACANT">Vacant</option>
              <option value="OCCUPIED">Occupied</option>
              <option value="MAINTENANCE">Maintenance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Room Image URL</label>
            <input
              type="url"
              className={theme.input}
              value={roomData.imageUrl}
              onChange={(e) => setRoomData({...roomData, imageUrl: e.target.value})}
              placeholder="https://example.com/room-image.jpg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            {editingRoom ? 'Update Room' : 'Add Room'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoomModal;