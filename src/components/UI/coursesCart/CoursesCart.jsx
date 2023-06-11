import React from 'react'
import './CoursesCart.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const CoursesCard = ({id, imgUrl, title, descr}) => {
  return (
    <div className='coursesCard'>
    <div className="coursesCard-img">
      <img src={imgUrl} alt={title} />
    </div>

    <div className='blogtext-info'>
      <p>12-mart, 2022</p>
      <p><RemoveRedEyeIcon/>99 000 000</p>
    </div>

      <div className='coursesCard-text'>
        <h3>
        {title}
        </h3>
          <p>
            {descr}
          </p>
      </div>

  </div>
  )
}

export default CoursesCard