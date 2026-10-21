import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <main class="hero">
        <div class="hero-content">
            <h1>Welcome to AutoWorld!</h1>
            <p>
                Find your dream car with us. We offer a wide
                selection of quality cars at affordable prices.
                Your journey starts here!
            </p>

           
             <Link to="/cars" class="explore-btn"> Explore More </Link>
        </div>
    </main>
  )
}