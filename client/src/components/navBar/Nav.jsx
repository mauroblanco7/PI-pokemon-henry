

import React from 'react'
import { useDispatch} from "react-redux";
import { getPokemons} from "../../actions/index";
import pokeLogo from "../../images/pokeLogo.com.png"
import { Link } from 'react-router-dom';

export default function Nav() {
    const dispatch = useDispatch()
    function handleClick(e){
        e.preventDefault()
        dispatch(getPokemons())
      }
  return (
    <div className='navbardiv'>
        <img src={pokeLogo} alt="" />
    <button className='buttonNav' onClick={e=>{handleClick(e)}}>
      <span>Load Pokemons</span>
    </button> 
          <button className='btn-create'>
          <Link className='link-create'target="_blank" to={"/create"}>Create pokemon</Link>
          </button>
        
    </div>
  )
}


