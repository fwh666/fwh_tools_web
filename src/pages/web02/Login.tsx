import { Modal, Form, Input, Button } from 'antd';

const Login = ({ visible = false }) => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Modal title="Login">
            <Form name="login" onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default Login;