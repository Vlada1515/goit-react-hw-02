import './App.css'
import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import Options from '../Options/Options'
import { useState, useEffect } from 'react' 

function App() {
    const [values, setValues] = useState(() => {
        const savedValues = window.localStorage.getItem("saved-values");
        if (savedValues !== null) {
            return JSON.parse(savedValues);
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });

    const { good, neutral, bad } = values;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100);
    
     const updateFeedback = (type, value = null) => {
    setValues((prevCountFeedback) => {
      if (value === null) {
        return {
          ...prevCountFeedback,
          [type]: prevCountFeedback[type] + 1,
        };
      } else {
        return {
          ...prevCountFeedback,
          [type]: value,
        };
      }
    });
     };
    
 useEffect(() => {
    localStorage.setItem("countFeedback", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification totalFeedback={totalFeedback} />
      ) : (
        <Feedback
          countFeedback={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
