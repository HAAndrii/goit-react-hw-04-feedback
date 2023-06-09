import propTypes from 'prop-types';
import css from './Statistics.module.css';
import clsx from 'clsx';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={clsx(css.text, css.good)}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={clsx(css.text, css.bad)}>Bad: {bad}</p>
      <p className={css.text}>Total: {total()} </p>
      <p className={css.text}>Positive feedback: {positivePercentage()} %</p>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.func,
  positivePercentage: propTypes.func,
};

export default Statistics;
