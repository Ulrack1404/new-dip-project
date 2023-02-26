import React from "react";
import SwiperComponent from "../components/ui/swiper";
import useMockData from "../utils/mockData";

const Main = () => {
    return (
        <>
            <div className=" gradient">
                <div className="d-flex container py-5 ">
                    <div className="col-6">
                        <h1 className="h1 color-w mb-5">
                            Доставка еды в нашем городе
                        </h1>
                        <p className=" color-w">
                            Наше кафе открылось в 2023г. Это двухэтажное здание
                            с цокольным этажом и стоянкой для автомобилей. В
                            кафе работают три зала. Они отличаются интерьером,
                            поэтому Вы можете выбрать обстановку, которая
                            подходит именно Вам. Во всех залах Вам предложат
                            большой ассортимент пицц и разнообразных блюд, от
                            салатов до горячих закусок итальянской и европейской
                            кухни. Большой выбор молочных коктейлей,
                            мороженного, десертов. В зале &quot;Италия&quot; с
                            19.00 работает живая музыка. Здесь проводятся
                            банкеты, свадьбы, юбилеи.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="pos-rel">
                <div className="container">
                    <div className="pos-abs z-3">
                        <div className="d-flex container py-5 ">
                            <div className="">
                                <h1 className="h1 text-light mb-5">
                                    Доставка еды в нашем городе
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="py-2">
                <SwiperComponent />
            </div>
        </>
    );
};

export default Main;
