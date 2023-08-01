import Weather from "./state";
import PropsDemo from "./props01";
// import Person from "./props02";
import BDS from "./bdsConst";
import RefDemo03 from "./ref03";

export default function Demo() {
    return (
        <>
            <RefDemo03></RefDemo03>
            <br /><span>-------------</span>
            <PropsDemo />
            <br /><span>-------------</span>
            <Weather />
            <br /><span>-------------</span>
            <BDS></BDS>
        </>

    )
}