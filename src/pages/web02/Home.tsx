import { Layout } from 'antd';
import AppHeader from './Header';

const { Content } = Layout;

const Home = () => {
    return (
        <Layout>
            <AppHeader />
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">Welcome to the Login Page!</div>
            </Content>
        </Layout>
    );
};

export default Home;