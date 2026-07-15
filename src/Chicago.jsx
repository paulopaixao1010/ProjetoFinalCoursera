
import restaurantFood from './assets/restauranfood.jpg'

function Chicago() {
  return (
    <section id='about'>
        <div className="container">
          <div className="heroText">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p className="lead-text">
              We are a family owned Mediterranian restaurant, focused on traditional recipes width a moderntwist
              </p>
          </div>

          <div className="aboutImages">
            <img
                src={restaurantFood}
                alt="Restaurant"
                className="imageLeft"
            />

            <img
                src={restaurantFood}
                alt="Chef"
                className="imageRight"
            />
        </div>

            
        </div>
    </section>
    
  )
}

export default Chicago