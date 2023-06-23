import React from 'react'
import css from './MainBanner.module.css'
import banner from '../../../images/banner_image.png'

export default function MainBanner() {
  return (
    <div className={css.main_banner}>
      <div className={css.panel_about}>
        <h1 className={css.heading_about}>
          сервис по поиску публикаций <br></br> о компании <br></br> по его ИНН
        </h1>
        <h3 className={css.text_about}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </h3>
        <button className={css.button_request}>Запросить данные</button>
      </div>
      <img className={css.banner_img} src={banner} alt=""></img>
    </div>
  )
}
