import React from 'react'
import {SectionWrapper,SectionHeadder} from'../../Component/index';
import { Link } from 'react-router-dom';
import './AdminHero.css'
import AdminIcon from '../../images/Adminlogo.jpeg'

function AdminHero() {
  return (
    <SectionWrapper>
    <div className='pro'>
    <Link to='/Adminprofile' className='main-pro' > <SectionHeadder> <img className='pro-img' src={AdminIcon} width="80" alt=""/> Admin Profile:{`  ${JSON.parse(window.sessionStorage["AdminInfo"]).username}`}</SectionHeadder></Link>
    </div>
    </SectionWrapper>
  )
}

export default AdminHero