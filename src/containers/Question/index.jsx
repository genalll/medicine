import React, { Fragment, Component } from 'react';
import './style.css'

class Question extends Component {
    render() {
        return (
            <Fragment>
                <div className="question-body">
                    <p className="question">{this.props.question}</p>
                </div>
            </Fragment>
        )
    }
}

export default Question;