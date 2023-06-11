import React from 'react'
import {filterbtn} from '../../constants'
import './FilterBtn.css'

const FilterBtn = ({filtterName, setFilterName}) => {
  return (
    <div className='container'>
        <div className="filterbtn">
          {
            filterbtn.map( item => <button key={item} onClick={() => setFilterName(item)} className = {`filterBtn-btn  ${filtterName === item ? 'filterActive' : ''}`} >{item}</button> )
          }
        </div>
    </div>
  )
}

export default FilterBtn