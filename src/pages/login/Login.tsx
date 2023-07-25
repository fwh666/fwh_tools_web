/**
 * 1.登录注册功能
 */


import React, { useState } from 'react';
import './Login.css';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const registeredUsers = [{
        username: "john",
        password: "12345"
    }];

    const handleRegister = () => {
        const exists = registeredUsers.some(user => user.username === username);
        if (!exists) {
            registeredUsers.push({
                username,
                password
            });
            setIsRegistered(true);
        }
    }

    const handleLogin = () => {
        const user = registeredUsers.find(user => user.username === username);
        if (user) {
            if (user.password === password) {
                alert(`Welcome ${username}!`);
            } else {
                alert('Incorrect password!');
            }
        } else {
            alert("Username does not exist!");
        }
    }

    return (
        <div className="Login">
            {
                isRegistered ? (
                    <div>
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>Login</button>
                    </div>
                ) : (
                    <div>
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <button onClick={handleRegister}>Register</button>
                    </div>
                )
            }
        </div>
    );
}

export default LoginPage;