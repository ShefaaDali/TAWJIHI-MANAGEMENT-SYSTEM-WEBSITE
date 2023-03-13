import './SectionWrapper.css'

const SectionWrapper = (props) => {
  return (
 
    <div className='subject-wrapper'>
      {props.children}
      </div>
  )
}

export default SectionWrapper