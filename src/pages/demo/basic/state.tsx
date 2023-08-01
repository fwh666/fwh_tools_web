import { Button } from "antd";
import React, { useState } from "react";

function Weather(){
    const [isHot,setIsHot]=useState(true)
    const weatherHandle=()=>{
        setIsHot(isHot?false:true)
        // setIsHot(isHot:!isHot)
        console.log(isHot);
        console.log(Weather);
        
    }
    return(
        <>
            <h1 onClick={weatherHandle}>天气很{isHot?'炎热':'凉爽'}</h1>
            <Button onClick={weatherHandle} type="primary">Change</Button>
        </>
    )
}
export default Weather