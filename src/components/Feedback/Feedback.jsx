const Feedback = ({value, totalfeedback, positivefeedback}) => {
    return (
      <div className='divider'>
      <p>Good: {value.good}</p>
            <p>Neutral: {value.neutral}</p>
            <p>Bad: {value.bad}</p>
        <p>Total: {totalfeedback}</p>
                <p>Positive: {positivefeedback}%</p>
        </div>
      
);
}
   
export default Feedback;