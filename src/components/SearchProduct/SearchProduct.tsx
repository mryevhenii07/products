import {FC,useCallback,useRef, useState} from 'react'
import _debounce from 'lodash.debounce';
import { GoSearch } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

import {useAppDispatch} from '../../hooks/hooks';
import {setSearchChange} from '../../store/filterSlice/FilterSlice';
import s from './SearchProduct.module.css';

const SearchProduct:FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

    const onClickClear =()=>{
      dispatch(setSearchChange(""));
      setValue('');
      inputRef.current?.focus()
    }

    const updateSearchValue = useCallback(
      _debounce((str: string) => {
        dispatch(setSearchChange(str));
      }, 250),
      [],
    );

      const handleChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
      setValue(e.target.value);
      updateSearchValue(e.target.value);
    }

  return (
    <div className={s.root} >
        <GoSearch className={s.icon} />
            <input
                  ref={inputRef}            
                  className={s.input} 
                  placeholder='Product search...'
                  value={value} 
                  onChange={handleChangeInput } 
            />
          {value && <GrClose onClick={onClickClear}  className={s.clearIcon} />}
    </div>
  )
}

export default SearchProduct