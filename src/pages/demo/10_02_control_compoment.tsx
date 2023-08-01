import React, { useState } from "react";

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin(username, password);
        console.log(username, password);

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                用户名:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
                密码:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">登录</button>
        </form>
    );
};

export default Login;