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
                    <img className="give-me-button" src="images/button-blue.svg" alt="blue button" onClick={props.openThanks} />
                    <div className="addition-text-form">
                        <p>Есть что добавить?</p>
                        <a href="/">Дополнить ответ комментарием</a>
                    </div>
                </div>
            </form>
            <img src="images/cross.png" alt="cross" className="cross" onClick={props.handleCrossClick} />
        </div>
    </div>
)

const ThanksPopup = (props) => (
    <div className="thanks-popup">
        <div className="thanks-body">
            <h2 className="thanks-title">Спасибо! Выберите бонус...</h2>
            <div className="change-gift" onClick={props.closeThanks}>
                <div className="first-gift">
                    <img className="gift-image" src="images/gift-1.svg" alt="gift" />
                    <p>-5% на посещение санаторий Обуховский</p>
                </div>
                <div className="second-gift" onClick={props.closeThanks}>
                    <img className="gift-image" src="images/gitft-2.png" alt="gift" />
                    <p>Скидочная карта в аптеку Вита на 30%</p>
                </div>
            </div>
        </div>
    </div>
)

class Popup extends Component {
    state = {
        show: true,
        thanksPopup: false,
        mainPage: false,
    }

    handleCrossClick = () => {
        this.setState({
            show: false,
        })
        this.props.closePopup();
    }

    openThanks = () => {
        this.setState({
            show: false,
            thanksPopup: true,
        })
    }

    closeThanks = () => {
        this.setState({
            thanksPopup: false,
        })
        this.props.closePopup();
    }

    redirectToMainPage = () => {
        this.setState({
            mainPage: true,
        })
    }

    render() {
        const { show, thanksPopup } = this.state;

        return (
            <Fragment>
                {show ? <PopupBody handleCrossClick={this.handleCrossClick} openThanks={this.openThanks} /> : null}
                {thanksPopup ? <ThanksPopup closeThanks={this.closeThanks} /> : null}
            </Fragment>
        )
    }
}

export default Popup;