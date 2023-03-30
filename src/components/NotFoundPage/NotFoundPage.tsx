import React from 'react';
import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';
type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <section className={s.pageFour}>
      <div className={s.fourZeroFourBg}>
        <h1 className="text-center ">404</h1>
      </div>

      <div className={s.contantBoxFour}>
        <h3 className="h2">Look like you're lost</h3>

        <p>the page you are looking for not avaible!</p>

        <Link to="products" className={s.link}>
          <button className={s.button}>Go to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
