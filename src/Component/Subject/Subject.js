import './Subject.css'

function Subject(props) {
  return (
    <div className='Curriculum-item' key={props.i}>       
         <img className= 'subject'src={props.image} alt="" />
            <div className='curriculum-item-content'>
               <h6 className='curriculum-item-title'> 
               {props.title} <br />
                  <span>{props.category}</span>
                  
                   </h6>
                     </div>
                       </div>
                          

  )
}

export default Subject