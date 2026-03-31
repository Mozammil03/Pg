export const tenantsData = {
  tenants: [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      age: 28,
      gender: "female",
      email: "emily.johnson@example.com",
      phone: "+91 965-431-3024",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bloodGroup: "O+",
      company: {
        name: "TechCorp Solutions",
        title: "Software Engineer",
      },
      address: {
        address: "626 Main Street",
        city: "Bangalore",
        state: "Karnataka",
        postalCode: "560034",
      },
      emergencyContact: {
        name: "Robert Johnson",
        relation: "Father",
        phone: "+91 9876543210",
      },
      pgDetails: {
        room: "201",
        joinDate: "2025-01-15",
        status: "ACTIVE",
        monthlyRent: 7000,
        securityDeposit: 10000,
        dueDate: 5,
      },
      idProofs: {
        aadhar: "XXXX-XXXX-1234",
        pan: "ABCDE1234F",
      },
    },
    {
      id: 2,
      firstName: "Priya",
      lastName: "Sharma",
      age: 24,
      gender: "female",
      email: "priya.sharma@example.com",
      phone: "+91 844-555-7890",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bloodGroup: "B+",
      company: {
        name: "Infosys",
        title: "Data Analyst",
      },
      address: {
        address: "42 Lake View",
        city: "Delhi",
        state: "Delhi",
        postalCode: "110001",
      },
      emergencyContact: {
        name: "Rajesh Sharma",
        relation: "Brother",
        phone: "+91 9876543211",
      },
      pgDetails: {
        room: "202",
        joinDate: "2025-02-01",
        status: "ACTIVE",
        monthlyRent: 8000,
        securityDeposit: 12000,
        dueDate: 5,
      },
      idProofs: {
        aadhar: "XXXX-XXXX-5678",
        pan: "BCDRF1234G",
      },
    },
    {
      id: 3,
      firstName: "Rahul",
      lastName: "Verma",
      age: 26,
      gender: "male",
      email: "rahul.verma@example.com",
      phone: "+91 955-666-4321",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bloodGroup: "A+",
      company: {
        name: "Amazon",
        title: "Product Manager",
      },
      address: {
        address: "123 Tech Park",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400001",
      },
      emergencyContact: {
        name: "Sunita Verma",
        relation: "Mother",
        phone: "+91 9876543212",
      },
      pgDetails: {
        room: "301",
        joinDate: "2024-12-01",
        status: "ACTIVE",
        monthlyRent: 9000,
        securityDeposit: 15000,
        dueDate: 5,
      },
      idProofs: {
        aadhar: "XXXX-XXXX-9012",
        pan: "FGHIJ5678K",
      },
    },
    {
      id: 4,
      firstName: "Sarah",
      lastName: "Wilson",
      age: 23,
      gender: "female",
      email: "sarah.wilson@example.com",
      phone: "+91 877-888-9999",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      bloodGroup: "AB+",
      company: {
        name: "Microsoft",
        title: "UX Designer",
      },
      address: {
        address: "789 Designer Valley",
        city: "Pune",
        state: "Maharashtra",
        postalCode: "411001",
      },
      emergencyContact: {
        name: "James Wilson",
        relation: "Father",
        phone: "+91 9876543213",
      },
      pgDetails: {
        room: "302",
        joinDate: "2025-03-01",
        status: "ACTIVE",
        monthlyRent: 7500,
        securityDeposit: 11000,
        dueDate: 5,
      },
      idProofs: {
        aadhar: "XXXX-XXXX-3456",
        pan: "LMNOP7890Q",
      },
    },
    {
      id: 5,
      firstName: "Arjun",
      lastName: "Patel",
      age: 25,
      gender: "male",
      email: "arjun.patel@example.com",
      phone: "+91 933-222-1111",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bloodGroup: "B-",
      company: {
        name: "Google",
        title: "Frontend Developer",
      },
      address: {
        address: "456 Silicon Valley",
        city: "Hyderabad",
        state: "Telangana",
        postalCode: "500001",
      },
      emergencyContact: {
        name: "Meera Patel",
        relation: "Sister",
        phone: "+91 9876543214",
      },
      pgDetails: {
        room: "401",
        joinDate: "2025-01-20",
        status: "ACTIVE",
        monthlyRent: 8500,
        securityDeposit: 13000,
        dueDate: 5,
      },
      idProofs: {
        aadhar: "XXXX-XXXX-7890",
        pan: "QRSTU1234V",
      },
    },
  ],

  rooms: [
    {
      id: 201,
      status: 'OCCUPIED',
      price: 7000,
      active: true,
      floor: '2nd',
      occupancy: 1,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    },
    {
      id: 202,
      status: 'OCCUPIED',
      price: 8000,
      active: true,
      floor: '2nd',
      occupancy: 1,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    },
    {
      id: 301,
      status: 'OCCUPIED',
      price: 9000,
      active: true,
      floor: '3rd',
      occupancy: 1,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    },
    {
      id: 302,
      status: 'OCCUPIED',
      price: 7500,
      active: true,
      floor: '3rd',
      occupancy: 1,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    },
    {
      id: 401,
      status: 'OCCUPIED',
      price: 8500,
      active: true,
      floor: '4th',
      occupancy: 1,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    },
    {
      id: 101,
      status: 'VACANT',
      price: 7000,
      active: true,
      floor: '1st',
      occupancy: 1,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    },
    {
      id: 102,
      status: 'MAINTENANCE',
      price: 7000,
      active: false,
      floor: '1st',
      occupancy: 1,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    }
  ],

  // Generate payments based on tenant data
  getPayments() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    return this.tenants.map(tenant => ({
      id: `${tenant.id}-${currentMonth}`,
      tenantName: `${tenant.firstName} ${tenant.lastName}`,
      tenantId: tenant.id,
      room: tenant.pgDetails.room,
      amount: tenant.pgDetails.monthlyRent,
      status: Math.random() > 0.5 ? 'PAID' : 'PENDING', // Randomly assign status for demo
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(tenant.pgDetails.dueDate).padStart(2, '0')}`,
      method: Math.random() > 0.5 ? 'UPI' : 'CASH', // Randomly assign method for demo
      dueDate: tenant.pgDetails.dueDate
    }));
  }
};