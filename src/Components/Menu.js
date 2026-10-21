import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <header>
      <h2>AutoWorld</h2>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/cars"> Cars </Link>
        <Link to="/services"> Services </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
    </header>
  )
}