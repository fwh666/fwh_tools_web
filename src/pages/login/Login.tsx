import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { addListener } from 'process';
import './passlogin.css'
interface User {
    email: string;
    password: string;
}
function Example() {
    const [count, setCount] = useState(0); // 初始化状态值为 0

    function handleClick() {
        setCount(count + 1); // 调用 setCount 修改状态值
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

{/** 时尚 */ }
const LoginPage: React.FC = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState('')

    const onFinish = (values: any) => {
        // onFinishFailed(values)
        console.log('Success:', values);
        console.log('username1:', username);
        // alert('login success')
        // values.map((value) => ()
        //     console.log(value.username);
        // })
        // values.map((item, index) => {
        //     return (
        //         console.log(value.username)
        //     );
        // })
        console.log(values.username);
        console.log(values.password);

        setusername("username")
        setpassword(values.password)
        console.log('username2:', username);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <div className='login-box module-l-static'>
                <div className="l-tab-covers">
                    <div className="l-tab-list">短信登录</div>
                    <div className="l-tab-list current" data-immersive-translate-effect="1" data-immersive_translate_walked="a355fbab-1484-4f2b-9cb8-7b58e238ba84">密码登录</div>
                </div>

                <div className='pass-login-covers hide'>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            className='text-style ipt-default-current'
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input className='text-style ipt-default-current' placeholder='请输入邮箱' />
                        </Form.Item>

                        <Form.Item
                            className='text-style ipt-default-current'
                            // label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className='text-style ipt-default-current' placeholder='请输入密码' />
                        </Form.Item>

                        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className='btn-current-big btn-disabled'>
                            <Button type="primary" htmlType="submit" className='btn-current-big btn-disabled loginButton'>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className="auto-login">
                    <Checkbox className='auto-login-cd'>下次自动登录</Checkbox>
                    <div className="login-links">
                        <a href="//passport.zcool.com.cn/getpassword.do?appId=1006" target="_blank" className="">忘记密码</a>

                        &nbsp; | &nbsp;<a href="//passport.zcool.com.cn/regPhone.do?appId=1006&amp;cback=https://www.zcool.com.cn/" target="_blank" className="">注册</a>

                    </div>
                </div>

                <div className="third-login-box" style={{ bottom: '140px' }}>
                    <p className="third-account">第三方账号登录</p>
                    <div className="account-login">
                        <a data-href="/thirdlogin/wechat.do?appId=1006&amp;cback=https://www.zcool.com.cn/" className="wechat-login"></a>
                        <a data-href="/thirdlogin/wb.do?appId=1006&amp;cback=https://www.zcool.com.cn/" className="weibo-login"></a>
                        <a data-href="/thirdlogin/qq.do?appId=1006&amp;cback=https://www.zcool.com.cn/" className="qq-login"></a>
                    </div>
                </div>

                <div className="tip_pass  tip-pass-fwh">
                    <div id="checkTipDiv">
                        <p>登录或注册即代表同意
                            <a target="_blank" href="//www.zcool.com.cn/userAgreement">
                                <span className='tip-pass-font-fwh'>用户协议</span>
                            </a>和
                            <a href="//www.zcool.com.cn/policy" target="_blank">
                                <span className='tip-pass-font-fwh'>隐私政策</span>
                            </a>
                        </p>
                    </div>
                    <p className="tip" data-immersive-translate-effect="1" data-immersive_translate_walked="a355fbab-1484-4f2b-9cb8-7b58e238ba84">未满18周岁未成年人请勿自行注册，其注册、登录账号及使用服务需征得监护人同意</p>
                </div>
            </div >

        </>

    );

};
export default LoginPage