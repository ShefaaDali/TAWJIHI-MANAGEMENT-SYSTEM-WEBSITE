import './Btn.css'
import   SingupLogin from '../../Controller/SingupLogin'
function Btn(props) {
  return (
    <button className='myBtn'onClick= {()=>{SingupLogin(props.name)}}>{props.children}</button>
  )
}

export default Btn