import React from "react";
/**
 * props传参使用
 * @returns
 */
// class Person {
//     name: string;
//     sex: number;
//     address: string;
//     constructor(name: string, sex: number, address: string) {
//         this.name = name;
//         this.sex = sex;
//         this.address = address;
//     }
// }

type PersonProps = {
    name: string;
    gender: string;
}

class Person extends React.Component<PersonProps>{
    constructor(props: PersonProps | Readonly<PersonProps>) {
        super(props)
        console.log('constructor', this.props);
    }

    render(): React.ReactNode {
        const { name, gender } = this.props
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{gender}</li>
            </ul>

            // <Person name="zhangsan"></Person>
        )
    }
}
export default Person;