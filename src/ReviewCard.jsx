function ReviewCard({ image, name, rating, review }) {
  return (
    <article className="cardReview">
      <span>{rating}</span>

      <div>
        <div className="cardReviewImage">
          <img src={image} alt={name} />
        </div>

        <span>{name}</span>
      </div>

      <p>{review}</p>
    </article>
  );
}

export default ReviewCard;