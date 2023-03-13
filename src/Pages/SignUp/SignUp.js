import './SignUp.css'
import { Header, Form ,InputField,Btn} from '../../Component/index'
import { Link } from 'react-router-dom';
const SignUp = () => {


  return (
    <>
    <Header/>
    <Form id="signUp">
      <h1>sign up</h1>
          <InputField type="text" Ptext=" Enter user name" id="NameField"/>
          <InputField type="email" Ptext="Enter your Email" id="EmailField"/>
          <InputField type="password" Ptext="Enter your password" id="PasswordField"/>
          <Link to=""><Btn name="signUp">create</Btn></Link>
        <p class="message">Already sign up? <Link to="/login">log in</Link></p>
        <span id='forSeverError' className='errorSpan' ></span>
        </Form>
        </>
  );
}

export default SignUp;