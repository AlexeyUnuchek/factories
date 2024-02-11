import './SearchFactiries'
import React from 'react'
import { useParams } from 'react-router-dom'

export const Factories1A = () => {
    const {} = useParams();
    console.log(useParams);
    return (
        <div className='conteiner'> 
            <p className='search'>Search by company, product or key words</p>
            <p className='row'>Filter by:
                Industry
                Country
                Shipping to
                Budget
                MOQ
                Availability
                Production lead time
                ETA
                Packaging
                Registered since
                Rating
                Success rate
                Language
                Certification
                Sample
                Customization capacity
                R&D capacity
                White label
                Sustainability practices
                Show all
                Show most relevant</p>
                <div className='grid-conteiner'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
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
