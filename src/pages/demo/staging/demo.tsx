import React from "react";
import TodoList from "./03_TodoList/todoList";
import Proxy from "./04_proxy/proxy";
export default function DemoStag() {
    return (
        <>
            <br /><span>04-代理服务器案例-------------</span>
            <Proxy/>
            <br /><span>03-TODOList案例-------------</span>
            <TodoList />
        </>
    )
}