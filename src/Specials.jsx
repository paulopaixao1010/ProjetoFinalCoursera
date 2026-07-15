import salad from './assets/salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import dessert from './assets/dessert.jpg';

import SpecialCard from './SpecialCard';

function Specials() {

  const specials = [
    {
      image: salad,
      title: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      image: bruchetta,
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
      image: dessert,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
  ];

  return (
    <section id="cardsSection">
      <div className="container">

        <div className="specialsHeader">
          <h2>This week specials!</h2>
          <button>Online Menu</button>
        </div>

        <section id="cardContent">
          {specials.map((special) => (
            <SpecialCard
              key={special.title}
              image={special.image}
              title={special.title}
              price={special.price}
              description={special.description}
            />
          ))}
        </section>

      </div>
    </section>
  );
}

export default Specials;