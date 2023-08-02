import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import React from "react"
import './index.css'

export default class Header extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        console.log(keyCode);

        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert("输入不能为空")
            return
        }
        //添加的数据结构，根据原始的数据结构一致 传入Header中的数据
        const todoObj = { id: nanoid(), name: target.value, done: false }
        console.log(todoObj);
        this.props.addTodo(todoObj)
        target.value = ''

    }
    render() {
        return (
            <>
                <h1>header</h1>
                <div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
            </>
        )
    }

}