import React from 'react'
import "./Navbar.css" 
import { sidebar } from '../../constants';
import logo from "../../assets/svg/Najot Ta'lim logo onlayn 1.png"
import MenuIcon from '@mui/icons-material/Menu';
import fillIcon from "../../assets/svg/najotlogo.svg"
import CloseIcon from '@mui/icons-material/Close';
const Navbar = ({setSHowRegister}) => {
  const [sideBar , setSideBar] = React.useState(false)
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
          <div className="navbar-fiil">
            <img src={fillIcon} alt="fiil" />
            <p className='filt'>
            Sayt test rejimida ishlamoqda!
            </p>
          </div>
      </div>

      <div className="navbar-right">
        <button onClick={()=>setSHowRegister(true)} className='navbar-btn'>
          Kirish
        </button>

        <button onClick={() => setSideBar(!sideBar)} className='navbar-icon__btn'>
          <MenuIcon sx={{fontSize:'35px'}}/>
        </button>
      </div>

      <div className={sideBar ? 'side-menu active' : 'side-menu'} >
            <CloseIcon className='close-icon' onClick={() => setSideBar(!sideBar)} sx={{cursor:'pointer'}} />

          <ul className='sideBarNAv'>
            {sidebar.map((item, idx) => <li className='hamburgerLinks' key={idx}> {item.title} </li>)}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar