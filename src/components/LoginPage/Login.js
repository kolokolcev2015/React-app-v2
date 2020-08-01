import React, {PureComponent} from 'react';
import {getRequestPassword} from '../../API/api'
import "./Login.css"
import {isAuth} from "../../redux/actions";
import {connect} from "react-redux";

class Login extends PureComponent {

    state ={
        password:'',
        errorText: ''
    }

    btnHandler = event => {
        event.preventDefault()
        if (this.state.password.trim()){
            getRequestPassword(this.state.password).then(request =>{
               if (request.data === 200){
                   this.setState({ errorText: '' })
                   this.props.isAuth()
               }else{
                   this.setState({ errorText: 'Некорректный пароль', password: '' })
               }
            })
        }else {
            this.setState({ errorText: 'Вы не заполнили поле' })
        }
    }

    setValue = value => this.setState({ password: value })

    render() {
        return (
        <div className="Login">
            <div className="RectLogin"> Вход </div>
            <form action="" className="log">
                <div className="InputPass">
                    <input value={this.state.password} onChange={event => this.setValue(event.target.value)}
                           className="Pass" type="password" placeholder="Пароль" required/>
                    {this.state.errorText !== '' && <div className="bottomBorder"> { this.state.errorText } </div>}
                </div>
                <button className="btnLogin btn" onClick={this.btnHandler}>Войти</button>
            </form>
        </div>
        );
    }
}
const getActionAuth={ isAuth }
export default connect(null,getActionAuth)(Login)