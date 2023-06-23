import React from 'react'
import css from './MainAuth.module.css'

import characters from '../../images/characters.png'
import lock from '../../images/lock.png'
import g_auth from '../../images/google_auth.png'
import f_auth from '../../images/facebook_auth.png'
import y_auth from '../../images/yandex_auth.png'

export default function MainAuth() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <div className={css.caption_block}>
          <h1 className={css.heading}>
            Для оформления подписки <br></br> на тариф, необходимо
            авторизоваться.
          </h1>
          <img
            className={css.characters_img}
            src={characters}
            alt="Два человека и ключ"
          ></img>
        </div>
        <div className={css.form_container}>
          <div className={css.form_panel}>
            <div className={css.signup_change_block}>
              <button className={css.login_btn}>Войти</button>
              <button className={css.signup_btn}>Зарегистрироваться</button>
            </div>

            <form className={css.form}>
              <label className={css.label}>Логин или номер телефона:</label>
              <input className={css.form_input} type="text"></input>
              <label className={css.label}>Пароль:</label>
              <input className={css.form_input} type="password"></input>
              <button className={css.main_btn}>Войти</button>
              <button className={css.restore_pass_btn}>
                Восстановить пароль
              </button>
              <div className={css.alt_auth}>
                <label className={css.label}>Войти через:</label>
                <div className={css.auth_services}>
                  <img
                    className={css.alt_auth_img}
                    src={g_auth}
                    alt="google"
                  ></img>
                  <img
                    className={css.alt_auth_img}
                    src={f_auth}
                    alt="facebook"
                  ></img>
                  <img
                    className={css.alt_auth_img}
                    src={y_auth}
                    alt="yandex"
                  ></img>
                </div>
              </div>
            </form>
          </div>
          <img className={css.lock_img} src={lock} alt=""></img>
        </div>
      </div>
    </main>
  )
}
