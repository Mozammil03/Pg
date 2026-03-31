import React, { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';
import AddRoomModal from './AddRoomModal';
import AddTenantModal from './AddTenantModal';
import { tenantsData } from '../../store/userData';

// Add RoomCard component
const AdminRoomCard = ({ room, onEdit, onDelete }) => {
  const [isActive] = useState(room.active);
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);

  const handleDelete = () => {
    if (isConfirmDelete) {
      onDelete(room.id);
    } else {
      setIsConfirmDelete(true);
      
      setTimeout(() => setIsConfirmDelete(false), 3000);
    }
  };

  return (
    <div className={`border-[1px] flex flex-row border-gray-200 rounded-xl bg-gray-50 p-4 m-2 ${theme.shadow}`}>
      <div className='mr-4'>
        <div className={`${isActive ? "opacity-100" : "hidden opacity-0"} overflow-hidden rounded-xl border-[1px] border-gray-200 m-2 h-40 w-40 bg-gradient-to-b bg-slate-400`}>
          <img 
            src={room.imageUrl || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"}
            alt={`Room ${room.id}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className='w-full'>
        <div className="flex justify-between items-center mb-2">
          <h1 className='text-3xl font-bold'>Room {room.id}</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => onEdit(room)}
              className="text-blue-600 hover:text-blue-900 px-3 py-1 rounded-md hover:bg-blue-50"
            >
              Edit
            </button>
            <button 
              onClick={handleDelete}
              className={`${
                isConfirmDelete 
                  ? 'bg-red-500 text-white' 
                  : 'text-red-600 hover:text-red-900'
              } px-3 py-1 rounded-md hover:bg-red-50`}
            >
              {isConfirmDelete ? 'Confirm?' : 'Delete'}
            </button>
          </div>
        </div>
        <div className={`flex flex-row justify-between mt-2 w-full text-center place-items-center`}>
          <p className={`bg-gray-${room.status === 'VACANT' ? '100' : '300'} rounded-xl w-fit p-2`}>{room.status}</p>
          <p>₹{room.price}/mo</p>
        </div>
        <div className='flex flex-row justify-between mt-2 w-full text-center place-items-center'>
          <p>{room.occupancy} Occupancy</p>
          <p>{room.floor} floor</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('tenants');
  const [recentRegistrations, setRecentRegistrations] = useState([]);
  const [tenants, setTenants] = useState(tenantsData.tenants);
  const [loading, setLoading] = useState(true);
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [isAddTenantModalOpen, setIsAddTenantModalOpen] = useState(false);
  const [isConfirmDeleteTenant, setIsConfirmDeleteTenant] = useState(null);
  const [editingTenant, setEditingTenant] = useState(null);
  const [rooms, setRooms] = useState(tenantsData.rooms);
  const [payments, setPayments] = useState(tenantsData.getPayments());
  const [paymentFilter, setPaymentFilter] = useState('ALL');
  const [isProcessingPayment, setIsProcessingPayment] = useState(null);
  const [roomSearch, setRoomSearch] = useState('');
  const [roomStatusFilter, setRoomStatusFilter] = useState('');
  const [roomFloorFilter, setRoomFloorFilter] = useState('');

  // Placeholder data - replace with API calls
  // Removed duplicate tenants declaration

  const adminProfile = {
    name: 'Admin User',
    email: 'admin@pgjoe.com',
    role: 'Super Admin',
    lastLogin: '2025-04-20 10:30 AM'
  };

  const [adminSettings, setAdminSettings] = useState({
    pgDetails: {
      name: 'PG Joe',
      address: '#214, 7th Cross, Koramangala 5th Block',
      city: 'Bengaluru',
      pincode: '560095',
      contact: '+91 9876543210',
      email: 'contact@pgjoe.com'
    },
    paymentSettings: {
      defaultRent: 7000,
      latePaymentFee: 500,
      securityDeposit: 10000,
      paymentDueDay: 5,
      reminderDays: 3
    },
    notificationSettings: {
      emailNotifications: true,
      smsNotifications: true,
      paymentReminders: true,
      maintenanceAlerts: true
    }
  });

  useEffect(() => {
    // Simulated API call - replace with your actual API endpoint
    const fetchRecentRegistrations = async () => {
      try {
        setLoading(true);
        // Replace with your API endpoint
        const response = await fetch('/api/registrations/recent');
        const data = await response.json();
        setRecentRegistrations(data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentRegistrations();
  }, []);


  useEffect(() => {
    setRecentRegistrations(tenants.slice(-5).reverse());
  }, [tenants]);

  const handleAddRoom = (newRoom) => {

    setRooms([...rooms, { ...newRoom, id: rooms.length + 1 }]);
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setIsAddRoomModalOpen(true);
  };

  const handleDeleteRoom = (roomId) => {

    setRooms(rooms.filter(room => room.id !== roomId));
  };

  const handleUpdateRoom = (updatedRoom) => {

    setRooms(rooms.map(room => 
      room.id === updatedRoom.id ? updatedRoom : room
    ));
    setEditingRoom(null);
    setIsAddRoomModalOpen(false);
  };


  const getAvailableRooms = () => {
    const occupiedRoomIds = tenants.map(t => parseInt(t.pgDetails.room));
    return tenantsData.rooms.filter(room => 
      !occupiedRoomIds.includes(room.id) && room.active && room.status !== 'MAINTENANCE'
    );
  };

  const handleAddTenant = (newTenant) => {

    setRooms(rooms.map(room => 
      room.id === parseInt(newTenant.room) 
        ? { ...room, status: 'OCCUPIED' }
        : room
    ));


    const tenant = {
      id: tenants.length + 1,
      ...newTenant,
      dues: 0,
      status: 'ACTIVE'
    };
    
    setTenants([...tenants, tenant]);
    setIsAddTenantModalOpen(false);
  };

  const handleEditTenant = (tenant) => {
    setEditingTenant(tenant);
    setIsAddTenantModalOpen(true);
  };

  const handleDeleteTenant = (tenantId) => {

    const tenant = tenants.find(t => t.id === tenantId);
    if (tenant) {
      setRooms(rooms.map(room => 
        room.id === parseInt(tenant.room) 
          ? { ...room, status: 'VACANT' }
          : room
      ));
    }
    

    setTenants(tenants.filter(t => t.id !== tenantId));
    setIsConfirmDeleteTenant(null);
  };

  const handleUpdateTenant = (updatedTenant) => {

    const oldTenant = tenants.find(t => t.id === updatedTenant.id);
    if (oldTenant && oldTenant.room !== updatedTenant.room) {
      setRooms(rooms.map(room => {
        if (room.id === parseInt(oldTenant.room)) {
          return { ...room, status: 'VACANT' };
        }
        if (room.id === parseInt(updatedTenant.room)) {
          return { ...room, status: 'OCCUPIED' };
        }
        return room;
      }));
    }


    setTenants(tenants.map(tenant =>
      tenant.id === updatedTenant.id ? updatedTenant : tenant
    ));
    setEditingTenant(null);
    setIsAddTenantModalOpen(false);
  };

  const handleMarkAsPaid = async (paymentId) => {
    try {
      setIsProcessingPayment(paymentId);
      
      setPayments(payments.map(payment => 
        payment.id === paymentId 
          ? { ...payment, status: 'PAID' }
          : payment
      ));


      const payment = payments.find(p => p.id === paymentId);
      setTenants(tenants.map(tenant => 
        tenant.name === payment.tenantName
          ? { ...tenant, dues: Math.max(0, tenant.dues - payment.amount) }
          : tenant
      ));
    } catch (error) {
      console.error('Error marking payment as paid:', error);
    } finally {
      setIsProcessingPayment(null);
    }
  };

  const RecentRegistrationsSection = () => (
    <div className={`bg-white ${theme.borderRadius} ${theme.shadow} p-6 mt-6`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recent Registrations</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          New {recentRegistrations.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  Loading recent registrations...
                </td>
              </tr>
            ) : recentRegistrations.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No recent registrations
                </td>
              </tr>
            ) : (
              recentRegistrations.map((registration) => (
                <tr key={registration.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {registration.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {registration.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {registration.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-3">
                    <button className="text-green-600 hover:text-green-900">
                      Approve
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );


  const getFilteredRooms = () => {
    return rooms.filter(room => {
      const matchesSearch = room.id.toString().toLowerCase().includes(roomSearch.toLowerCase());
      const matchesStatus = !roomStatusFilter || room.status === roomStatusFilter;
      const matchesFloor = !roomFloorFilter || room.floor === roomFloorFilter;
      
      return matchesSearch && matchesStatus && matchesFloor;
    });
  };


  const getPaymentSummaries = () => {
    const total = payments.reduce((acc, payment) => {
      if (payment.status === 'PAID') return acc + payment.amount;
      return acc;
    }, 0);

    const pending = payments.reduce((acc, payment) => {
      if (payment.status === 'PENDING') return acc + payment.amount;
      return acc;
    }, 0);

    const pendingCount = payments.filter(p => p.status === 'PENDING').length;

    const overdue = payments.reduce((acc, payment) => {
      const dueDate = new Date(payment.date);
      const today = new Date();
      if (payment.status === 'PENDING' && dueDate < today) {
        return acc + payment.amount;
      }
      return acc;
    }, 0);

    return { total, pending, pendingCount, overdue };
  };

  return (
    <div className="min-h-screen bg-white p-6">

      <div className={`bg-white ${theme.borderRadius} ${theme.shadow} p-4 mb-6`}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500">Welcome back, {adminProfile.name}</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-right">
              <p className="text-sm text-gray-600">Last login</p>
              <p className="text-sm font-medium">{adminProfile.lastLogin}</p>
            </div>
            <div className="h-10 w-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
              {adminProfile.name[0]}
            </div>
          </div>
        </div>
      </div>


      <div className={`bg-white ${theme.borderRadius} ${theme.shadow} p-4 mb-6`}>
        <div className="flex gap-4 border-b">
          {['tenants', 'rooms', 'payments', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 ${theme.transition} ${
                activeTab === tab 
                  ? 'border-b-2 border-gray-900 text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>


      <div className={`bg-white ${theme.borderRadius} ${theme.shadow} p-6`}>
        {activeTab === 'tenants' && (
          <>
            <div>
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-semibold">Tenant Management</h2>
                <button 
                  className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                  onClick={() => setIsAddTenantModalOpen(true)}
                >
                  Add New Tenant
                </button>
              </div>
              

              <div className="flex gap-4 mb-6">
                <input
                  type="search"
                  placeholder="Search tenants..."
                  className={`${theme.input} flex-1`}
                />
                <select className={theme.input}>
                  <option value="ALL">All Status</option>
                  <option value="ACTIVE">Active</option>
                  <option value="PENDING">Pending</option>
                </select>
                <select className={theme.input}>
                  <option value="ALL">All Floors</option>
                  <option value="1">Ground Floor</option>
                  <option value="2">First Floor</option>
                  <option value="3">Second Floor</option>
                </select>
              </div>


              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tenant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Room & Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Occupation
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rent Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tenants.map((tenant) => (
                      <tr key={tenant.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img 
                                className="h-10 w-10 rounded-full object-cover" 
                                src={tenant.image} 
                                alt={`${tenant.firstName} ${tenant.lastName}`}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {`${tenant.firstName} ${tenant.lastName}`}
                              </div>
                              <div className="text-sm text-gray-500">
                                {tenant.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">Room {tenant.pgDetails.room}</div>
                          <div className="text-sm text-gray-500">{tenant.phone}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{tenant.company.title}</div>
                          <div className="text-sm text-gray-500">{tenant.company.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">₹{tenant.pgDetails.monthlyRent}/month</div>
                          <div className="text-sm text-gray-500">Due: {tenant.pgDetails.dueDate}th</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            tenant.pgDetails.status === 'ACTIVE' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {tenant.pgDetails.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button 
                            className="text-blue-600 hover:text-blue-900 mr-3"
                            onClick={() => handleEditTenant(tenant)}
                          >
                            Edit
                          </button>
                          <button 
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                            onClick={() => {/* View details logic */}}
                          >
                            View
                          </button>
                          {isConfirmDeleteTenant === tenant.id ? (
                            <button 
                              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                              onClick={() => handleDeleteTenant(tenant.id)}
                            >
                              Confirm?
                            </button>
                          ) : (
                            <button 
                              className="text-red-600 hover:text-red-900"
                              onClick={() => setIsConfirmDeleteTenant(tenant.id)}
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <RecentRegistrationsSection />
            
            <AddTenantModal 
              isOpen={isAddTenantModalOpen}
              onClose={() => {
                setIsAddTenantModalOpen(false);
                setEditingTenant(null);
              }}
              onAdd={handleAddTenant}
              onUpdate={handleUpdateTenant}
              editingTenant={editingTenant}
              availableRooms={getAvailableRooms()}
            />
          </>
        )}
        {activeTab === 'rooms' && (
          <div>
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-semibold">Room Management</h2>
              <button 
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                onClick={() => setIsAddRoomModalOpen(true)}
              >
                Add New Room
              </button>
            </div>

            {/* Room Filters */}
            <div className="flex gap-4 mb-6">
              <input
                type="search"
                placeholder="Search rooms..."
                className={theme.input}
                value={roomSearch}
                onChange={(e) => setRoomSearch(e.target.value)}
              />
              <select 
                className={theme.input}
                value={roomStatusFilter}
                onChange={(e) => setRoomStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="VACANT">Vacant</option>
                <option value="OCCUPIED">Occupied</option>
                <option value="MAINTENANCE">Maintenance</option>
              </select>
              <select 
                className={theme.input}
                value={roomFloorFilter}
                onChange={(e) => setRoomFloorFilter(e.target.value)}
              >
                <option value="">All Floors</option>
                <option value="Ground">Ground Floor</option>
                <option value="1st">1st Floor</option>
                <option value="2nd">2nd Floor</option>
                <option value="3rd">3rd Floor</option>
              </select>
              
              {/* Clear Filters Button */}
              {(roomSearch || roomStatusFilter || roomFloorFilter) && (
                <button
                  onClick={() => {
                    setRoomSearch('');
                    setRoomStatusFilter('');
                    setRoomFloorFilter('');
                  }}
                  className="text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getFilteredRooms().length === 0 ? (
                <div className="col-span-2 text-center py-8 text-gray-500">
                  No rooms match your search criteria
                </div>
              ) : (
                getFilteredRooms().map((room) => (
                  <AdminRoomCard 
                    key={room.id} 
                    room={room} 
                    onEdit={handleEditRoom}
                    onDelete={handleDeleteRoom}
                  />
                ))
              )}
            </div>

            <AddRoomModal 
              isOpen={isAddRoomModalOpen}
              onClose={() => {
                setIsAddRoomModalOpen(false);
                setEditingRoom(null);
              }}
              onAdd={handleAddRoom}
              onUpdate={handleUpdateRoom}
              editingRoom={editingRoom}
            />
          </div>
        )}
        {activeTab === 'payments' && (
          <div>
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-semibold">Payment Management</h2>
              <div className="flex gap-4">
                <select 
                  className={theme.input}
                  value={paymentFilter}
                  onChange={(e) => setPaymentFilter(e.target.value)}
                >
                  <option value="ALL">All Payments</option>
                  <option value="PENDING">Pending</option>
                  <option value="PAID">Paid</option>
                  <option value="OVERDUE">Overdue</option>
                </select>
                <button 
                  className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                  onClick={() => {/* Add payment collection logic */}}
                >
                  Collect Payment
                </button>
              </div>
            </div>

            {/* Payment Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className={`${theme.borderRadius} ${theme.shadow} p-4 bg-green-50 border border-green-100`}>
                <h3 className="text-sm font-medium text-green-600">Total Collected</h3>
                <p className="text-2xl font-bold text-green-700">₹{getPaymentSummaries().total}</p>
                <p className="text-sm text-green-600">This month</p>
              </div>
              <div className={`${theme.borderRadius} ${theme.shadow} p-4 bg-yellow-50 border border-yellow-100`}>
                <h3 className="text-sm font-medium text-yellow-600">Pending</h3>
                <p className="text-2xl font-bold text-yellow-700">₹{getPaymentSummaries().pending}</p>
                <p className="text-sm text-yellow-600">From {getPaymentSummaries().pendingCount} tenants</p>
              </div>
              <div className={`${theme.borderRadius} ${theme.shadow} p-4 bg-red-50 border border-red-100`}>
                <h3 className="text-sm font-medium text-red-600">Overdue</h3>
                <p className="text-2xl font-bold text-red-700">₹{getPaymentSummaries().overdue}</p>
                <p className="text-sm text-red-600">Over due date</p>
              </div>
            </div>


            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tenant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Room
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments
                    .filter(payment => paymentFilter === 'ALL' || payment.status === paymentFilter)
                    .map((payment) => (
                    <tr key={payment.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(payment.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.tenantName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.room}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        ₹{payment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.method}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          payment.status === 'PAID' 
                            ? 'bg-green-100 text-green-800'
                            : payment.status === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.status !== 'PAID' && (
                          <button 
                            className={`${
                              isProcessingPayment === payment.id
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'text-blue-600 hover:text-blue-900'
                            } px-3 py-1 rounded-md flex items-center gap-2`}
                            onClick={() => handleMarkAsPaid(payment.id)}
                            disabled={isProcessingPayment === payment.id}
                          >
                            {isProcessingPayment === payment.id ? (
                              <>
                                <svg className="animate-spin h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </>
                            ) : (
                              <>
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Mark as Paid
                              </>
                            )}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Settings</h2>
              <button 
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                onClick={() => {
                  // Add save settings logic
                  alert('Settings saved successfully!');
                }}
              >
                Save Changes
              </button>
            </div>

            {/* PG Details Section */}
            <div className={`${theme.borderRadius} ${theme.shadow} p-6 bg-white`}>
              <h3 className="text-lg font-semibold mb-4">PG Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PG Name
                  </label>
                  <input
                    type="text"
                    className={theme.input}
                    value={adminSettings.pgDetails.name}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      pgDetails: { ...adminSettings.pgDetails, name: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className={theme.input}
                    value={adminSettings.pgDetails.email}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      pgDetails: { ...adminSettings.pgDetails, email: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className={theme.input}
                    value={adminSettings.pgDetails.contact}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      pgDetails: { ...adminSettings.pgDetails, contact: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className={theme.input}
                    value={adminSettings.pgDetails.address}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      pgDetails: { ...adminSettings.pgDetails, address: e.target.value }
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Payment Settings Section */}
            <div className={`${theme.borderRadius} ${theme.shadow} p-6 bg-white`}>
              <h3 className="text-lg font-semibold mb-4">Payment Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Default Rent Amount (₹)
                  </label>
                  <input
                    type="number"
                    className={theme.input}
                    value={adminSettings.paymentSettings.defaultRent}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      paymentSettings: { ...adminSettings.paymentSettings, defaultRent: parseInt(e.target.value) }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Security Deposit (₹)
                  </label>
                  <input
                    type="number"
                    className={theme.input}
                    value={adminSettings.paymentSettings.securityDeposit}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      paymentSettings: { ...adminSettings.paymentSettings, securityDeposit: parseInt(e.target.value) }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Late Payment Fee (₹)
                  </label>
                  <input
                    type="number"
                    className={theme.input}
                    value={adminSettings.paymentSettings.latePaymentFee}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      paymentSettings: { ...adminSettings.paymentSettings, latePaymentFee: parseInt(e.target.value) }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Due Day
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    className={theme.input}
                    value={adminSettings.paymentSettings.paymentDueDay}
                    onChange={(e) => setAdminSettings({
                      ...adminSettings,
                      paymentSettings: { ...adminSettings.paymentSettings, paymentDueDay: parseInt(e.target.value) }
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Notification Settings Section */}
            <div className={`${theme.borderRadius} ${theme.shadow} p-6 bg-white`}>
              <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={adminSettings.notificationSettings.emailNotifications}
                      onChange={(e) => setAdminSettings({
                        ...adminSettings,
                        notificationSettings: { 
                          ...adminSettings.notificationSettings, 
                          emailNotifications: e.target.checked 
                        }
                      })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Notifications</h4>
                    <p className="text-sm text-gray-500">Receive updates via SMS</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={adminSettings.notificationSettings.smsNotifications}
                      onChange={(e) => setAdminSettings({
                        ...adminSettings,
                        notificationSettings: { 
                          ...adminSettings.notificationSettings, 
                          smsNotifications: e.target.checked 
                        }
                      })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;