import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import clsx from 'clsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(el => {
        return (
          <button
            className={clsx(css.btn, css[el])}
            onClick={onLeaveFeedback}
            key={el}
            type="button"
            name={el}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
  onLeaveFeedback: propTypes.func,
};

export default FeedbackOptions;
