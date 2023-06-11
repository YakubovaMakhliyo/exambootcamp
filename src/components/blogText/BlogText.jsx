import React from 'react'
import './BlogText.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const BlogText = ({filtterName}) => {

  return (
    <div className="container">
    <div className='blogtext'>
      <div className='blogtext-info'>
        <p>12-mart, 2022</p>
        <p><RemoveRedEyeIcon/>99 000 000</p>
      </div>
        <h1>
        Natijadan kelib chiqqan holda: 3 ta kontseptsiya, o‘z ichiga kerak bo‘lgan metodist
        </h1>

        <div className='blogtext-bottom'>
          <p>
          Muallif:<b>Shohruh Boymurodov</b>
          </p>
          <button className='blogtext-btn'>
          {filtterName}
          </button>

        </div>

    </div>
    </div>
  )
}

export default BlogText