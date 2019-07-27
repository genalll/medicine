import React, { Fragment } from 'react';
import './css/auth.css'

class Auth extends React.Component {
    render() {
        return (
            <Fragment>
                <form className="login">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </Fragment>
        )
    }
}

export default Auth;