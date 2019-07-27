import React, { Fragment, Component } from 'react';
import './style.css'

class Popup extends Component {
    render() {
        return (
            <Fragment>
                <div className="popup-body">
                    <form className="popup-form">
                        <h2 className="popup-title">Ответить на вопросы</h2>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Popup;