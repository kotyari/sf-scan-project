import React, { useRef } from 'react'
import css from './SearchResult.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import leftarrow from '../../images/arrowleft.png'
import rightarrow from '../../images/arrowright.png'

export default function SliderCarousel() {
  const slider = useRef(null)
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
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
        <div className={css.slider_cards}>
          <Slider ref={slider} {...settings}>
            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>1</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>

            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>2</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>

            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>3</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>

            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>4</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>

            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>5</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>

            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>6</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>
            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>7</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>
            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>8</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>
            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>9</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>
            <div className={css.slide_wrapper}>
              <div className={css.slider_card}>
                <p className={css.card_p}>10.09.2021</p>
                <p className={css.card_p}>10</p>
                <p className={css.card_p}>0</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* <div className={css.carousel_wrapper}>
        <div className={css.carousel_start}>
          <p className={css.carousel_p}>Период</p>
          <p className={css.carousel_p}>Всего</p>
          <p className={css.carousel_p}>Риски</p>
        </div>
        <div className={css.carousel_inside}>
          <Slider ref={slider} {...settings}> */}
      {/* ПРИМЕР */}
      {/* <div className={css.carousel_card}>
              <p className={css.card_date}>10.09.2021</p>
              <p className={css.card_total}>5</p>
              <p className={css.card_risks}>0</p>
            </div>
            <div className={css.carousel_card}>
              <p className={css.card_date}>13.09.2021</p>
              <p className={css.card_total}>2</p>
              <p className={css.card_risks}>0</p>
            </div>
            <div className={css.carousel_card}>
              <p className={css.card_date}>17.09.2021</p>
              <p className={css.card_total}>6</p>
              <p className={css.card_risks}>0</p>
            </div>
            <div className={css.carousel_card}>
              <p className={css.card_date}>20.09.2021</p>
              <p className={css.card_total}>8</p>
              <p className={css.card_risks}>2</p>
            </div> */}
      {/* <div className={css.carousel_card}>
                <p className={css.card_date}>10.09.2021</p>
                <p className={css.card_total}>5</p>
                <p className={css.card_risks}>0</p>
              </div>
              <div className={css.carousel_card}>
                <p className={css.card_date}>12.10.2021</p>
                <p className={css.card_total}>1</p>
                <p className={css.card_risks}>0</p>
              </div>
              <div className={css.carousel_card}>
                <p className={css.card_date}>15.10.2021</p>
                <p className={css.card_total}>10</p>
                <p className={css.card_risks}>2</p>
              </div>
              <div className={css.carousel_card}>
                <p className={css.card_date}>16.10.2021</p>
                <p className={css.card_total}>4</p>
                <p className={css.card_risks}>0</p>
              </div>
              <div className={css.carousel_card}>
                <p className={css.card_date}>17.10.2021</p>
                <p className={css.card_total}>3</p>
                <p className={css.card_risks}>0</p>
              </div>
              <div className={css.carousel_card}>
                <p className={css.card_date}>19.10.2021</p>
                <p className={css.card_total}>3</p>
                <p className={css.card_risks}>2</p>
              </div>
              <div className={css.carousel_card}>
                <p className={css.card_date}>21.10.2021</p>
                <p className={css.card_total}>9</p>
                <p className={css.card_risks}>3</p>
              </div> */}

      {/* ПРИМЕР */}
      {/* </Slider>
        </div>
      </div> */}

      <img
        onClick={() => slider.current.slickNext()}
        src={rightarrow}
        className={css.arrow}
        alt="right"
      ></img>
    </div>
  )
}
