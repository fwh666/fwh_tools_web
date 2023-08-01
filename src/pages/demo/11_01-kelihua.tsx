import React from "react";
/**
 * 科里化
 */
class Kelihua extends React.Component {
    //初始化状态
    state = {
        username: '', //用户名
        password: '' //密码
    }

    //保存表单数据到状态中
    saveFormData = (dataType: any) => {
        return (event: any) => {
            this.setState({ [dataType]: event.target.value })
        }
    }

    //表单提交的回调
    handleSubmit = (event: any) => {
        event.preventDefault() //阻止表单提交
        const { username, password } = this.state
        alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveFormData('username')} type="text" name="username" />
                密码：<input onChange={this.saveFormData('password')} type="password" name="password" />
                <button>登录</button>
            </form>
        )
    }
}
export default Kelihua;