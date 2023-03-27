import React, { useState } from 'react'
import s from './Sort.module.css';
type Props = {}

const Sort = (props: Props) => {
  const[selected,setSelected]=useState(0)
  const [open,setOpen]=useState(false)
  const list = ["Популярністю","Ціною","Aлфавітом"]
  const sortName =list[selected]

const onSelected = (index:number)=> {
  setSelected(index)
  setOpen(false)
}

  return (
    <div  className={s.sort}>
    {/* <div ref={sortRef} className="sort"> */}
      <div>
        <b >Сортування за: </b>
        <span style={{color:"blue",cursor:"pointer",fontWeight:"500"}} onClick={()=> setOpen(!open)}>{sortName}</span>
    </div>
    {open && <ul className={s.listSort}>
          {list.map((name,index) => 
          <li key={index} className={selected === index ? `${s.active}` : ""}onClick={()=> onSelected(index) } >{name} </li>)}  
        </ul>
      }
  </div>
  )
}

export default Sort