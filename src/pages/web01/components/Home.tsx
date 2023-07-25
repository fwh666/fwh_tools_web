// Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <h1>贝贝工具站</h1>
            <p>免费 高效 免登录 无限制 免安装 非商业 随缘更新</p>
            <nav className="home-nav">
                <ul>
                    <li><Link to="/file-transfer">贝贝文件云</Link></li>
                    <li><Link to="/sms-platform">短信平台</Link></li>
                    <li><Link to="/video-downloader">综合在线视频下载工具</Link></li>
                    <li><Link to="/video-editor">在线视频编辑器</Link></li>
                    <li><Link to="/services">贝贝服务工具</Link></li>
                    <li><Link to="/about">关于本站</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;