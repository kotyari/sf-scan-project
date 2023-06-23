import React from 'react'
import css from './MainAdvantages.module.css'

import timer from '../../../images/timer.png'
import search from '../../../images/search.png'
import shield from '../../../images/shield.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function DivSlider() {
  const settings = {
    dots: false,
    slidesToShow: 3,
    arrows: false,
  }

  return (
    <div className={css.slider_cards}>
      <Slider {...settings}>
        <div className={css.slide_wrapper}>
          <div className={css.slider_card}>
            <img className={css.card_icon} src={timer} alt=""></img>
            <p className={css.card_p}>
              Высокая и оперативная скорость обработки заявки
            </p>
          </div>
        </div>

        <div className={css.slide_wrapper}>
          <div className={css.slider_card}>
            <img className={css.card_icon} src={search} alt=""></img>
            <p className={css.card_p}>
              Огромная комплексная база данных, обеспечивающая объективный ответ
              на запрос
            </p>
          </div>
        </div>

        <div className={css.slide_wrapper}>
          <div className={css.slider_card}>
            <img className={css.card_icon} src={shield} alt=""></img>
            <p className={css.card_p}>
              Защита конфеденциальных сведений, не подлежащих разглашению по
              федеральному законодательству
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}
