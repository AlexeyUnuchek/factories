import React from 'react'
import { Link } from 'react-router-dom';
import './searchFavorite.css';

export const Factory = (props) => {
  return (
    <div>
      <Link to="/favorite" className='link-conteiner'> Back to factories</Link>
      <div>Factory {props.name}</div>
    </div>
    )
}
export default Factory;