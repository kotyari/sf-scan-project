import React from 'react'

import logo from '../../images/header_logo.png'
import slash from '../../images/header_slash.png'
import userpic from '../../images/userpic.png'

import css from './Header.module.css'

export default function Header() {
  const userAuth = true
  const companiesUsedCounter = 34
  const companiesLimitCounter = 100

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
          <img width={141} height={88} src={logo} alt="Скан"></img>
        </div>
        <nav className={css.nav}>
          <p className={css.nav_p}>Главная</p>
          <p className={css.nav_p}>Тарифы</p>
          <p className={css.nav_p}>FAQ</p>
        </nav>

        {(userAuth && (
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
                <p className={css.user_name}> Алексей А.</p>
                <p className={css.logout_text}>Выйти</p>
              </div>
              <img className={css.user_pic} src={userpic} alt=""></img>
            </div>
          </div>
        )) || (
          <div className={css.user_panel_off}>
            <button className={css.signup}>Зарегистрироваться</button>
            <img className={css.slash} src={slash} alt="/"></img>
            <button className={css.login}>Войти</button>
          </div>
        )}
      </div>
    </header>
  )
}
