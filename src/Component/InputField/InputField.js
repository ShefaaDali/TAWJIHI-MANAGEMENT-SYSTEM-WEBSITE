import './InputField.css';

function InputField(props) {
  return (
    <>
    <input className='inputField' type={props.type} placeholder={props.Ptext} id={props.id}/>
    <span className='errorSpan' id={"span"+props.id}></span>
    </>
  )
}

export default InputField;