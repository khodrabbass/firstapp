
import { useState } from 'react';

import mercedes from '../images/mercedes.avif';
import toyota from '../images/toyota.avif';
import bmw from '../images/bmw.avif';
import ford from '../images/ford.avif';
import audi from '../images/audi.avif';
import tesla from '../images/tesla.jpg';

import CarComponent from "../Components/Carscomponent";

export default function Cars() {

  const cars = [
    { id: 1, brand: "Toyota", model: "Camry", price: 26000, image: toyota },
    { id: 2, brand: "BMW", model: "3 Series", price: 45000, image: bmw },
    { id: 3, brand: "Mercedes-Benz", model: "C-Class", price: 52000, image: mercedes },
    { id: 4, brand: "Audi", model: "Q5", price: 48000, image: audi },
    { id: 5, brand: "Ford", model: "F-150", price: 42000, image: ford },
    { id: 6, brand: "Tesla", model: "Model S", price: 902000, image: tesla }
  ];

  const [likedCars, setLikedCars] = useState([]);
  const [showCars, setShowCars] = useState(true);

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

        <button onClick={() => setShowCars(!showCars)}>
          {showCars ? "Hide Cars" : "Show Cars"}
        </button>
      </section>

      {showCars && (
        <main className="cars-container">
          {cars.map((elt) => (
            <CarComponent
              key={elt.id}
              car={elt}
              liked={likedCars.includes(elt.id)}
              onLike={() => likeCar(elt)}
            />
          ))}
        </main>
      )}
    </>
  );
}
