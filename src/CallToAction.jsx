
import restaurantFood from './assets/restauranfood.jpg'

function CallToAction() {
  return (
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
    
  )
}

export default CallToAction