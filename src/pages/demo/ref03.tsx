import { Button, Input } from "antd";
import React, { useRef } from "react";

// export default function RefDemo03() {
//     const myRef = React.createRef()
//     const myRef2 = React.createRef()
//     const showData = () => {
//         // alert(this.myRef.current.value)
//         alert(myRef2.current)
//     }
//     return (
//         <>
//             {/* <Input ref={myRef} type="text" placeholder="输入点击提示"></Input> */}
//             <Button onClick={showData}>按钮点击提示</Button>
//             <Input onBlur={showData}></Input>
//         </>
//     )
// }

// const RefDemo03: React.FC = () => {
//     const myRef = React.createRef()
//     const myRef2 = React.createRef()
//     //展示左侧输入框的数据
//     showData = () => {
//         alert(this.myRef.current.value);
//     }
//     //展示右侧输入框的数据
//     showData2 = () => {
//         alert(this.myRef2.current.value);
//     }
//     return (
//         <>

//         </>
//     )
// }


function RefDemo03() {
    // const myRef = useRef<HTMLInputElement>(null);
    // function handleClick() {
    //     myRef.current.focus()
    //     console.log(myRef.current.value)
    // }
    // return (
    //     <>

    //         <input type="text" ref={myRef} />

    //         <Input type="text" ref={myRef}></Input>
    //         <Button onClick={handleClick}>shhh</Button>
    //     </>
    // )

    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
            alert(inputRef.current.value)
            console.log(inputRef.current.focus);

        }
    }
    return (
        <>
            <input type="text" ref={inputRef} />
            {/* <Input type="text" ref={inputRef}></Input> */}
            <Button onClick={handleClick}> 点击验证</Button>
        </>
    )
}
export default RefDemo03;