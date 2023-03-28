import React from 'react'
import { Link } from 'react-router-dom'
import {MdDeleteOutline,MdOutlineShoppingCart} from 'react-icons/md';

import s from './CartProducts.module.css';
import CartItem from './CartItem/CartItem';


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
                    Basket
                </h2>
                        <div  className={s.cartClear}>
                        {/* <div onClick={handleClearItem} className="cart__clear"> */}
                        <MdDeleteOutline size={18}/>
                            <span >Clear the basket</span>
                        </div>
                    </div>
                    <div className="content__items">
                        <CartItem/>
                        <CartItem/>
                    {/* <div className="content__items">
                        {items.map((item: any) => (<CartItem {...item} key={item.id}/>
                    ))} */}
                    </div>
                    <div className="cart__bottom">
                        <div className={s.cartBottomDetails}>
                            <div>
                                Total Products: <b>1 шт.</b>{' '}
                                {/* Всього піц: <b>{totalCount} шт.</b>{' '} */}
                            </div>
                            <div>
                            Order amount: <b>1000 грн</b>{' '}
                                {/* Сума замовлення: <b>{totalPrice} грн</b>{' '} */}
                            </div>
                        </div>
                        <div className={s.cartWrapBottomBtn}>
                                <Link to="/products" className={s.cartBackBtn}> <span>Повернутися назад</span> </Link>

<button className={s.cartPayNowP}>
    <span  className={s.cartPayNowS}></span>
    <span  className={s.cartPayNowE}></span>
    <span  className={`${s.cartPayNowF} ${s.text}`}>
    Pay Now
    </span>
</button>
                        </div>
                    </div>
                </div>
    )
}

export default Cart