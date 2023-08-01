import { type } from "os";
import React from "react";
/**
 * const表达式
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


function BDS02(props: Props) {
    return (
        <>
            <h1> Hello02,{props.name}</h1>
        </>
    )
}


export default function BDS() {
    return (
        <>
            <BDS01 name="表达式01"></BDS01>
            <BDS02 name="表达式02"></BDS02>
        </>
    )
};