import React, { Fragment, Component } from 'react';
import './style.css'

import Question from '../Question';

const QUESTIONS = [
    {
        question: 'How are you?',
    },
    {
        question: 'Here is another..!',
    },
    {
        question: 'Another one :)',
    }
]

class Popup extends Component {
    render() {
        return (
            <Fragment>
                <div className="popup-body">
                    <form className="popup-form">
                        <h2 className="popup-title">Ответить на вопросы</h2>
                        {QUESTIONS.map((task, index) => (
                            <Question key={index} question={task.question} />
                        ))}
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Popup;