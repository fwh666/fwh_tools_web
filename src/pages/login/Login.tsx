import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
  margin-top: 1rem;
`;

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // TODO: 处理登录逻辑
        if (username === 'admin' && password === 'admin') {
            console.log('登录成功');
        } else {
            setError('用户名或密码不正确');
        }
    };

    return (
        <Container>
            <Card>
                <Title>登录</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="用户名"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Error>{error}</Error>}
                    <Button type="submit">登录</Button>
                </Form>
            </Card>
        </Container>
    );
}

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // TODO: 处理注册逻辑
        if (username && password && password === confirmPassword) {
            console.log('注册成功');
        } else {
            setError('请填写正确的用户名和密码，并确认密码');
        }
    };

    return (
        <Container>
            <Card>
                <Title>注册</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="用户名"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="确认密码"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <Error>{error}</Error>}
                    <Button type="submit">注册</Button>
                </Form>
            </Card>
        </Container>
    );
}

function LoginPage() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            {isLogin ? <Login /> : <Register />}
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                {isLogin ? (
                    <>
                        没有账号？<a href="#" onClick={() => setIsLogin(false)}>注册</a>
                    </>
                ) : (
                    <>
                        已有账号？<a href="#" onClick={() => setIsLogin(true)}>登录</a>
                    </>
                )}
            </div>
        </div>
    );
}

export default LoginPage;