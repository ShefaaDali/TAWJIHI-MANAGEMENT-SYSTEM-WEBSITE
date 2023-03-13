import "./Choice.css";
import { ChoiceHandler } from "../../Controller/manageQuiz";

function Choice(props) {
  return (
    <>
      <input
        type="radio"
        name={props.questionNumber}
        value={props.choiceText}
        id={props.choiceText}
        key={props.i}
        onClick={(e) => ChoiceHandler(e)}
      />
       
      <label for={props.choiceText}>{`${String.fromCharCode(65 + props.i)}. ${
        props.choiceText
      }`}</label>
      <br></br>
    </>
  );
}

export default Choice;
