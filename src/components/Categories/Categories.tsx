import { useEffect, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCategories, setCategoriesId } from '../../store/filterSlice/FilterSlice';
import { selectCategory, selectId, selectedStatus } from '../../store/filterSlice/selected';
import s from './Categories.module.css';

const Categories: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);
  const categoryId = useAppSelector(selectId);
  const status = useAppSelector(selectedStatus);

  useEffect(() => {
    const fetchCategorie = async () => {
      dispatch(fetchCategories());
    };
    fetchCategorie();
  }, [dispatch]);

  return (
    <div className={s.categories}>
      {status === 'error' ? (
        <div> Error </div>
      ) : (
        categories.map((categoryName: any, index: number) => (
          <button
            onClick={() => dispatch(setCategoriesId(categoryName))}
            key={index}
            className={categoryId === categoryName ? `${s.active}` : ''}>
            {' '}
            <span>{categoryName}</span>{' '}
          </button>
        ))
      )}
    </div>
  );
};

export default Categories;

//   fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(json => dispatch(setCategoryList(json)));
