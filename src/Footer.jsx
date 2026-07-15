
import './App.css'
import logoLemon from './assets/logoLemon.png'
function Footer() {
  

  return (
    <>
      <footer className="footerBackground">
        <div className="container">
          <img src={logoLemon} alt='Logo Little Lemon'/>
          
          <nav className='footerNav'>
            <h3 className='text-secondary'>Doormat Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
          <section>
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