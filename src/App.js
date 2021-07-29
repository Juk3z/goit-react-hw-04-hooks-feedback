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
      setGood(good + 1);
    };

    if (stateName === 'neutral') {
      setNeutral(neutral + 1);
    };

    if (stateName === 'bad') {
      setBad(bad + 1);
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
    const positiveScore = good;
    const percentage = (100 / total) * positiveScore;
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
            total={countTotalFeedBack()}
            positivePercentage={countPositiveFeedbackPercentage(totalScores)}
          />
        }
      </Section>
    </>
  );
}

export default App;
