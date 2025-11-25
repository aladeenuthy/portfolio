import {TfiGithub} from 'react-icons/tfi'
import Logo from '../images/logo.png'
import {AiFillTwitterCircle, AiFillMail} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md';
import { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
function Navbar() {
  const mobileMenuRef = useRef()
  const navigate = useNavigate()
  return (
    <div>
      <nav className='d-flex justify-content-between align-items-center' data-aos="fade-down">
        <div className='d-flex align-items-center desktop-nav'>
            <NavLink to='/'>
            <img src={Logo} alt='' width={48}  />
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? 'ms-3 me-3 highlighted' : 'ms-3 me-3'}>
                Projects
            </NavLink>
            <NavLink to='/services' className={({ isActive }) => isActive ? ' highlighted' : ''} >
                Services
            </NavLink>
          </div>
          <div className='d-flex align-items-center desktop-nav'>
          <a href='https://github.com/aladeenuthy'>
          <TfiGithub size={30} className="icons" title='github' />
          </a>
          <a  href='https://twitter.com/aladeen__uthy'>
          <AiFillTwitterCircle size={30} className="icons" title='twitter'/>
          </a>
          <a href='mailto:aladeenuthy@gmail.com'>
          <AiFillMail size={30} className="icons" title='mail'/>
          </a>
          </div>
          <GiHamburgerMenu size={30} className="icons mobile-nav" onClick={()=>{
      mobileMenuRef.current.style.transform = 'translate(0px)'
    }} />
    <NavLink to='/' className='mobile-nav'>
            <img src={Logo} alt='' width={48}className= 'mobile-nav icons'  />
      </NavLink>
          
      </nav>

<div id="mobile-menu"  ref={mobileMenuRef}>
		<div className='mb-5 d-flex justify-content-end mx-auto'>
    <MdClose size={40} className="icons" onClick={()=>{
      mobileMenuRef.current.style.transform = 'translate(-2000px)'
    }} />
    </div>
		<div className="d-flex flex-column align-items-center">
    <NavLink to='/projects' className={({ isActive }) => isActive ? 'mb-3 highlighted' : 'mb-3'} onClick={()=>{
      mobileMenuRef.current.style.transform = 'translate(-2000px)'
      navigate('/projects')
    }}>
                Projects
            </NavLink>
            <NavLink to='/services' className={({ isActive }) => isActive ? 'mb-3 highlighted' : 'mb-3'} onClick={()=>{
      mobileMenuRef.current.style.transform = 'translate(-2000px)'
      navigate('/services')
    }} >
                Services
            </NavLink>
      <div className='d-flex align-items-center'>
      <a href='https://github.com/aladeenuthy'>
          <TfiGithub size={30} className="icons" title='github' />
          </a>
          <a  href='https://twitter.com/aladeen__uthy'>
          <AiFillTwitterCircle size={30} className="icons" title='twitter'/>
          </a>
          <a href='mailto:aladeenuthy@gmail.com'>
          <AiFillMail size={30} className="icons" title='mail'/>
          </a>
      </div>
		</div>
	</div>
    </div>
   
  );
}

export default Navbar;
