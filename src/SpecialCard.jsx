
function SpecialCard({ image, title, price, description }) {
  return (
    <article className="card">
      <div className="cardImage">
        <img src={image} alt={title} />
      </div>

      <div className="cardDescription">
        <div className="cardHeader">
          <h3>{title}</h3>
          <span className="highlight-text text-accent">{price}</span>
        </div>

        <p>{description}</p>

        <a href="#order">Order a delivery</a>
      </div>
    </article>
  );
}

export default SpecialCard;