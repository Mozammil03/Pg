import React, { useState } from 'react'
import { login } from '../../services/UserServices';

const credential = {
    email: '',
    password: ''
}

const LogInModal = () => {
    const [credentials, setCredentials] = useState(credential);

    const handleClick = async () => {
        const { email, password } = credentials;
        if (!email || !password) {
          alert('Email and password required');
          return;
        }
        const res = await login(credentials);
        console.log(
          "User logged in, Lock set to " + localStorage.getItem("Lock"),
        );
        console.log('Login response:', res)
    };


  return (
    <div className="h-full w-full flex items-center">
      <div>Login</div>
      <div>
        <input
          type="text"
          name="email"
          value={credentials.email}
          placeholder="Email"
          onChange={(e) =>
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          onChange={(e) =>
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}

export default LogInModal