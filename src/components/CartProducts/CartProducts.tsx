import React from 'react'
import { Link } from 'react-router-dom'
import {MdDeleteOutline,MdOutlineShoppingCart} from 'react-icons/md';

import s from './CartProducts.module.css';
import CartItem from './CartItem/CartItem';
// import { useSelector,useDispatch } from 'react-redux'
// import {clearItems} from '../redux/slices/cartSlice'
// import {RootState} from '../redux/store';

// import CartItem from '../components/CartItem/CartItem'
// import CartEmpty from '../components/CartEmpty/CartEmpty'


const Cart:React.FC = () => {  
    // const dispatch = useDispatch()
    // const {totalPrice,items}=useSelector((state:RootState) => state.cart)
    // const totalCount = items.reduce((sum:number,obj)=> (obj.count || 0) + sum,0)
    
    // const handleClearItem =()=>{
    //     if(window.confirm("Ви впевнені, що хочете видалити?")){
    //         dispatch(clearItems()) 
    //     }
    // }

    // if(!totalPrice){
    //     return  <CartEmpty/>
    // }
    return (
        <div className={s.cart}>

                    <div className={s.cartTop}>
                        <h2 >
                            <MdOutlineShoppingCart/>
                            Кошик
                        </h2>
                        <div  className={s.cartClear}>
                        {/* <div onClick={handleClearItem} className="cart__clear"> */}
                        <MdDeleteOutline size={18}/>
                            <span >Очистити корзину</span>
                        </div>
                    </div>

                    <div className="content__items">
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                    {/* <div className="content__items">
                        {items.map((item: any) => (<CartItem {...item} key={item.id}/>
                    ))} */}
                    </div>
                    <div className="cart__bottom">
                        <div className={s.cartBottomDetails}>
                            <div>
                                {' '}
                                Всього піц: <b>1 шт.</b>{' '}
                                {/* Всього піц: <b>{totalCount} шт.</b>{' '} */}
                            </div>
                            <div>
                                {' '}
                                Сума замовлення: <b>1000 грн</b>{' '}
                                {/* Сума замовлення: <b>{totalPrice} грн</b>{' '} */}
                            </div>
                        </div>
                        <div className={s.cartWrapBottomBtn}>
                                <Link to="/products" className={s.cartBackBtn}>Повернутися назад</Link>
                            <div className={s.cartPayNow}>Оплатити зараз</div>
                        </div>
                    </div>
                </div>
          
      
    )
}

export default Cart