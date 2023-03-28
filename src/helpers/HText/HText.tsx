import React from 'react'
import s from './HText.module.css';
type Props = {
    children:React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <button className={s.button}>{children}</button>
  )
}

export default HText