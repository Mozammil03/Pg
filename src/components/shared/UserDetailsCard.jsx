import React from 'react';
import { theme } from '../../styles/theme';

const InfoSection = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const UserDetailsCard = ({ user }) => {
  // Simplified user structure relevant for PG management
  const pgUser = {
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
    gender: user.gender,
    email: user.email,
    phone: user.phone,
    emergencyContact: "+91 9876543210", // Added for PG context
    occupation: user.company.title,
    company: user.company.name,
    bloodGroup: user.bloodGroup,
    idProofs: {
      aadhar: "XXXX-XXXX-1234",
      pan: "ABCDE1234F"
    },
    room: "201", // Added for PG context
    joinDate: "2025-01-15", // Added for PG context
    rentDetails: {
      monthlyRent: 7000,
      securityDeposit: 10000,
      dueDate: 5
    }
  };

  return (
    <div className={`bg-white ${theme.borderRadius} ${theme.shadow} p-6`}>
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={user.image}
            alt={pgUser.fullName}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{pgUser.fullName}</h2>
          <p className="text-gray-500">Room {pgUser.room}</p>
          <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            Active Tenant
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoSection title="Personal Information">
          <InfoItem label="Age" value={`${pgUser.age} years`} />
          <InfoItem label="Gender" value={pgUser.gender} />
          <InfoItem label="Blood Group" value={pgUser.bloodGroup} />
          <InfoItem label="Occupation" value={pgUser.occupation} />
          <InfoItem label="Company" value={pgUser.company} />
        </InfoSection>

        <InfoSection title="Contact Information">
          <InfoItem label="Email" value={pgUser.email} />
          <InfoItem label="Phone" value={pgUser.phone} />
          <InfoItem label="Emergency Contact" value={pgUser.emergencyContact} />
        </InfoSection>

        <InfoSection title="ID Proofs">
          <InfoItem label="Aadhar Number" value={pgUser.idProofs.aadhar} />
          <InfoItem label="PAN Number" value={pgUser.idProofs.pan} />
        </InfoSection>

        <InfoSection title="Tenancy Details">
          <InfoItem label="Join Date" value={pgUser.joinDate} />
          <InfoItem label="Monthly Rent" value={`₹${pgUser.rentDetails.monthlyRent}`} />
          <InfoItem label="Security Deposit" value={`₹${pgUser.rentDetails.securityDeposit}`} />
          <InfoItem label="Due Date" value={`${pgUser.rentDetails.dueDate}th of every month`} />
        </InfoSection>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition">
          Edit Details
        </button>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
          Download Agreement
        </button>
      </div>
    </div>
  );
};

export default UserDetailsCard;