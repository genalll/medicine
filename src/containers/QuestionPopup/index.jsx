import React, { Fragment, Component } from 'react';
import './style.css'

import Question from '../Question';

const QUESTIONS = [
    {
        question: 'Вы получили информацию о состоянии здоровья и рекомендации?',
    },
    {
        question: 'Поинтересовался ли кардиолог тем, как часто вы проверяете давление и пульс?',
    },
    {
        question: 'Выполнил ли специалист осмотр?',
    },
    {
        question: 'При обращении в медицинскую организацию Вы обращались к информации, размещенной в помещениях медицинской организации (стенды, инфоматы и др.)?',
    },
    {
        question: 'Рекомендовали бы Вы данную медицинскую организацию для получения медицинской помощи?',
    },
    {
        question: 'В учреждении отсутствовала регистратура?',
    },
]

const PopupBody = (props) => (
    <div className="popup-body">
        <div className="all-form">
            <form className="popup-form">
                <h2 className="popup-title">Ответить на вопросы</h2>
                <div className="question-list">
                    {QUESTIONS.map((task, index) => (
                        <Question key={index} question={task.question} number={index} />
                    ))}
                </div>
                <div className="form-footer">
                    <img src="images/button-blue.svg" alt="blue button" />
                    <div className="addition-text-form">
                        <p>Есть что добавить?</p>
                        <a href="/">Дополнить ответ комментарием</a>
                    </div>
                </div>
            </form>
            <img src="images/cross.png" alt="cross" className="cross" onClick={props.handleClick} />
        </div>
    </div>
)

class Popup extends Component {
    state = {
        show: true,
    }

    handleClick = () => {
        this.setState({
            show: false,
        })
    }

    render() {
        const { show } = this.state;

        return (
            <Fragment>
                {show ? <PopupBody handleClick={this.handleClick} /> : <div className="popup-none"></div>}
            </Fragment>
        )
    }
}

export default Popup;