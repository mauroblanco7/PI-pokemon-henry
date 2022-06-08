import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, filterByName,orderByAttack,filterTypes,filterApiOrDb} from "../actions";
import CardPokemon from "./CardPokemon";
import Nav from "./navBar/Nav"
import SearchBar from "./sideBar/SearchBar";
import Loader from "./Loader"
import "../componentsCSS/home.css"
import "../componentsCSS/navbar.css"
import "../componentsCSS/landingPage.css"
import Pagination from "./Pagination";
import { Link } from "react-router-dom";



export default function Home () {
    const dispatch = useDispatch()
    const {pokemons} = useSelector((state)=>state)
    const [order,setOrder] = useState("")
    const [charge, setCharge] = useState(false)
  
    // paginacion
    const [currentPage, setCurrentPage] =  useState(1);
    const [pokesByPage] = useState(12);
    const lastPoke = currentPage * pokesByPage;
    const firstPoke = lastPoke - pokesByPage;
    console.log(pokemons)
    const currentPokesInPage= pokemons.slice(firstPoke, lastPoke)
    
    const pagination = (pagNumber)=>{
      setCurrentPage(pagNumber)
    }

    useEffect(()=>{
      setCharge(true)
      setTimeout(()=>{setCharge(false)}, 40000)
      dispatch(getPokemons())
    },[dispatch])


    function handleFilterByName(e){
      e.preventDefault()
      setCharge(true)
      setCurrentPage(1);
      dispatch(filterByName(e.target.value))
      setOrder(`${e.target.value}`)
      setTimeout(()=>{setCharge(false)}, 1000)
    }
    function handleOrderAttack(e) {
      e.preventDefault();
      setCharge(true)
      setCurrentPage(1);
      dispatch(orderByAttack(e.target.value));
      setOrder(`ordered ${e.target.value}`);
      setTimeout(()=>{setCharge(false)}, 1000)
    }
    function handleFilterTypes(e) {
      e.preventDefault();
      setCharge(true)
      dispatch(filterTypes(e.target.value));
      setCurrentPage(1);
      setOrder(`filtered ${e.target.value}`);
      setTimeout(()=>{setCharge(false)}, 1000)
    }
    function handlefilterbyApiDb(e) {
      e.preventDefault();
      setCharge(true)
      dispatch(filterApiOrDb(e.target.value));
      setCurrentPage(1);
      setOrder(`filtered ${e.target.value}`);
      setTimeout(()=>{setCharge(false)}, 1000)
    }


    return (
      <React.Fragment>
        <div className="navbar">
          <Nav/>
        </div>

        <div className="main">
          <div className="filter-container">
          <div className="filters">

          <div>
            <p>Order by name</p>
            <div className="select">
                      <select onChange={e=>{handleFilterByName(e)}}>
                        <option value="asc">A - Z</option> 
                        <option value="desc">Z - A</option> 
                      </select>
            </div>
          </div>
          <div>
            <p>Order by strength</p>
            <div className="select">
                      <select onChange={(e) => handleOrderAttack(e)}>
                        <option value="fasc">Upward strength</option> 
                        <option value="fdesc">Downward strength</option> 
                      </select>
            </div>
          </div>
          <div>
            <p>Filter by type</p>
            <div className="select">
                    <select onChange={(e) => handleFilterTypes(e)}>
                      <option value="rock">Rock</option>
                      <option value="bug">Bug</option>
                      <option value="ghost">Ghost</option>
                      <option value="steel">Steel</option>
                      <option value="normal">Normal</option>
                      <option value="fighting">Fighting</option>
                      <option value="fire">Fire</option>
                      <option value="flying">Flying</option>
                      <option value="poison">Poison</option>
                      <option value="ground">Ground</option>
                      <option value="water">Water</option>
                      <option value="grass">Grass</option>
                      <option value="electric">Electric</option>
                      <option value="shadow">Shadow</option>
                      <option value="dragon">Dragon</option>
                      <option value="dark">Dark</option>
                      <option value="fairy">Fairy</option>
                      <option value="unknown">Unknown</option>
                      <option value="physic">Psychic</option>
                      <option value="ice">Ice</option>
                    </select>
            </div>
          </div>
          
          <div>
            <p>Filter existing or created</p>
              <div className="select">
                      <select onChange={(e) => handlefilterbyApiDb(e)}>
                        <option value="existing">Existing</option>
                        <option value="created">Created</option>
                      </select>
              </div>
          </div>
          <div>
            
          <SearchBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
          </div>
          </div>
          </div>

          

           <div className="pag">
            <div className="pagina">
                {charge?<div className="loader-main">
                  <Loader/>
                </div>:
                currentPokesInPage.length?
                    currentPokesInPage.map((p) => {
                        return (
                          <div key={p.id}>
                            <Link className="link" target="_blank" to={`/home/${p.id}`}>
                              <CardPokemon
                                key={p.id}
                                name={p.name}
                                img={p.img}
                                type={p.type ? p.type : p.types}
                              />
                            </Link>
                          </div>
                        );
                      }):<div className="div-not-found">
                        <h4>There are no pokemon of this type</h4>
                        <h5>Try creating a new pokemon</h5>
                      </div>
                }

             
                </div>
                  <Pagination 
                    pokesByPage={pokesByPage}
                    allPokemons={pokemons.length}
                    pagination={pagination}
                  />
            </div>
        </div>

      </React.Fragment>
    )
}