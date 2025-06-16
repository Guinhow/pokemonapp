import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(res => res.json())
      .then(data => setPokemons(data.results));
  }, []);

  const getPokemonId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <div className="home-container">
      <h1 className='title'>Pokémons</h1>
      <div className="pokemon-grid">
        {pokemons.map(pokemon => {
          const id = getPokemonId(pokemon.url);
          return (
            <Link key={pokemon.name} to={`/details/${pokemon.name}`} className="pokemon-card">
              <img
                className="pokemon-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={pokemon.name}
                width="120"
              />
              <p className="pokemon-name">{pokemon.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
