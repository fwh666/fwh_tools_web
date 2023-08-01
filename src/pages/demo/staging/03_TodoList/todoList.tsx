import React from "react";
import { ReactNode } from "react";
import Header from "./header";
export default class TodoList extends React.Component {

    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: false }
        ]
    }
    addTodo = (todoObj: any) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    render(): ReactNode {
        return (
            <>
                <h1>TodoList</h1>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                        {/* <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} /> */}
                    </div>
                </div>
            </>
        )
    }
}