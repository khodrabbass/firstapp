
import { useState } from 'react';

import mercedes from '../images/mercedes.avif';
import toyota from '../images/toyota.avif';
import bmw from '../images/bmw.avif';
import ford from '../images/ford.avif';
import audi from '../images/audi.avif';
import tesla from '../images/tesla.jpg';

export default function Cars() {

  const cars = [
    { id: 1, brand: "Toyota", model: "Camry", price: 26000, image: toyota },
    { id: 2, brand: "BMW", model: "3 Series", price: 45000, image: bmw },
    { id: 3, brand: "Mercedes-Benz", model: "C-Class", price: 52000, image: mercedes },
    { id: 4, brand: "Audi", model: "Q5", price: 48000, image: audi },
    { id: 5, brand: "Ford", model: "F-150", price: 42000, image: ford },
    { id: 6, brand: "Tesla", model: "Model S", price: 902000, image: tesla }
  ];

  // Store the IDs of liked cars
  const [likedCars, setLikedCars] = useState([]);

  // Like or unlike a car
 function likeCar(elt) {

  if (likedCars.includes(elt.id)) {
    setLikedCars(
      likedCars.filter(id => id !== elt.id)
    );
  } else {
    setLikedCars([...likedCars, elt.id]);

    alert("I like " + elt.brand + " car");
  }

}

  return (
    <>
      <section className="page-title">
        <h1>Our Cars</h1>
        <p>Find the perfect car that fits your lifestyle and budget.</p>
      </section>

      <main className="cars-container">

        {cars.map((elt) => (

          <div className="car-card" key={elt.id}>

            <img
              src={elt.image}
              alt={elt.brand + " car"}
            />

            <div className="car-info">

              <h3>{elt.brand}</h3>

              <p>{elt.model}</p>

              <p className="price">
                ${elt.price.toLocaleString("en-US")}
              </p>

              <button
                className={
                  likedCars.includes(elt.id)
                    ? "like-btn liked"
                    : "like-btn"
                }
                onClick={() => likeCar(elt)}
              >
                {likedCars.includes(elt.id)
                  ? "♥ Liked"
                  : "♡ I Like"}
              </button>

              

            </div>
          </div>

        ))}

      </main>
    </>
  );
}
