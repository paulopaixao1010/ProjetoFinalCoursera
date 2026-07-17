
import './App.css'
import logoLemon from './assets/logoLemon.png'
import { Link } from "react-router-dom";
function Footer() {
  

  return (
    <>
      <footer className="footerBackground">
        <div className="container">
          <div className='footerImg'>
            <img src={logoLemon} alt='Logo Little Lemon'/>
          </div>
          
          
          <nav className='footerNav'>
            <h3 className='text-secondary'>Doormat Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#cardsSection">Menu</a></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><a href="/#order-online">Order Online</a></li>
              <li><a href="/#login">Login</a></li>
            </ul>
          </nav>
          <section>
            <h3 className='text-secondary'>Contact</h3>
            <span className='footerContacts'>Address</span>
            <span className='footerContacts'>Phone Number</span>
            <span className='footerContacts'>Email</span>
          </section>
          <section id='socialLinks'>
            <h3 className="text-secondary">Social Media Links</h3>
            <a href='#'>Address</a>
            <a href='#'>Phone Number</a>
            <a href='#'>Email</a>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Footer