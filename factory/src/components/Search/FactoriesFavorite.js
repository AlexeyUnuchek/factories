import React, { useEffect, useState } from 'react'
import './searchFavorite.css'

export const FactoriesFavorite = () => {
    const [factories, setFactories] = useState([{name: "Test"}]);


    useEffect(() => {
        // const result = getFactories();
        // console.log("useEffect", result);
        // setFactories(result)
        getFactories().then(resp => setFactories(resp))
    }, [])

    const getFactories = async () => {
         const resp = await fetch("http://localHost:8080/factory");
         const json = await resp.json();
         
         console.log("getFactories",  json);

         return ([{name: "Test1"}])
        // return  resp;
    }

    return (
        <div className='favorite-conteiner'>
            <div className='search1'>Search by product or key words</div>
            <div className='row1'>Filter:  Industry  Country</div>
            <div className='grid-conteiner1'>
                {factories.map((item) => (
                    <div>{item.name}</div>
                ))}

            </div>
        </div>
    )
}
