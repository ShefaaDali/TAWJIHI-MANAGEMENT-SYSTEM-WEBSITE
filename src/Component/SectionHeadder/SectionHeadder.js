import './SectionHeadder.css'

const SectionHeadder = (props) => {
  return (
    <div className='section-headder'>
 
        <h4>{props.children}</h4>
</div>
  )
}

export default SectionHeadder