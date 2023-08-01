import React from "react";


function Persons(props: any) {
    const { name, age, sex } = props
    return (
        <ul>
            <li>姓名：{name}</li>
            <li>年龄：{age}</li>
            <li>性别：{sex}</li>
        </ul>
    )

}

export default function PropsDemo() {

    const p = { name: '老刘', age: 18, sex: 1 }

    return (
        <>
            {/* <Person {...p} /> */}
            <Persons {...p} />
        </>
    )
}