import css from "./Feedback.module.css";

export function Feedback({
  countFeedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className='divider'>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p className={css.positiveFeedback}>
        Positive feedback: {positiveFeedback}%
      </p>
    </div>
  );
}

export default Feedback;