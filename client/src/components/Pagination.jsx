import React from 'react'
import "../componentsCSS/pagination.css"

export default function Pagination({pokesByPage,allPokemons,pagination}) {
    const pageNumbers =[]

    for (let i = 0; i <=Math.ceil(allPokemons/pokesByPage)-1; i++) {
      pageNumbers.push(i+1)
        
    }


  return (
    <nav className='DD'>
    <ul className="uld">
      {pageNumbers &&
        pageNumbers.map((num) => (
          <li className="lipag" key={num}>
            <button className="buttonPAG" onClick={() => pagination(num)}>
              {num}
            </button>
          </li>
        ))}
    </ul>
  </nav>
    
  )
}
