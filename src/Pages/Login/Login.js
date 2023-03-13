import './Login.css'
import { Header,Form ,InputField,Btn} from '../../Component/index'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
        <Header/>
        <Form id="login">
          <h1>Log in</h1>
          <InputField type="text" Ptext=" Enter user name" id="NameField" />
          <InputField type="password" Ptext="Enter your password"id="PasswordField"/>
          <Link ><Btn name="logIn">Login</Btn></Link>
        <p class="message">Not Registered? <Link to="/signup">sign up</Link></p>
        <span id='forSeverError' className='errorSpan' ></span>
        </Form>
        </>
  );
}

export default Login