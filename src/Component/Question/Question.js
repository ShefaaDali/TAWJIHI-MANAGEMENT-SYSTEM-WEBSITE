import './Question.css'

function Question(props) {
  return (
    <div className="question"  id={`Q${props.i}`}>
          <p>{`${props.i+1}. ${props.questionText}`}</p>
          {props.children}
          
          <span className='review'></span></div>
  )
}

export default Question