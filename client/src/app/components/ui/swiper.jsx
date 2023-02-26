import React from "react";
import { useSelector } from "react-redux";

import {
    A11y,
    Thumbs,
    Autoplay,
    EffectFade
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategories } from "../../store/categories";

import "swiper/css";
import "swiper/css/effect-fade";
import "../../../css/cast-slider.css";

const SwiperComponent = () => {
    const categories = useSelector(getCategories());

    if (categories) {
        return (
            <Swiper
                spaceBetween={80}
                slidesPerView={1}
                loop={true}
                loopedSlides={1}
                effect={"fade"}
                loopPreventsSliding={true}
                modules={[
                    A11y,
                    Thumbs,
                    Autoplay,
                    EffectFade
                ]}
                autoplay={{ delay: 2000 }}
                grabCursor={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="prod-slider"
            >
                {categories.map((category) => {
                    return (
                        <SwiperSlide key={category._id}>
                            <div className="_ibg h-350px d-flex-column pos-rel">
                                <div>
                                    <img
                                        className="object-fit z--1"
                                        src={require(`../../../img/categories/${category.imageUrl}.jpg`)}
                                        alt=""
                                    />
                                </div>
                                <div className="align-items-end z-3 bg-danger py-2 text-white fw-bold text-center pos-abs bottom-0 w-100">
                                    {category.name}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }
};

export default SwiperComponent;
