import React, { useEffect, useState } from 'react'
import './searchFavorite.css'
import { Link } from 'react-router-dom';


export const FactoriesFavorite = () => {
    const [factories, setFactories] = useState([{ name: "test" }]);


    useEffect(() => {
        // const result = getFactories();
        // console.log("useEffect", result);
        // setFactories(result)
        getFactories().then(resp => setFactories(resp))
    }, [])

    const getFactories = async () => {
        const resp = await fetch("http://localHost:8080/factory");
        const json = await resp.json();

        console.log("getFactories", json);

        //  return ([{name: "Test1"}])
        return json;
    }

    return (
        <div className='favorite-conteiner'>
            <div className='search1'>Search by product or key words</div>
            <div className='row1'>Filter:  Industry  Country</div>
            <div className='grid-conteiner1'>
                {factories.map((item, index) => (
                    <div key={index}> 
                        <Link to="/factory" className='link-conteiner'>{item.name}</Link>
                    </div>

                ))}

            </div>
        </div>
        
    )
}
