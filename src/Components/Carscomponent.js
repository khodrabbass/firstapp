
export default function CarComponent({ car, liked, onLike }) {
  return (
    <div className="car-card">
      <img
        src={car.image}
        alt={car.brand + " car"}
      />

      <div className="car-info">
        <h3>{car.brand}</h3>

        <p>{car.model}</p>

        <p className="price">
          ${car.price.toLocaleString("en-US")}
        </p>

        <button
          className={liked ? "like-btn liked" : "like-btn"}
          onClick={onLike}
        >
          {liked ? "♥ Liked" : "♡ I Like"}
        </button>
      </div>
    </div>
  );
}
