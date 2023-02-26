import React from "react";

const Footer = () => {
    return (
        <div className="p-5 mt-5 bg-dark">
            <div className="container">
                <div className="container text-white border-bottom border-warning pb-5 mb-3">
                    <div className="mb-5">
                        Кафе &quot;Пицца&quot; открылось в 2023г. Это
                        двухэтажное здание с цокольным этажом и стоянкой для
                        автомобилей. В кафе работают три зала. Они отличаются
                        интерьером, поэтому Вы можете выбрать обстановку,
                        которая подходит именно Вам. Во всех залах Вам предложат
                        большой ассортимент пицц и разнообразных блюд, от
                        салатов до горячих закусок итальянской и европейской
                        кухни. Большой выбор молочных коктейлей, мороженного,
                        десертов. В зале &quot;Венеция&quot; с 19.00 работает
                        живая музыка. Здесь проводятся банкеты, свадьбы, юбилеи.
                    </div>
                    <div className="d-flex">
                        <div className="me-5">
                            <h3 className="fw-bold mb-4">Время работы</h3>
                            <div>
                                <p>
                                    <span>ПН-ЧТ: с 10.00 до 23.00</span> <br />
                                    <span>ПТ-СБ: с 10.00 до 24.00</span>
                                    <br />
                                    <span>ВС: с 10.00 до 23.00</span>
                                    <br />
                                </p>
                                <p>Мы ждем гостей ежедневно и без выходных!</p>
                                <p>
                                    Подписывайтесь на нашу группу вконтакте и
                                    узнавайте обо всех обновлениях !
                                </p>
                            </div>
                        </div>
                        <div className="me-5">
                            <h3 className="fw-bold mb-4">Как нас найти</h3>
                            <div>
                                <p>
                                    Пицца-ленд распологается в самом центре
                                    города.
                                </p>
                                <p className="mb-4">
                                    Найти нас можно по адресу: г. Москва, ул.
                                    Айтишников, 256
                                </p>
                                <p className="fw-bold mb-4">
                                    Телефоны доставки:
                                </p>
                                <p className="text-warning">23-45-67</p>
                                <p className="text-warning">8(900)123-45-67</p>
                                <p>Телефон для связи:</p>
                                <p className="text-warning">98-76-54</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-4">Наши достоинства</h3>
                            <p>
                                У нас вы найдете самые вкусные блюда в городе.
                            </p>
                            <p>Приходите и проверьте сами. </p>
                            <p>Поверьте, Вы не пожалеете</p>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    Copyright © 2023. Все права защищены. Разработка и
                    продвижение сайтов
                    <span className="text-warning ms-1">
                        &quot;New tehnologies&quot;
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
