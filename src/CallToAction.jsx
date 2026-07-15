
import restaurantFood from './assets/restauranfood.jpg'

function CallToAction() {
  return (
    <section className="heroBackground">
        <div className="container">
            <section id="heroSection">
            <div className="heroText">
                <h1 className='text-secondary'>Little Lemon</h1>
                <h2 className='text-white'>Chicago</h2>
                <p className="lead-text text-white">
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