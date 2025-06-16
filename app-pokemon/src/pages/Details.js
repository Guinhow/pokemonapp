import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../components/Details.css';

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div className="details-container">
      <Link to="/home" className='back'>← Voltar</Link>
      <h1 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h1>

      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="details-image"
        onClick={() => setModalOpen(true)}
      />

      <ul className='list'>
        <li><strong>Altura:</strong> {pokemon.height}</li>
        <li><strong>Peso:</strong> {pokemon.weight}</li>
        <li><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</li>
        <li><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</li>
        <li><strong>XP base:</strong> {pokemon.base_experience}</li>
        <li><strong>Movimentos:</strong> {pokemon.moves.slice(0, 3).map(m => m.move.name).join(', ')}</li>
      </ul>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default Details;
