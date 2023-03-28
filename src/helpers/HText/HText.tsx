import React from 'react';
import s from './HText.module.css';
type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className={s.button}>{children}</h1>;
};

export default HText;
