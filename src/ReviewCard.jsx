import star from './assets/star.png'

function ReviewCard({ image, name, rating, review }) {
  return (
    <article className="cardReview">
      <div className="rating">
        {[...Array(rating)].map((_, index) => (
          <img
            key={index}
            src={star}
            alt="Star"
            width="20"
          />
        ))}
      </div>

      <div>
        <div className="cardReviewImage">
          <img src={image} alt={name} />
        </div>

        <span className='highlight-text'>{name}</span>
      </div>

      <p>{review}</p>
    </article>
  );
}

export default ReviewCard;