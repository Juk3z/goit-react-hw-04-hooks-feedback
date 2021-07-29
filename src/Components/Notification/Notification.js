import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p>{message}</p>;
};

Notification.defaultProps = {
  message: 'empty message',
};
Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
