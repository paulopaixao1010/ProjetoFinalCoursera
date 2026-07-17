
import ReviewCard from "./ReviewCard";
import random1 from "./assets/random1.jpg";
import random2 from "./assets/random2.jpg";
import random3 from "./assets/random3.jpg";
import random4 from "./assets/random4.jpg";

function CustomersSay() {
    const reviews = [
    {
        review: "“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”",
        name: "Sara Lopez",
        image: random4,
        rating: 4,
        username:"Sara72"

    },
    {
        review: "“We had such a great time celebrating my grandmothers bitthday!”",
        name: "Jon Do",
        image: random2,
        rating: 4,
        username:"Johnny_Utah"
    },
    {
        review: "“Best Feta Salad in town. Flawless everytime!”",
        name: "Sara Lopez",
        image: random4,
        rating: 4,
        username:"Sara72"
    },
    {
        review: "“Such a chilled out atmosphere - love it!”",
        name: "Sara Lopez",
        image: random4,
        rating: 4,
        username:"Sara72"

    }
    ];

    return (
        <section id="testimonials" className="bg-primary">
            <div className="container">
            <div className="">
                <h2>Testimonials</h2>
            </div>
            <section id="reviews">
                {reviews.map((review) => (
                <ReviewCard
                    key={review.name}
                    image={review.image}
                    name={review.name}
                    rating={review.rating}
                    review={review.review}
                    username={review.username 
                    }
                />
                ))}
            </section>
    
            </div>
        </section>
        
    )
}

export default CustomersSay