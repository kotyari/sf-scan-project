import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetAuth } from '../../store/auth'
import { getLimits } from '../../api'

import logo from '../../images/header_logo.png'
import slash from '../../images/header_slash.png'
import userpic from '../../images/userpic.png'
import mobmenu from '../../images/mobmenu.png'

import { useHistory } from 'react-router-dom'

import css from './Header.module.css'

export default function Header() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.authSlice)
  const companiesUsedCounter = 34
  const companiesLimitCounter = 100
  let history = useHistory()

  const goMain = () => {
    history.push('/')
  }

  const exit = () => {
    dispatch(resetAuth())
  }

  const goAuth = () => {
    history.push('/auth')
  }

  const goMock = () => {
    history.push('/mock')
  }

  // getLimits()
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  return (
    <header className={css.header}>
      <div className={css.container}>
        <img className={css.logo} src={logo} alt="Скан"></img>
        <nav className={css.nav}>
          <p className={css.nav_p} onClick={goMain}>
            Главная
          </p>
          <p className={css.nav_p} onClick={goMock}>
            Тарифы
          </p>
          <p className={css.nav_p} onClick={goMock}>
            FAQ
          </p>
        </nav>

        {(data.accessToken && (
          <div className={css.user_panel_on}>
            <div className={css.user_stats}>
              <div className={css.companies_used}>
                <p className={css.cu_text}>Использовано компаний </p>
                <p className={css.cu_counter}>{companiesUsedCounter}</p>
              </div>
              <div className={css.companies_limit}>
                <p className={css.cl_text}>Лимит по компаниям</p>
                <p className={css.cl_counter}>{companiesLimitCounter}</p>
              </div>
            </div>
            <div className={css.user_profile}>
              <div className={css.user_profile_text}>
                <p className={css.user_name} onClick={goMock}>
                  {' '}
                  Алексей А.
                </p>
                <p className={css.logout_text} onClick={exit}>
                  Выйти
                </p>
              </div>
              <img
                className={css.user_pic}
                src={userpic}
                alt=""
                onClick={goMock}
              ></img>
            </div>
          </div>
        )) || (
          <div className={css.user_panel_off}>
            <button className={css.signup} onClick={goMock}>
              Зарегистрироваться
            </button>
            <img className={css.slash} src={slash} alt="/"></img>
            <button className={css.login} onClick={goAuth}>
              Войти
            </button>
          </div>
        )}
        <img src={mobmenu} className={css.mobile_menu} />
      </div>
    </header>
  )
}
