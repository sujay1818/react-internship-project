import React, { useState, useEffect } from "react";
import "../static/review.css";

function App() {
  const data = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      name: "maria ferguson",
      title: "office manager",
      quote:
        "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      name: "john doe",
      title: "regular guy",
      quote:
        "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
      name: "peter smith",
      title: "product designer",
      quote:
        "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      name: "susan andersen",
      title: "the boss",
      quote:
        "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
    },
  ];

  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="reviewTitle">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <aside className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4 className="reviewName">{name}</h4>
              <p className="nameTitle">{title}</p>
              <p className="text">{quote}</p>
            </aside>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          {"<"}
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          {">"}
        </button>
      </div>
    </section>
  );
}

export default App;
