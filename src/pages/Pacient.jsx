import React, { Fragment } from 'react';
import './css/header.css';

class Pacient extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                    <div className="wrap">
                        <div className="block-left">
                            <div className="column">
                                <div className="logo">Лого</div>
                            </div>
                            <div className="column">
                                <div className="title">Гиппократ</div>
                                <div className="subtitle">Электронная система здравоохранения</div>
                            </div>
                        </div>
                        <div className="block-right">
                            <div className="column">
                                <div className="name">name</div>
                                <div className="logout">logout</div>
                            </div>
                            <div className="column">
                                <div className="avatar">avatar</div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Pacient;