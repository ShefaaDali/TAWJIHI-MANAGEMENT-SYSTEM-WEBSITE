import './Hero.css';
import heroImg from '../../images/Picture1.jpg';

const Hero = () => {
  return (
    <div className='hero-main'>
      <div >
        <img className='hero-main-img' src={heroImg} alt=""/>
      </div>
        <div className='hero-text'>
          <h1>The purpose of our system</h1><br/>
          <h5>is to provide questions prepared by teachers to test the students knowledge of<br/>
          the subject through a system that offers flexibility for the student to choose <br/>
          the number of questions, exam time, and subject and obtain instant results. And <br/>
          provide student with statistical dashboard for the analysis his result for each <br/>
          particular exam.</h5>
        </div> 
    </div>
  )
}

export default Hero