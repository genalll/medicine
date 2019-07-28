import React, { Fragment, Component } from 'react';
import './style.css'

class Question extends Component {
    state = {
        yes: false,
        no: false,
    }

    setYes = () => {
        this.setState({
            yes: true,
            no: false,
        })
    }

    setNo = () => {
        this.setState({
            yes: false,
            no: true,
        })
    }

    changeButton = () => {
        console.log('changed')
    }

    render() {
        return (
            <Fragment>
                <div className="question-body">
                    <div className="question">
                        <p className="question-number">{this.props.number + 1}.</p>
                        <p className="question-text">{this.props.question}</p>
                    </div>
                    <label className="question-radio">
                        <input className="question-var" type="radio" checked={this.state.yes} onClick={this.setYes} onChange={this.changeButton} />
                        Да
                    </label>
                    <label className="question-radio">
                        <input className="question-var" type="radio" checked={this.state.no} onClick={this.setNo} onChange={this.changeButton} />
                        Нет
                    </label>
                    <hr className="underline" />
                </div>
            </Fragment>
        )
    }
}

export default Question;