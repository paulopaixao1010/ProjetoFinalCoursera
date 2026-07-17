import star from './assets/star.png'

function ReviewCard({ image, name, rating, review,username }) {
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
        <div className='reviewNames'>
          <span className='highlight-text'>{name}</span>
          <span className='highlight-text'>{username}</span>
        </div>
      </div>

      <p>{review}</p>
    </article>
  );
}

export default ReviewCard;