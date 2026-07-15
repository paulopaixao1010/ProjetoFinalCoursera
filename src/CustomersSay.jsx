
import ReviewCard from "./ReviewCard";
import random1 from "./assets/random1.jpg";
import random2 from "./assets/random2.jpg";
import random3 from "./assets/random3.jpg";

function CustomersSay() {
    const reviews = [
    {
        review: "Very Good!",
        name: "Joe",
        image: random1,
        rating: 4
    },
    {
        review: "Very Good!",
        name: "Jack",
        image: random2,
        rating: 4
    },
    {
        review: "Very Good!",
        name: "Elene",
        image: random3,
        rating: 4
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
                />
                ))}
            </section>
    
            </div>
        </section>
        
    )
}

export default CustomersSay