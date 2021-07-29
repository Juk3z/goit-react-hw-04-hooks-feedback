import styles from './styles.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {

  const generateId = () => {
    return Math.floor(Math.random() * 10000) + 1;
  };

  const buttonNames = Object.keys(options);
  return (
    <>
      {buttonNames.map(item => (
        <button
          className={styles.btn}
          key={generateId()}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
