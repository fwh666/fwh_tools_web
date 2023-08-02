import React, { Component } from "react";
import { ReactNode } from "react";
import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/foot";
export default class TodoList extends Component {

    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: false }
        ]
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    updateTodo=(id,done)=>{
        const {todos}=this.state
        const newTodos=todos.map((todoObj)=>{
            if (todoObj.id===id) {
                return{...todoObj,done}
            }else{
                return todoObj
            }
        })
        this.setState({todos:newTodos})
    }
    deleteTodo=(id)=>{
        const {todos}=this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id!==id
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos}=this.state
        return (
            <>
                <h1>TodoList</h1>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                    </div>
                </div>
            </>
        )
    }
}