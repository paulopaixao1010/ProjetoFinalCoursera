
import './App.css'
import logoLemon from './assets/logoLemon.png'
function Footer() {
  

  return (
    <>
      <footer>
        <img src={logoLemon} alt='Logo Little Lemon'/>
        
        <nav>
          <h2>Doormat Navigation</h2>
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
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </section>
        <section>
          <h2>Social Media Links</h2>
          <a href='#'>Address</a>
          <a href='#'>Phone Number</a>
          <a href='#'>Email</a>
        </section>
      </footer>
    </>
  )
}

export default Footer