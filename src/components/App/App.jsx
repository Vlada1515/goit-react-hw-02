import './App.css'
import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import Options from '../Options/Options'
import { useState, useEffect } from 'react' 

export function App() {
  const [countFeedback, setCountFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("countFeedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });


  useEffect(() => {
    window.localStorage.setItem("countFeedback", JSON.stringify(countFeedback));
  }, [countFeedback]);

  const updateFeedback = (type) => {
    setCountFeedback((prevCountFeedback) => {
      return {
        ...prevCountFeedback,
        [type]: prevCountFeedback[type] + 1,
      };
    });
  };
  
  const resetFeedback = () => {
    setCountFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  const { good, neutral, bad } = countFeedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification totalFeedback={totalFeedback} />
      ) : (
        <Feedback
          countFeedback={countFeedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;