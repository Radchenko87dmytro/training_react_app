import React from 'react'
import { menu } from './menu'

import styles from "./Header.module.scss"


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="https://cdn.pixabay.com/photo/2021/12/09/19/01/globe-6858907__340.jpg" alt="" height="115" />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, idx)=>(  //idx - index potocznego elementu
             <li key={`menu item ${idx}`}>  {/*ma byc unikalny klucz, tutaj indeks ${idx}*/}
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
          
        </ul>
        <div className={styles.buttons}>
           <button className={styles.login_button}>Login</button> 
          <button className={styles.sign_up_button}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Header