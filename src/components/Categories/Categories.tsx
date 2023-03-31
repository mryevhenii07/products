import { useEffect, FC } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCategoryList, setCategoriesId } from '../../store/filterSlice/FilterSlice';
import { selectCategory, selectId } from '../../store/filterSlice/selected';
import s from './Categories.module.css';

const Categories: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);
  const categoryId = useAppSelector(selectId);

  useEffect(() => {
    const fetchCategorie = async () => {
      try {
        const { data } = await axios.get('https://dummyjson.com/products/categories');
        dispatch(setCategoryList(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategorie();
  }, [dispatch]);

  return (
    <div className={s.categories}>
      {categories.map((categoryName: any, index: number) => (
        <button
          onClick={() => dispatch(setCategoriesId(categoryName))}
          key={index}
          className={categoryId === categoryName ? `${s.active}` : ''}>
          {' '}
          <span>{categoryName}</span>{' '}
        </button>
      ))}
    </div>
  );
};

export default Categories;

//   fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(json => dispatch(setCategoryList(json)));
