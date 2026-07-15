
import ReviewCard from "./ReviewCard";

function CustomersSay() {
    const reviews = [
        {
            review: "Very Good!",
            name: "Joe",
            image: "",
            rating:4
        },
        {
            review: "Very Good!",
            name: "Jack",
            image: "",
            rating:4
        },
        {
            review: "Very Good!",
            name: "Elene",
            image: "",
            rating:4
        }

    ];

    return (
        <section id="testimonials">
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