import { useState } from 'react';
import FeedbackOptions from './Components/Feedback/';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandle = (evt) => {
    const stateName = evt.target.textContent;
    if (stateName === 'good') {
      setGood(prev => prev + 1);
    };

    if (stateName === 'neutral') {
      setNeutral(prev => prev + 1);
    };

    if (stateName === 'bad') {
      setBad(prev => prev + 1);
    };
  };

  const countTotalFeedBack = () => {
    const allScores = [good, neutral, bad];
    return allScores.reduce((acc, item) => (acc += item), 0);
  };

  const countPositiveFeedbackPercentage = total => {
    if (total === 0) {
      return 0;
    }
    const percentage = (100 / total) * good;
    return Math.floor(percentage);
  };

  const totalScores = countTotalFeedBack();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={clickHandle}
        />
      </Section>

      <Section title="Statistics">
        {!totalScores
          ?
          <Notification message="No feedback given" />
          :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalScores}
            positivePercentage={countPositiveFeedbackPercentage(totalScores)}
          />
        }
      </Section>
    </>
  );
}

export default App;
