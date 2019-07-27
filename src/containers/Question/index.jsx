import React, { Fragment, Component } from 'react';
import './style.css'

class Question extends Component {
    render() {
        return (
            <Fragment>
                <div className="question-body">
                    <p className="question"></p>
                </div>
            </Fragment>
        )
    }
}

export default Question;