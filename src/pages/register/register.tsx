import React, { useState } from 'react';

type SlideVerifyProps = {
    onVerified: () => void;
};

const SlideVerify: React.FC<SlideVerifyProps> = ({ onVerified }) => {
    // 这只是一个简单的例子，你可能需要一个更复杂、更安全的滑动验证组件
    const [isVerified, setVerified] = useState(false);

    const handleSlide = () => {
        setVerified(true);
        onVerified();
    };

    return (
        <div onPointerUp={handleSlide}>
            滑动验证{isVerified ? '通过' : '未通过'}
        </div>
    );
};

const RegistrationPage: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verified, setVerified] = useState(false);

    const handleVerification = () => {
        setVerified(true);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleGetCodeClick = () => {
        if (verified) {
            // 在这里调用发送验证码的API
            console.log(`发送验证码到 ${phoneNumber}`);
        }
    };

    return (
        <div>
            <input
                type="tel"
                placeholder="手机号"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
            <SlideVerify onVerified={handleVerification} />
            <button onClick={handleGetCodeClick} disabled={!verified}>
                获取验证码
            </button>
        </div>
    );
};

export default RegistrationPage;