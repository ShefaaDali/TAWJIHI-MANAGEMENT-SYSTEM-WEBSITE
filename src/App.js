import "./App.css";
import {Container, Footer} from "./Component/index";
import {Login,SignUp,Home, Profile,Quiz,AdminProfile,AdminPage} from './Pages/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/quiz/:CurId" element={<Quiz/>}/>
            <Route path="/Adminprofile" element={<AdminProfile/>}/>
            <Route path="/AdminPage/:CurId" element={<AdminPage/>}/>
            </Routes>
        </Container>
        <Footer/>
      </Router>
    </>
  )
}
export default App;
