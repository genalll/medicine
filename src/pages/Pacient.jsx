import React, { Fragment } from 'react';
import './css/header.css';
import './css/pacient.css'

class Pacient extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                    <div className="wrap">
                        <div className="block-left">
                            <div className="column">
                                <div className="title">
                                    <h2>Гиппократ</h2>
                                </div>
                                <div className="subtitle">Электронная система здравоохранения</div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="wrap">
                    <div class="pat">
                        <p class="Name">Марина Ивановна Цветаева </p>
                        <p class="date">Дата рождения</p>
                        <p class="nom">Номер полиса</p>
                        <p class="pol">Поликлиника</p>
                    </div>
                    <div class="ln">Ближайшие посещения</div>
                    <div class="vn">Внимание</div>
                    <div> </div>
                    <div class='bl'>Больничный лист</div>
                    <div class="ots"> Оставить отзыв</div>
                    <div class='cart'>Карта пациента</div>
                </div>
            </Fragment>
        )
    }
}

export default Pacient;