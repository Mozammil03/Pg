import React from 'react'

const baseUrl = 'http://localhost:8080/user/';

const login = async (credentials) => {
  try {
    const response = await fetch(`${baseUrl}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('Lock', 1);
    // console.log('Login successful:', localStorage.getItem('user'));
    return data; // Return user data or token
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}
const logut = () => {
  localStorage.removeItem('user');
  localStorage.setItem('Lock', 0);
}

export { login, logut };



const UserServices = () => {
  return (
    <div>UserServices</div>
  )
}

export default UserServices