import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const HandleClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const countTotalFeedback1 = countTotalFeedback();
    return countTotalFeedback
      ? Math.round((good / countTotalFeedback1) * 100)
      : 0;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={HandleClick}
        ></FeedbackOptions>
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}

export { App };
