import './SecoundHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logoo.jpg';

const SecoundHeader = () => {
  return (
    <div className="navbar navbar-expand-md bg-light navbar-light system-navbar">
    <div className="container">
        <Link to="/" className="navbar-brand"><img src={logo} width="50" hight="22" alt="" /> Tawjihi Managment System Website {""} </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link to="/" className="nav-link"> <button onClick={()=>window.sessionStorage.clear()} className='but-main'><h6> Log Out </h6></button></Link></li>
            </ul>
        </div>
    </div>
</div>
  );
};
export default SecoundHeader;