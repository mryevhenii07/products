import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import MyFormValues from '../../../types/interface';
import s from './NewItem.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { removeNewProduct } from '../../../store/createFormSlice/createFormSlice';

interface PropsItem extends MyFormValues {}

const NewItem: FC<PropsItem> = ({ yearOfPublication, name, author, rating, id }) => {
  const value = Number(rating);
  const dispatch = useAppDispatch();
  return (
    <li className={s.list}>
      <div>{name}</div>
      <div>{author}</div>
      <div>{yearOfPublication}</div>
      <div>
        <Box
          sx={{
            width: 100,
            display: 'flex',
            alignItems: 'center',
          }}>
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
        </Box>{' '}
      </div>

      <span onClick={() => dispatch(removeNewProduct(id))} className={s.icon}>
        <AiOutlineClose />
      </span>
    </li>
  );
};

export default NewItem;
