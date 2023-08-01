import Weather from "./state";
import PropsDemo from "./props01";
// import Person from "./props02";
import BDS from "./bdsConst";
import RefDemo03 from "./ref03";
import Login from "./10_02_control_compoment";
import Kelihua from "./11_01-kelihua";
import Person from "./13_02_key";

export default function Demo() {
    const handleLogin = (username: string, password: string) => {
        console.log('usernmae')
    }
    return (
        <>
            <Person />
            <br /><span>-------------</span>
            <Kelihua></Kelihua>
            <br /><span>-------------</span>
            <Login onLogin={handleLogin} />
            <br /><span>-------------</span>
            <RefDemo03></RefDemo03 >
            <br /><span>-------------</span>
            <PropsDemo />
            <br /><span>-------------</span>
            <Weather />
            <br /><span>-------------</span>
            <BDS></BDS>
        </>

    )
}