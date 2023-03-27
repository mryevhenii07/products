import {FC} from 'react'
import { GoSearch } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

import {useAppSelector,useAppDispatch} from '../../hooks/hooks';
import {selectedValue} from '../../store/filterSlice/selected';
import {searchValueChange} from '../../store/filterSlice/FilterSlice';
import s from './SearchProduct.module.css';

const SearchProduct:FC = () => {
  const searchValue = useAppSelector(selectedValue)
  const dispatch = useAppDispatch()

  return (
    <div className={s.root} >
        <GoSearch className={s.icon} />
            <input
            className={s.input} 
            placeholder='Пошук товару'
            value={searchValue} 
            onChange={(e)=> dispatch(searchValueChange(e.target.value)) } 
            />
          {searchValue && <GrClose onClick={()=> dispatch(searchValueChange(""))}  className={s.clearIcon} />}
    </div>
  )
}

export default SearchProduct