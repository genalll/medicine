import React, { Fragment } from 'react';
import './css/header.css';
import './css/main.css'

class Pacient extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                    <div className="wrap">
                        <div className="block-left">
                            <div className="title">
                                <h2>Гиппократ</h2>
                            </div>
                            <div className="subtitle">
                                <p>Электронная система здравоохранения</p>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="wrap main-wrap">
                        <div className="pacient-data">
                            <div className="pacient-logo"></div>
                            <div className="pacient-name">
                                Марина Ивановна Цветаева
                            </div>
                        </div>
                        <div className="center">
                            <div className="visits">
                                <h2>Ближайшие посещения</h2>
                                <hr className="line" />
                                <div className="info-blocks">
                                    <div className="info-block">
                                        <h6>Дата</h6>
                                        <p>14.08.2019, 16:30</p>
                                        <a className="info-link" href="#">Отменить посещение</a>
                                    </div>
                                    <div className="info-block">
                                        <h6>Врач</h6>
                                        <p>Николай Иванович Пирогов</p>
                                        <a className="info-link" href="#">Перенести на другой день</a>
                                    </div>
                                    <div className="info-block">
                                        <h6>Специальность</h6>
                                        <p>Хирург</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>ЛПУ</h6>
                                        <p>МАУ ГКБ 14</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Статус</h6>
                                        <p>Открыто</p>
                                    </div>
                                </div>
                                <hr className="line"/>
                                <div className="info-blocks">
                                    <div className="info-block">
                                        <h6>Дата</h6>
                                        <p>14.08.2019, 16:30</p>
                                        <a className="info-link" href="#">Отменить посещение</a>
                                    </div>
                                    <div className="info-block">
                                        <h6>Врач</h6>
                                        <p>Николай Иванович Пирогов</p>
                                        <a className="info-link" href="#">Перенести на другой день</a>
                                    </div>
                                    <div className="info-block">
                                        <h6>Специальность</h6>
                                        <p>Хирург</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>ЛПУ</h6>
                                        <p>МАУ ГКБ 14</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Статус</h6>
                                        <p>Открыто</p>
                                    </div>
                                </div>
                            </div>
                            <div className="quest"></div>
                            <div className="feedback"></div>
                        </div>
                    </div>
                </main>

                {/* <div className="wrap">
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
                </div> */}
            </Fragment>
        )
    }
}

export default Pacient;