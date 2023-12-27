import React from 'react'
import './searchFavorite.css'

export const FactoriesFavorite = () => {
    const factories = [
        {name: "Tnuva"}, {name: "Danon"}, {name: "Nestle"}
    ]

    return (
        <div className='favorite-conteiner'>
            <div className='search1'>Search by product or key words</div>
            <div className='row1'>Filter:  Industry  Country</div>
            <div className='grid-conteiner1'>
                { factories.map((item) => (
                    <div>{item.name}</div>
                ))}
                
                
                
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
            </div>
        </div>
    )
}
