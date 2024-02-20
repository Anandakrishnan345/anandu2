import React, { useState } from 'react';
import './Login.css'
import { BrowserRouter as Link,Route,Router } from 'react-router-dom';

const Login = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    return (
        <div className='wrapper' >
          
            <h2>Login</h2>
            <form className='wrap-item'>
                <label htmlFor="name">Enter your email</label>
                <input type="text" placeholder="email" name='name' value={username} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className='centre'>
                 <Link to ={'/adduser'}>Login</Link> 
                
                </div>
                
            </form>
        </div>
    );
};

export default Login;