import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={css.Notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
