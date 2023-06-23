import React, { useState } from 'react'
import css from './SearchPage.module.css'
import search from '../../images/search_image.png'

export default function SearchPage() {
  const [dataTypeStart, setDataTypeStart] = useState('text')
  const [dataTypeEnd, setDataTypeEnd] = useState('text')

  return (
    <div className={css.search_page}>
      <div className={css.form_wrapper}>
        <h2 className={css.form_heading}>
          Найдите необходимые данные в пару кликов.
        </h2>
        <h4 className={css.form_subtitle}>
          Задайте параметры поиска. <br></br> Чем больше заполните, тем точнее
          поиск
        </h4>
        <form className={css.search_form}>
          <div className={css.form_left}>
            <label className={css.form_label}>
              ИНН компании*<br></br>
              <input
                className={css.form_input}
                placeholder="10 цифр"
                maxlength="10"
              ></input>
            </label>
            <br></br>

            <label className={css.form_label}>
              Тональность<br></br>
              <select className={css.form_select}>
                <option>Любая</option>
                <option>Первая</option>
                <option>Вторая</option>
                <option>Третья</option>
              </select>
            </label>
            <br></br>

            <label className={css.form_label}>
              Количество документов в выдаче<br></br>
              <input
                type="number"
                className={css.form_input}
                placeholder="от 1 до 1000"
                min={0}
                max={1000}
              ></input>
            </label>
            <br></br>

            <label className={css.form_label}>
              Диапазон поиска*<br></br>
              <label className={css.search_range_inputs}>
                <input
                  type={dataTypeStart}
                  onFocus={() => setDataTypeStart('date')}
                  onBlur={() => setDataTypeStart('text')}
                  className={css.date_input}
                  placeholder="Дата начала"
                  max={new Date().toLocaleDateString('en-ca')}
                ></input>
                <input
                  type={dataTypeEnd}
                  onFocus={() => setDataTypeEnd('date')}
                  onBlur={() => setDataTypeEnd('text')}
                  className={css.date_input}
                  placeholder="Дата конца"
                  max={new Date().toLocaleDateString('en-ca')}
                ></input>
              </label>
            </label>
            <br></br>
          </div>
          <div className={css.form_right}>
            <input
              className={css.form_checkbox}
              type="checkbox"
              id="checkmaxp"
            ></input>
            <label htmlFor="checkmaxp" className={css.checkbox_label}>
              Признак максимальной полноты
            </label>
            <br></br>
            <input
              className={css.form_checkbox}
              type="checkbox"
              id="checkbusiness"
            ></input>
            <label htmlFor="checkbusiness" className={css.checkbox_label}>
              Упоминания в бизнес-контексте
            </label>
            <br></br>
            <input
              className={css.form_checkbox}
              type="checkbox"
              id="checkrole"
            ></input>
            <label htmlFor="checkrole" className={css.checkbox_label}>
              Главная роль в публикации
            </label>
            <br></br>
            <input
              className={css.form_checkbox}
              type="checkbox"
              id="checkrisk"
            ></input>
            <label htmlFor="checkrisk" className={css.checkbox_label}>
              Публикации только c риск-факторами
            </label>
            <br></br>
            <input
              className={css.form_checkbox}
              type="checkbox"
              id="checktech"
            ></input>
            <label htmlFor="checktech" className={css.checkbox_label}>
              Включать технические новости рынков
            </label>
            <br></br>
            <input
              className={css.form_checkbox}
              type="checkbox"
              id="checkcalendar"
            ></input>
            <label htmlFor="checkcalendar" className={css.checkbox_label}>
              Включать анонсы и календари
            </label>
            <br></br>
            <input
              className={css.form_checkbox}
              type="checkbox"
              id="checknews"
            ></input>
            <label htmlFor="checknews" className={css.checkbox_label}>
              Включать сводки новостей
            </label>
            <br></br>
            <button className={css.search_btn}>Поиск</button>
            <p className={css.footnote}>* Обязательные к заполнению поля</p>
          </div>
        </form>
      </div>
      <img className={css.search_img} src={search} alt=""></img>
    </div>
  )
}
