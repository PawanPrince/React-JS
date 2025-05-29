import React from 'react'
import style from "./Card.module.css"
import Data from './Data'

const Card = () => {
  return (
    <div id={style.cardcontainer}>
        <h1 id={style.head}>Hello</h1>

        <p>Lorem ipsum dolor sit amet.</p>

        <Data/>
    </div>
  )
}

export default Card;