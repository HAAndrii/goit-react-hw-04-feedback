import propTypes from 'prop-types';
import css from './Section.module.css';
// import { Children } from 'react';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
