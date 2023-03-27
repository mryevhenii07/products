import React, { useEffect, useState } from 'react'
import s from './Categories.module.css';
type Props = {
  categoryId:string
  onClickCategory:(value:string)=>void
}

// const categories = ["All","Smartphones","laptops","Fragrances","Skincare","Groceries","Home-decoration","hhggghghhhggghghhg"]

const Categories = ({categoryId,onClickCategory}: Props) => {
const [categories,setCategories] =useState([])


useEffect(()=>{
  fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(json => setCategories(json));
},[])


  // const [activeIndex,setActiveIndex] = useState(0)
// console.log(categoryId);
// console.log(categories);

  // const activeCategory = (index:number)=>{
  //   setActiveIndex(index)
  // }
  return (
    <ul className={s.categories}>
    {categories.map((categoryName,index) => 
  <li onClick={()=>onClickCategory(categoryName)} key={index} className={categoryId === categoryName ? `${s.active}` : ""}>
    
  {categoryName} </li>)}

    </ul>
  )
}

export default Categories
// import React, { useState } from 'react'
// import s from './Categories.module.css';
// type Props = {
//   categoryId:number
// }

// const categories = ["All","Smartphones","laptops","Fragrances","Skincare","Groceries","Home-decoration"]

// const Categories = ({categoryId}: Props) => {
//   const [activeIndex,setActiveIndex] = useState(0)
// console.log(categoryId);

//   const activeCategory = (index:number)=>{
//     setActiveIndex(index)
//   }
//   return (
//     <ul className={s.categories}>
//     {categories.map((category,index) => 
//   <li onClick={()=>activeCategory(index)} key={index} className={activeIndex === index ? `${s.active}` : ""}>
    
//   {category} </li>)}

//     </ul>
//   )
// }

// export default Categories