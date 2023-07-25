import { Layout, Menu, Button } from 'antd';
import { GoogleOutlined, WechatOutlined } from '@ant-design/icons';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';

const { Header } = Layout;

const AppHeader = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    const handleLogin = () => {
        setLoginVisible(true);
    };

    const handleRegister = () => {
        setRegisterVisible(true);
    };

    const handleLoginCancel = () => {
        setLoginVisible(false);
    };

    const handleRegisterCancel = () => {
        setRegisterVisible(false);
    };

    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2" onClick={handleLogin}>
                    Login
                </Menu.Item>
                <Menu.Item key="3" onClick={handleRegister}>
                    Register
                </Menu.Item>
                <Menu.Item key="4">
                    <Button type="primary" icon={<GoogleOutlined />} />
                </Menu.Item>
                <Menu.Item key="5">
                    <Button type="primary" icon={<WechatOutlined />} />
                </Menu.Item>
            </Menu>
            <Login visible={loginVisible} />
            <Register />
        </Header>
    );
};

export default AppHeader;