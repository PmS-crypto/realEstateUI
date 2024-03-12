import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='left'>
        <Link href="/" className='logo'>
          <img src="/logo.png" alt="logo" />
          <span>RealEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">Sign up</a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={()=>setOpen(!open)}/>
        </div>
        <div className={open? 'menu active' : 'menu'}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
