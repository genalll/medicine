import React, { Fragment } from 'react';
import './css/auth.css'
import loginData from '../temp_data/login';
import { Redirect } from 'react-router';

class Register extends React.Component {
    state = {
        loginValue: '',
        passwordValue: '',
        route: '/',
        redirect: false,
    }

    updatePasswordValue = (e) => {
        this.setState({
            passwordValue: e.target.value,
        })
    }

    updateLoginValue = (e) => {
        this.setState({
            loginValue: e.target.value,
        })
    }

    checkLogin = (e) => {
        e.preventDefault();
        let password = this.state.passwordValue;
        let login = this.state.loginValue;
        let user = loginData.find(
            function (user) {
                return (user.login === login && user.password === password)
            }
        )
        if (user) {
            this.setState({
                route: user.root,
                redirect: true,
            })
        }

        this.setState({
            passwordValue: '',
        })

        this.passwordInput.current.value = '';
    }

    renderNext = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.route} />
        }
    }

    loginInput = React.createRef();
    passwordInput = React.createRef();

    render() {
        return (
            <Fragment>
                <form className="login">
                    <input autoComplete="off" type="text" placeholder="Username" ref={this.loginInput} onChange={this.updateLoginValue} />
                    <input autoComplete="off" type="password" placeholder="Password" ref={this.passwordInput} onChange={this.updatePasswordValue} />
                    <button onClick={this.checkLogin}>Register</button>
                    {this.renderNext()}
                </form>
            </Fragment>
        )
    }
}

export default Register;