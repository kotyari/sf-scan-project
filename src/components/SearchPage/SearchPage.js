import React, { useRef, useState, useEffect } from 'react'
import css from './SearchPage.module.css'
import search from '../../images/search_image.png'
import dayjs from 'dayjs'

import validateInn from './validation'

export default function SearchPage() {
  // const [dataTypeStart, setDataTypeStart] = useState('text')
  // const [dataTypeEnd, setDataTypeEnd] = useState('text')

  const [innError, setInnError] = useState('') //текст ошибки в инпуте ИНН
  const [qtyError, setQtyError] = useState('') //текст ошибки в инпуте количества
  const [innValue, setInnValue] = useState('')
  const [qtyValue, setQtyValue] = useState('')
  const [tonalityValue, setTonalityValue] = useState('Любая')

  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [dateError, setDateError] = useState('')

  useEffect(() => {
    if (dateStart && dateEnd) {
      // dayjs(dateStart).format('DD-MM-YYYY')
      checkDate(dateStart, dateEnd)
    }
  }, [dateStart, dateEnd])

  const checkDate = (start, end) => {
    const secondsStart = new Date(start).getTime()
    const secondsEnd = new Date(end).getTime()
    const now = new Date().getTime()

    if (secondsStart > secondsEnd) {
      setDateError('Дата начала не может быть позже даты конца')
    } else if (secondsStart > now || secondsEnd > now) {
      setDateError('Дата не может быть в будущем времени')
    } else setDateError('')
  }

  const inputRefDate = useRef(null)

  const onChangeTonality = (e) => {
    setTonalityValue(e.target.value)
  }

  const onChangeInn = (e) => {
    setInnValue(e.target.value)

    const validationResponse = validateInn(e.target.value, {})
    setInnError(!validationResponse.result ? validationResponse.message : '')
  }

  const onChangeQty = (e) => {
    const qtyInput = e.target.value
    setQtyValue(qtyInput)
    checkQty(qtyInput)
  }

  const checkQty = (value) => {
    if (!value) {
      setQtyError('Обязательное поле')
    } else if (!Number.isInteger(Number(value))) {
      setQtyError('Введите целое число')
    } else if (value < 1) {
      setQtyError('Введите не менее 1')
    } else if (value > 1000) {
      setQtyError('Введите не более 1000')
    } else setQtyError('')
  }

  const submit = (e) => {
    e.preventDefault()
  }

  const isDisabled =
    dateStart &&
    dateEnd &&
    innValue &&
    qtyValue &&
    !innError &&
    !qtyError & !dateError

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
        <form className={css.search_form} onSubmit={submit}>
          <div className={css.form_left}>
            <label className={css.form_label}>
              ИНН компании*<br></br>
              <input
                className={innError ? css.form_input_err : css.form_input}
                placeholder="10 цифр"
                maxLength="10"
                onChange={onChangeInn}
              ></input>
              {innError && <p className={css.input_warning}>{innError}</p>}
            </label>
            <br></br>

            <label className={css.form_label}>
              Тональность<br></br>
              <select className={css.form_select} onChange={onChangeTonality}>
                <option>Любая</option>
                <option>Позитивная</option>
                <option>Негативная</option>
              </select>
            </label>
            <br></br>

            <label className={css.form_label}>
              Количество документов в выдаче*<br></br>
              <input
                type="number"
                className={qtyError ? css.form_input_err : css.form_input}
                placeholder="от 1 до 1000"
                min={0}
                max={1000}
                onChange={onChangeQty}
              ></input>
              {qtyError && <p className={css.input_warning}>{qtyError}</p>}
            </label>
            <br></br>

            <label className={css.form_label}>
              Диапазон поиска*<br></br>
              <label className={css.search_range_inputs}>
                <input
                  value={dateStart}
                  type="date"
                  // onFocus={() => setDataTypeStart('date')}
                  // onBlur={() => setDataTypeStart('text')}
                  className={dateError ? css.date_input_err : css.date_input}
                  placeholder="Дата начала"
                  max={new Date().toLocaleDateString('en-ca')}
                  onChange={(e) => {
                    setDateStart(e.target.value)
                    inputRefDate.current.focus()
                  }}
                ></input>
                <input
                  ref={inputRefDate}
                  value={dateEnd}
                  type="date"
                  // onFocus={() => setDataTypeEnd('date')}
                  // onBlur={() => setDataTypeEnd('text')}
                  className={dateError ? css.date_input_err : css.date_input}
                  placeholder="Дата конца"
                  max={new Date().toLocaleDateString('en-ca')}
                  onChange={(e) => {
                    setDateEnd(e.target.value)
                    checkDate(dateStart, dateEnd)
                    console.log(dateError)
                  }}
                ></input>
              </label>
              {dateError && (
                <p className={css.input_date_warning}>{dateError}</p>
              )}
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
            <button
              className={!isDisabled ? css.search_btn_off : css.search_btn}
              disabled={!isDisabled}
              type="submit"
            >
              Поиск
            </button>
            <p className={css.footnote}>* Обязательные к заполнению поля</p>
          </div>
        </form>
      </div>
      <img className={css.search_img} src={search} alt=""></img>
    </div>
  )
}
