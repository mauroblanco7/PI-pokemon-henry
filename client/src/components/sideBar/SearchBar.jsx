import React from 'react'

import { searchPoke , getPokemons} from '../../actions/index';
import { useDispatch } from 'react-redux';
import "../../componentsCSS/searchBar.css"

function toValidateName(name) {
    let errors = {};
    if (!name) {
      errors.name = "This field is required";
    } else if (!/^[a-z]{3,15}$/.test(name)) {
      errors.name =
        "The name must be an avaliable name with only 3 to 10 lowercase letters. ";
    }
    return errors;
  }
  
  function SearchBar({setCurrentPage, setOrder}) {
    const dispatch = useDispatch();
    const [name, setName] = React.useState("");
    //const pokemons = useSelector((state) => state.pokemons);
    const [errors, setErrors] = React.useState({});
  
    function handleInput(e) {
      
      setName(e.target.value);
      setErrors(toValidateName(e.target.value));
    }
    function handleSubmit(e) {
     
      if (name.length === 0) {
        return alert("NOT AVALIABLE");
      } else {
        dispatch(searchPoke(name));
        setCurrentPage(1)
        setOrder(`${name}`)
        setName("");
      }
    }
    return (
      <div>
        <div>
          <input
            className="input"
            type="text"
            value={name}
            placeholder="Search by name..."
            onChange={(e) => handleInput(e)}
          />
          {errors.name && <p>{errors.name}</p>}
          {errors.name || !name ? (
            <button className='button--submit' type="submit" disabled={true}>
              Ok
            </button>
          ) : (
            <button
              className='button--submit'
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Ok
            </button>
          )}
        </div>
      </div>
    );
  }
  
  export default SearchBar;
