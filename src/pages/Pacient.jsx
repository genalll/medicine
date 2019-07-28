import React, { Fragment } from 'react';
import './css/header.css';
import './css/main.css';
import './css/footer.css';
import './css/adaptive.css';

import Popup from '../containers/QuestionPopup';

class Pacient extends React.Component {
    render() {
        return (
            <Fragment>
                {/* <Popup /> */}
                <header>
                    <div className="wrap">
                        <div className="block-left">
                            <img className="header-logo" src="images/cite_logo.png" alt="Логотип Сайта Здоровья" />
                            <div className="title-text">
                                <div className="title">
                                    <h2>Гиппократ</h2>
                                </div>
                                <div className="subtitle">
                                    <p>Электронная система здравоохранения</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main">
                    <div className="wrap main-wrap">
                        <div className="left-side">
                            <div className="pacient-data">
                                <div className="pacient-logo">
                                    <img src="images/cvetaeva.png" alt="Марина Цветаева" />
                                </div>
                                <div className="pacient-info">
                                    <div className="info-block">
                                        <h6>Пациент</h6>
                                        <p>Марина Ивановна Цветаева</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Дата рождения</h6>
                                        <p>08 окт 1984</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Номер полиса</h6>
                                        <p>5635 4525 3465 5632</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Текущий статус</h6>
                                        <p>Больничный до 17.08.2019</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notification">
                                <div className="alert">Внимание!</div>
                                <div className="notification-info">
                                    <div className="info-block">
                                        <h6>Уведомление</h6>
                                        <p>Эпидемия гриппа</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Число заболевших</h6>
                                        <p>1000 человек</p>
                                    </div>
                                </div>
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
                                        <a className="info-link" href="/">Отменить посещение</a>
                                    </div>
                                    <div className="info-block">
                                        <h6>Врач</h6>
                                        <p>Николай Иванович Пирогов</p>
                                        <a className="info-link" href="/">Перенести на другой день</a>
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
                                <hr className="line" />
                                <div className="info-blocks">
                                    <div className="info-block">
                                        <h6>Дата</h6>
                                        <p>14.08.2019, 16:30</p>
                                        <a className="info-link" href="/">Перезаписаться</a>
                                    </div>
                                    <div className="info-block">
                                        <h6>Врач</h6>
                                        <p>Мороз Валентина Ивановна</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Специальность</h6>
                                        <p>Терапевт</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>ЛПУ</h6>
                                        <p>МАУ ГКБ 14</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Статус</h6>
                                        <p>Пропущено</p>
                                    </div>
                                </div>
                            </div>
                            <div className="quest">
                                <h2 className="fb-h">Обратная связь</h2>
                                <p className="fb-info">Оставляя отзыв, Вы делаете нас лучше :)</p>
                                <div className="estimate-buttons">
                                    <div className="like-button">
                                        <img src="images/smily_smile.svg" alt="веселый смайл" />
                                        <div className="like text">
                                            <p className="green-color head-estimate">Мне понравилось!</p>
                                            <p className="small-gray-text">Осбслуживание было на хорошем уровне. <br/>Врач выписал мне эффективное лечение.</p>
                                        </div>
                                    </div>
                                    <div className="dislike-button">
                                        <img src="images/sad_smile.svg" alt="грустный смайл" />
                                        <div className="dislike text">
                                            <p className="red-color head-estimate">Есть недочеты.</p>
                                            <p className="small-gray-text">В учреждении были грязно. Или врач вел себя <br/>не корректно и не соблюдал этику.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feedback">
                                <h2>Карта пациента</h2>
                                <div className="info-blocks info-left">
                                    <div className="info-block">
                                        <h6>Хронические заболевания</h6>
                                        <p>Ищимическая болезнь сердца</p>
                                    </div>
                                    <div className="info-block">
                                        <h6>Инвалидность</h6>
                                        <p>Инвалидность отсутствует</p>
                                    </div>
                                </div>
                                <a href="/" className="info-link">Посещения врача</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="wrap">
                            <div className="footer-text footer-left"><b>АИС Гиппократ</b> © Все права защищены</div>
                            <div className="footer-text footer-right">Подключенно к порталу <b>ГосУслуги</b></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Pacient;