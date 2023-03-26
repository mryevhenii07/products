import React, { useState } from 'react'
import s from './Categories.module.css';
type Props = {}

const categories = ["All","Smartphones","laptops","Fragrances","Skincare","Groceries","Home-decoration"]

const Categories = (props: Props) => {
  const [activeIndex,setActiveIndex] = useState(0)

  const activeCategory = (index:number)=>{
    setActiveIndex(index)
  }
  return (
    <ul className={s.categories}>
{categories.map((category,index) => 
<li onClick={()=>activeCategory(index)} key={index} className={activeIndex === index ? `${s.active}` : ""}>
  {category} </li>)}

    </ul>
  )
}

export default Categories