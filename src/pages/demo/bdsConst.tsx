import { type } from "os";
import React from "react";
/**
 * 函数表达式
 */
type Props = {
    name: string
}
const BDS01: React.FC<Props> = (props) => {
    return (
        <>
            <h1> Hello01,{props.name}</h1>
        </>
    )
}

/**
 * 
 * @param props 
 * @returns 
 */
function BDS02(props: Props) {
    return (
        <>
            <h1> Hello02,{props.name}</h1>
        </>
    )
}

/**
 * 类组件形式
 */
class BDS03 extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <h1> Hello03</h1>
            </>
        )
    }
}


export default function BDS() {
    return (
        <>
            <BDS01 name="表达式01"></BDS01>
            <BDS02 name="表达式02"></BDS02>
            <BDS03></BDS03>
        </>
    )
};