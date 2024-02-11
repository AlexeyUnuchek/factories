import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './searchFavorite.css';

export const Factory = () => {
  const [factories, setFactories] = useState([{ name: "test" }]);
  useEffect(() => {
   
    getFactories().then(resp => setFactories(resp))
  }, [])

  const getFactories = async () => {
    const resp = await fetch("http://localHost:8080/factory");
    const json = await resp.json();

    console.log("getFactories", json);

  
    return json;
  }

  const { name } = useParams();

  return (
    <div>
      <Link to="/favorite" className='link-conteiner'> Back to factories</Link>
      <div>Factory {name}</div>
    </div>
  )
}
export default Factory;