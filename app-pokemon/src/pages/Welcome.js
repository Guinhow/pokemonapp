import { Link } from 'react-router-dom';
import '../components/Welcome.css';

const Welcome = () => (
  <div className="welcome-container">
    <h1>Pokémon Explorer</h1>
    <p>Este é um app feito com React e PokeAPI para explorar pokémons.</p>
    <Link to="/home" className="welcome-button">
      Explorar Pokémons
    </Link>
  </div>
);

export default Welcome;
