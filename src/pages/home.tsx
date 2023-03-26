import React from 'react'
import Categories from '../components/Categories/Categories';
import ListProduct from '../components/ListProduct/ListProduct';
import Sort from '../components/Sort/Sort';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Categories/>
      <Sort/>
        <ListProduct/>
        
    </div>
  )
}

export default Home