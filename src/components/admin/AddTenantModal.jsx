import React, { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';
import { useData } from '../../App';

const AddTenantModal = ({ isOpen, onClose, onAdd, onUpdate, editingTenant, availableRooms }) => {
  const { tenants, setTenants } = useData();
  
  // Add this check
  useEffect(() => {
    if (!Array.isArray(tenants)) {
      setTenants([]);
    }
  }, []);

  const [tenantData, setTenantData] = useState({
    firstName: '',
    lastName: '',
    age: '',    
    gender: 'female',
    email: '',
    phone: '',
    image: 'https://randomuser.me/api/portraits/lego/1.jpg',
    bloodGroup: '',
    company: {
      name: '',
      title: ''
    },
    address: {
      address: '',
      city: '',
      state: '',
      postalCode: ''
    },
    emergencyContact: {
      name: '',
      relation: '',
      phone: ''
    },
    pgDetails: {
      room: '',
      joinDate: '',
      status: 'ACTIVE',
      monthlyRent: '',
      securityDeposit: 10000,
      dueDate: 5
    },
    idProofs: {
      aadhar: '',
      pan: ''
    }
  });

  useEffect(() => {
    if (editingTenant) {
      setTenantData(editingTenant);
    } else {
      setTenantData({
        firstName: '',
        lastName: '',
        age: '',
        gender: 'female',
        email: '',
        phone: '',
        image: 'https://randomuser.me/api/portraits/lego/1.jpg',
        bloodGroup: '',
        company: {
          name: '',
          title: ''
        },
        address: {
          address: '',
          city: '',
          state: '',
          postalCode: ''
        },
        emergencyContact: {
          name: '',
          relation: '',
          phone: ''
        },
        pgDetails: {
          room: '',
          joinDate: '',
          status: 'ACTIVE',
          monthlyRent: '',
          securityDeposit: 10000,
          dueDate: 5
        },
        idProofs: {
          aadhar: '',
          pan: ''
        }
      });
    }
  }, [editingTenant, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      const selectedRoom = availableRooms.find(room => room.id.toString() === tenantData.pgDetails.room);
      
      const newTenant = {
        ...tenantData,
        id: editingTenant ? editingTenant.id : (tenants?.length ? tenants.length + 1 : 1),
        pgDetails: {
          ...tenantData.pgDetails,
          monthlyRent: selectedRoom ? selectedRoom.price : tenantData.pgDetails.monthlyRent,
          status: 'ACTIVE',
          joinDate: tenantData.pgDetails.joinDate || new Date().toISOString().split('T')[0]
        }
      };

      if (editingTenant) {
        setTenants(prevTenants => {
          const updatedTenants = prevTenants.map(t => 
            t.id === editingTenant.id ? newTenant : t
          );
          // Update local storage
          localStorage.setItem('pgTenants', JSON.stringify(updatedTenants));
          return updatedTenants;
        });
      } else {
        setTenants(prevTenants => {
          const updatedTenants = [...prevTenants, newTenant];
          // Update local storage
          localStorage.setItem('pgTenants', JSON.stringify(updatedTenants));
          return updatedTenants;
        });
      }

      // Update room status
      const roomId = parseInt(tenantData.pgDetails.room);
      if (roomId) {
        const updatedRooms = availableRooms.map(room => 
          room.id === roomId ? { ...room, status: 'OCCUPIED' } : room
        );
        localStorage.setItem('pgRooms', JSON.stringify(updatedRooms));
      }
      
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={theme.modalView}>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {editingTenant ? 'Edit Tenant' : 'Add New Tenant'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Personal Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  className={theme.input}
                  value={tenantData.firstName}
                  onChange={(e) => setTenantData({...tenantData, firstName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  className={theme.input}
                  value={tenantData.lastName}
                  onChange={(e) => setTenantData({...tenantData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  className={theme.input}
                  value={tenantData.age}
                  onChange={(e) => setTenantData({...tenantData, age: parseInt(e.target.value)})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  className={theme.input}
                  value={tenantData.gender}
                  onChange={(e) => setTenantData({...tenantData, gender: e.target.value})}
                  required
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
              <input
                type="text"
                className={theme.input}
                value={tenantData.bloodGroup}
                onChange={(e) => setTenantData({...tenantData, bloodGroup: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className={theme.input}
                value={tenantData.email}
                onChange={(e) => setTenantData({...tenantData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                className={theme.input}
                value={tenantData.phone}
                onChange={(e) => setTenantData({...tenantData, phone: e.target.value})}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name</label>
                <input
                  type="text"
                  className={theme.input}
                  value={tenantData.emergencyContact.name}
                  onChange={(e) => setTenantData({
                    ...tenantData,
                    emergencyContact: {...tenantData.emergencyContact, name: e.target.value}
                  })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Relation</label>
                <input
                  type="text"
                  className={theme.input}
                  value={tenantData.emergencyContact.relation}
                  onChange={(e) => setTenantData({
                    ...tenantData,
                    emergencyContact: {...tenantData.emergencyContact, relation: e.target.value}
                  })}
                  required
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Professional Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                className={theme.input}
                value={tenantData.company.name}
                onChange={(e) => setTenantData({
                  ...tenantData,
                  company: {...tenantData.company, name: e.target.value}
                })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input
                type="text"
                className={theme.input}
                value={tenantData.company.title}
                onChange={(e) => setTenantData({
                  ...tenantData,
                  company: {...tenantData.company, title: e.target.value}
                })}
                required
              />
            </div>
          </div>

          {/* PG Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">PG Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Room</label>
              <select 
                className={theme.input}
                value={tenantData.pgDetails.room}
                onChange={(e) => {
                  const selectedRoom = availableRooms.find(room => room.id.toString() === e.target.value);
                  setTenantData({
                    ...tenantData,
                    pgDetails: {
                      ...tenantData.pgDetails,
                      room: e.target.value,
                      monthlyRent: selectedRoom ? selectedRoom.price : tenantData.pgDetails.monthlyRent
                    }
                  });
                }}
                required
              >
                <option value="">Select a room</option>
                {availableRooms.map(room => (
                  <option key={room.id} value={room.id}>
                    Room {room.id} - {room.floor} Floor - ₹{room.price}/month
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
              <input
                type="date"
                className={theme.input}
                value={tenantData.pgDetails.joinDate}
                onChange={(e) => setTenantData({
                  ...tenantData,
                  pgDetails: {...tenantData.pgDetails, joinDate: e.target.value}
                })}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent</label>
                <input
                  type="number"
                  className={theme.input}
                  value={tenantData.pgDetails.monthlyRent}
                  onChange={(e) => setTenantData({
                    ...tenantData,
                    pgDetails: {...tenantData.pgDetails, monthlyRent: parseInt(e.target.value)}
                  })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Security Deposit</label>
                <input
                  type="number"
                  className={theme.input}
                  value={tenantData.pgDetails.securityDeposit}
                  onChange={(e) => setTenantData({
                    ...tenantData,
                    pgDetails: {...tenantData.pgDetails, securityDeposit: parseInt(e.target.value)}
                  })}
                  required
                />
              </div>
            </div>
          </div>

          {/* ID Proofs */}
          <div className="space-y-4 col-span-2">
            <h3 className="font-semibold text-lg">ID Proofs</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Number</label>
                <input
                  type="text"
                  className={theme.input}
                  value={tenantData.idProofs.aadhar}
                  onChange={(e) => setTenantData({
                    ...tenantData,
                    idProofs: {...tenantData.idProofs, aadhar: e.target.value}
                  })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                <input
                  type="text"
                  className={theme.input}
                  value={tenantData.idProofs.pan}
                  onChange={(e) => setTenantData({
                    ...tenantData,
                    idProofs: {...tenantData.idProofs, pan: e.target.value}
                  })}
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              {editingTenant ? 'Update Tenant' : 'Add Tenant'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTenantModal;