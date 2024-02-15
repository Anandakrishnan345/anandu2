import React, { useState } from 'react';
import './Login.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   

    return (
        <div className='wrapper' >
          
            <h2>Login</h2>
            <form className='wrap-item'>
                <label htmlFor="name">Enter your UserName</label>
                <input type="text" placeholder="Username" name='name' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className='centre'>
                <button type="submit">Login</button>
                </div>
                
            </form>
        </div>
    );
};

export default Login;