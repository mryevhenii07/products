import {useState,FC} from 'react'
import {FiTruck,FiShoppingCart} from 'react-icons/fi';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import s from './ItemProduct.module.css';
import { MyProduct } from '../../types/interface';

interface Props extends MyProduct {

}

const ItemProduct:FC<Props> = ({brand,price,rating,stock,title,thumbnail,id,description,discountPercentage}) => {
    const [productCount,setProductCount]= useState(0)
    const discount = Math.floor(((price / 100 )* discountPercentage) + price) 
    const discountFixed = Number(discount.toFixed()).toLocaleString() 
    const priceLocal = price.toLocaleString()

return (
    <div key={id} className={s.wrapper}>
        <div className={s.wrapImg}>
            <img src={thumbnail} alt="img"  width="100%" height={200}/>
        </div>
        <div className={s.wrapInfo}>
            <p className={s.wrapBlandTitle}>{brand} {title}</p> 
                <div className={s.description}>{description}</div>
                    <div> 
                        <Box
                            sx={{
                            width: 300,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                    <Rating
                            name="text-feedback"
                            value={rating}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                    <div className={s.wrapStock}>{stock} відгуків</div>
                        </Box>
                    </div>
    <div className={s.wrapPriceBtn}>
        <div className={s.priceWrap}>
            {discountFixed === priceLocal ? <div className={s.sale}>Хочеш знижку?</div> : <div className={s.discount}>{ discountFixed }₴</div>}
            
            <div className={s.price}>{priceLocal}₴</div>
        </div> 
    <button onClick={()=> setProductCount(productCount + 1)} className={s.addProduct}><FiShoppingCart className={s.iconCart}/> {productCount ?  <span className={s.productCount} >{productCount}</span> : ""}   </button>
        </div>
            <div className={s.wrapCart}> 
                <div className={s.wrapTruck}> <div>Готовий до відправлення</div>  <FiTruck  className={s.IconTruck}/></div> 
            </div>
        </div>
    </div>
)
}

export default ItemProduct