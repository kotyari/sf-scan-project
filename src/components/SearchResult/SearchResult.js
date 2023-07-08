import React from 'react'
import { useSelector } from 'react-redux'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import css from './SearchResult.module.css'
import searching from '../../images/searching.png'
import mockimage from '../../images/mockdoc.png'
import SliderCarousel from './SliderCarousel'

export default function SearchResult() {
  return (
    <div className={css.search_result}>
      <div className={css.banner}>
        <div className={css.banner_text}>
          <h2 className={css.banner_heading}>
            Ищем. Скоро <br></br> будут результаты
          </h2>
          <h4 className={css.banner_subtitle}>
            Поиск может занять некоторое время,<br></br> просим сохранять
            терпение.
          </h4>
        </div>
        <img className={css.searching_img} src={searching} alt=""></img>
      </div>
      <div className={css.general_slider}>
        <h2 className={css.slider_heading}>Общая сводка</h2>
        <p className={css.publication_qty}>Найдено 4 221 вариантов</p>
        <SliderCarousel />
      </div>
      <div className={css.docs_list}>
        <h2 className={css.docs_heading}>Список документов</h2>
        <div className={css.docs_grid}>
          <div className={css.doc_block}>
            <div className={css.doc_toptitles}>
              <p className={css.doc_date}>13.09.2021</p>
              <p className={css.doc_source}>Комсомольсякая правда KP.RU</p>
            </div>
            <div className={css.doc_content}>
              <h4 className={css.doc_title}>
                Скиллфэктори - лучшая онлайн-школа для будущих айтишников
              </h4>
              <p className={css.doc_category}>Технические новости</p>
              <img src={mockimage} className={css.doc_img} alt=""></img>
              <p className={css.doc_text}>
                SkillFactory — школа для всех, кто хочет изменить свою карьеру и
                жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с
                4 континентов, самому взрослому студенту сейчас 86 лет.
                Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС,
                Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                Принципы SkillFactory: акцент на практике, забота о студентах и
                ориентир на трудоустройство. 80% обучения — выполнение
                упражнений и реальных проектов. Каждого студента поддерживают
                менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр
                помогает составить резюме, подготовиться к собеседованиям и
                познакомиться с IT-рекрутерами.
              </p>
            </div>
            <div className={css.doc_lowerpart}>
              <button className={css.doc_readbtn}>Читать в источнике</button>
              <p className={css.doc_words}>2543 слова</p>
            </div>
          </div>

          <div className={css.doc_block}>
            <div className={css.doc_toptitles}>
              <p className={css.doc_date}>13.09.2021</p>
              <p className={css.doc_source}>Комсомольсякая правда KP.RU</p>
            </div>
            <div className={css.doc_content}>
              <h4 className={css.doc_title}>
                Скиллфэктори - лучшая онлайн-школа для будущих айтишников
              </h4>
              <p className={css.doc_category}>Технические новости</p>
              <img src={mockimage} className={css.doc_img} alt=""></img>
              <p className={css.doc_text}>
                SkillFactory — школа для всех, кто хочет изменить свою карьеру и
                жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с
                4 континентов, самому взрослому студенту сейчас 86 лет.
                Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС,
                Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                Принципы SkillFactory: акцент на практике, забота о студентах и
                ориентир на трудоустройство. 80% обучения — выполнение
                упражнений и реальных проектов. Каждого студента поддерживают
                менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр
                помогает составить резюме, подготовиться к собеседованиям и
                познакомиться с IT-рекрутерами.
              </p>
            </div>
            <div className={css.doc_lowerpart}>
              <button className={css.doc_readbtn}>Читать в источнике</button>
              <p className={css.doc_words}>2543 слова</p>
            </div>
          </div>
        </div>
        <button className={css.docs_morebtn}>Показать больше</button>
      </div>
    </div>
  )
}
