
import './App.css'
import restaurantFood from './assets/restauranfood.jpg'
import salad from './assets/salad.jpg'
import bruchetta from './assets/bruchetta.svg'
import dessert from './assets/dessert.jpg'


function Main() {
  

  return (
    <main>
      <section className="heroBackground">
        <div className="container">
          <section id="heroSection">
            
            <div className="heroText">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p className="lead-text">
                We are a family owned Mediterranian restaurant, focused on traditional recipes width a moderntwist
              </p>
              <button>Reserve a table</button>
            </div>

            <div className="heroImage">
              <img src={restaurantFood}/>
            </div>

          </section>
        </div>
      </section>
      <div id="headerHighlights">
          <div className="container">
              <h2>This week specials!</h2>
              <button>Online Menu</button>
          </div>
      </div>
      <section id="cardsSection">
         <div className="container">
          <section id='cardContent'>
  
            {/* Cartão 1: Greek Salad */}
            <article className='card'>
              <div className='cardImage'>
                <img src={salad} alt='Greek Salad'/>
              </div>
              <div className='cardDescription'>
                <div className='cardHeader'>
                  <h3>Greek salad</h3>
                  <span className="highlight-text">$ 12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href="#order">Order a delivery</a>
              </div>
            </article>

            {/* Cartão 2: Bruschetta */}
            <article className='card'>
              <div className='cardImage'>
                <img src={bruchetta} alt='Bruchetta'/>
              </div>
              <div className='cardDescription'>
                <div className='cardHeader'>
                  <h3>Bruchetta</h3>
                  <span className="highlight-text">$ 5.99</span>
                </div>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <a href="#order">Order a delivery</a>
              </div>
            </article>

            {/* Cartão 3: Lemon Dessert */}
            <article className='card'>
              <div className='cardImage'>
                <img src={dessert} alt='Lemon Dessert'/>
              </div>
              <div className='cardDescription'>
                <div className='cardHeader'>
                  <h3>Lemon Dessert</h3>
                  <span className="highlight-text">$ 5.00</span>
                </div>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <a href="#order">Order a delivery</a>
              </div>
            </article>

          </section>


         </div>

      </section>
      
    </main>
  )
}

export default Main