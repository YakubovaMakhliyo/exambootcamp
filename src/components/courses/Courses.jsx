import React from 'react'
import './Courses.css'
import axios from 'axios'
import CoursesCard from '../UI/coursesCart/CoursesCart'

const Courses = ({ cardData,setCardData,filtterName} ) => {
  const [showMore, setShowMore]=React.useState(6)
  const [ showBtn , setShowBtn ] = React.useState(true)
  const  showMoreHandler = () => {
    setShowMore(20)
    setShowBtn(false)
   }

   const showLesHandler = () => {
    setShowMore(6)
    setShowBtn(true)
   }
  const getData= async ( )=> {
    const res =await axios.get('http://localhost:3001/barchasi')
    
    const data=res.data
    setCardData(data)
  }
React.useEffect(()=>{   
  getData()
}, [])
  return (
  <div className='container'>
  <div className='courses'>
    
    {cardData.filter(item=>item.type===filtterName|| item.extraType===filtterName).map((item, idx)=><CoursesCard key={idx} {...item}/>).slice(0,showMore)}
  </div>
  <div className='btn-more'>
  {
      showBtn ? 
       <button onClick={() => showMoreHandler()} className='showmore-btn'>
        Ko‘proq ko‘rsatish
      </button>
      : 
      <button onClick={() => showLesHandler()} className='showmore-btn'>
         Kamroq ko‘rsatish
     </button>

      }
  </div>
 
  </div>

  
  )
}

export default Courses