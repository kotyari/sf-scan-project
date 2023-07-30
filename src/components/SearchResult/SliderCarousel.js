import React, { useRef } from 'react'
import css from './SearchResult.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import load from '../../images/spinner.png'
import leftarrow from '../../images/arrowleft.png'
import rightarrow from '../../images/arrowright.png'

export default function SliderCarousel({ data, publicationData }) {
  const articles = data[0].data

  const risks = JSON.parse(
    JSON.stringify(data[1].data).replaceAll('"value"', '"risksValue"')
  )

  risks.map((item) => delete item.date)

  const combinedData = articles.map((item, index) => ({
    ...item,
    ...risks[index],
  }))

  const slider = useRef(null)
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: data[0].data.length > 8 ? 8 : data[0].data.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: data[0].data.length > 6 ? 6 : data[0].data.length,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: data[0].data.length > 5 ? 5 : data[0].data.length,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: data[0].data.length > 2 ? 2 : data[0].data.length,
        },
      },
    ],
  }

  return (
    <div className={css.slider_carousel}>
      <img
        onClick={() => slider.current.slickPrev()}
        src={leftarrow}
        className={css.arrow}
        alt="left"
      ></img>
      <div className={css.slider_inside}>
        <div className={css.carousel_start}>
          <p className={css.carousel_p}>Период</p>
          <p className={css.carousel_p}>Всего</p>
          <p className={css.carousel_p}>Риски</p>
        </div>
        {!publicationData ? (
          <div className={css.loader}>
            <img className={css.loader_img} src={load} alt=""></img>
            <p className={css.loader_text}>Загружаем данные</p>
          </div>
        ) : (
          <div className={css.slider_cards}>
            <Slider ref={slider} {...settings}>
              {combinedData.map((item) => (
                <div key={item.date + item.value} className={css.slide_wrapper}>
                  <div className={css.slider_card}>
                    <p className={css.card_p}>
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                    <p className={css.card_p}>{item.value}</p>
                    <p className={css.card_p}>{item.risksValue}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      <img
        onClick={() => slider.current.slickNext()}
        src={rightarrow}
        className={css.arrow}
        alt="right"
      ></img>
    </div>
  )
}
