import React, { Fragment, Component } from 'react';
import './style.css'

class Question extends Component {
    state ={
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

    render() {
        return (
            <Fragment>
                <div className="question-body">
                    <p className="question">{this.props.question}</p>
                    <label className="question-radio">
                        <input className="question-var" type="radio" checked={this.state.yes} onClick={this.setYes} />
                        Да
                    </label>
                    <label className="question-radio">
                        <input className="question-var" type="radio" checked={this.state.no} onClick={this.setNo} />
                        Нет
                    </label>
                </div>
            </Fragment>
        )
    }
}

export default Question;