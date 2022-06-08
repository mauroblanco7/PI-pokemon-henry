
import React from 'react'
import "../componentsCSS/cardPokemon.css"



export default function CardPokemon({id,img,name,type}) {
    console.log(type)
  return (
     <div className='parent'>
      <div className="card">
       <h3>{id}</h3>
       <img src={img} alt="" />
       <div className='card-text'>
       <h2>{name.toUpperCase()}</h2>
       <div className='type-text'>
         {type[0].name?<h4>{type[0].name}</h4>:type && type.length === 2 ? (
          <p>TYPE <br /> <hr /> {type[0].toUpperCase() + " - " + type[1].toUpperCase()}</p>
        ) : type && type.length > 0 ? (
          <p>TYPE <br/> <hr /> {type[0].toUpperCase()}</p>
        ) : null}
      </div>
       </div>
      </div>
      </div>
    
  )
}


