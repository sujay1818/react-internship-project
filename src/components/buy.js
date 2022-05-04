import React, { useState, useEffect } from "react";
import "../static/buy.css";
import { useHttpHook } from "../Hooks/HttpHook";
function Buy() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  const { loaderOpen, setLoaderOpen, error, sendRequest, open, setOpen } =
    useHttpHook();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          "https://pashu-bazzar.herokuapp.com/api/posts/"
        );
        setLoadedPosts(responseData.posts);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest]);

  return (
    <main class="buyContainer">
      <h1 class="buyheading">Available Cattles</h1>
      <div class="emptyLine"></div>
      {loadedPosts.map((item) => {
        const { id, image, location, price, breed, contact, description } =
          item;
        return (
          <section key={id} class="cardContainer">
            <div class="card">
              <div class="imgContainer">
                <img src={image} alt="cattle" />
              </div>
              <div class="cattleInfo">
                <div class="aboutSection">
                  <h3>About</h3>
                  <div class="aboutLine"></div>
                </div>
                <p class="cattleBreed">
                  Breed: <span>{breed}</span>
                </p>
                <p class="cattlePrice">
                  Price: <span>₹{price}</span>
                </p>
                <p class="ownerLocation">
                  Location: <span>{location}</span>
                </p>
                <p class="ownerContact">
                  Contact: <span>{contact}</span>
                </p>
              </div>
            </div>
            <div class="cattleDesc">
              <div class="descSection">
                <h3>Description</h3>
                <div class="descLine"></div>
              </div>
              <p>{description}</p>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Buy;
