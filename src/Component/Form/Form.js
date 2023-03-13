import './Form.css'
function Form(props) {
  return (
    <div className="form" id={props.id}>
    <form>
        {props.children}
        </form>
    </div>
  )
}

export default Form