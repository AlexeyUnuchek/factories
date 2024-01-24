import React from 'react'
import './searchFavorite.css'

export const FactoriesFavorite = () => {
    const factories = [
        { name: "Tnuva" }, { name: "Danon" }, { name: "Nestle" },{},{},
        {},{},{},{},{},{},{},{},{},{},
    ]

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
