import { useForm } from "../../hooks/useForm";
import Loader from "../Loader";
import Message from "../Message";
import "../../componentsCSS/createPokemon.css"
//Url's validas para crear pokemones
// https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png
// https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png
// https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png



const initialForm = {
  name: "",
  hp: "",
  strength: "",
  defense: "",
  height: "",
  speed: "",
  weight: "",
  type: "",
  img : ""
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[a-z]{4,10}$/;
  let regexUrl = /^(https?:\/\/.*\.(?:png|jpg))/i;
  let regexStats = /^[0-9_-]{1,2}$/;

  if (!form.name.trim()) {
    errors.name = "The field Name is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The Name field only accepts lowercase letters and 4 to 10 characters";
  }

  if (!form.hp.trim()) {
    errors.hp = "HP field is required";
  } else if (!regexStats.test(form.hp.trim())) {
    errors.hp = "The HP field only accepts numbers from 0 to 100";
  }
  if (!form.strength.trim()) {
    errors.strength = "The Strength field is required";
  } else if (!regexStats.test(form.strength.trim())) {
    errors.strength =
      "The Strength field only accepts numbers from 0 to 100";
  }

  if (!form.defense.trim()) {
    errors.defense = "The Defense field is required";
  } else if (!regexStats.test(form.defense.trim())) {
    errors.defense = "The Defense field only accepts numbers from 0 to 100";
  }
  if (!form.height.trim()) {
    errors.height = "The Height field is required";
  } else if (!regexStats.test(form.height.trim())) {
    errors.height = "The Height field only accepts numbers from 0 to 100";
  }
  if (!form.speed.trim()) {
    errors.speed = "The Speed field is required";
  } else if (!regexStats.test(form.speed.trim())) {
    errors.speed = "The Speed field only accepts numbers from 0 to 100";
  }
  if (!form.weight.trim()) {
    errors.weight = "The Weight field is required";
  } else if (!regexStats.test(form.weight.trim())) {
    errors.weight = "The Weight field only accepts numbers from 0 to 100";
  }
 
  if (!form.img.trim()) {
    errors.img = "The Image field is required";
  } else if (!regexUrl.test(form.img.trim())) {
    errors.img = "The Image field only accepts valid URL's, example: hhtp://example.png/jpg";
  }



  return errors;
};


const CreatePokemon = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="form">
      <h2>Create Pokemon</h2>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-stats">
        <input
          type="text"
          name="name"
          placeholder="Write your name..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p className="pp" >{errors.name}</p>}
        </div>
        <div className="input-stats">
        <input
          type="text"
          name="hp"
          placeholder="Write your hp..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.hp}
          required
        />
        {errors.hp && <p className="pp" >{errors.hp}</p>}
        </div>
        <div className="input-stats">
        <input
          type="text"
          name="strength"
          placeholder="Write your strength..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.strength}
          required
        />
        {errors.strength && <p  className="pp" >{errors.strength}</p>}
        </div>
        <div className="input-stats">
        <input
          type="text"
          name="defense"
          placeholder="Write your defense..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.defense}
          required
        />
        {errors.defense && <p className="pp" >{errors.defense}</p>}
        </div>
        <div className="input-stats">
        <input
          type="text"
          name="height"
          placeholder="Write your height..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.height}
          required
        />
        {errors.height && <p className="pp" >{errors.height}</p>}
        </div>
        <div className="input-stats">
        <input
          type="text"
          name="speed"
          placeholder="Write your speed..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.speed}
          required
        />
        {errors.speed && <p className="pp" >{errors.speed}</p>}
        </div>
        <div className="input-stats">
        <input
          type="text"
          name="weight"
          placeholder="Write your weight..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.weight}
          required
        />
        {errors.weight && <p className="pp" >{errors.weight}</p>}
        </div>
        <div className="input-stats">
        <input
          type="text"
          name="img"
          placeholder="Write your url/image..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.img}
          required
        />
        {errors.img && <p className="pp" >{errors.img}</p>}
        </div>
        <div className="select dd" >
                    <select name="type" onChange={handleChange} >
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


        <input className="enviar" type="submit" value="Send" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="The pokemon has been created successfully" bgColor="#198754" />
      )}
      </div>
    </div>
  );
};

export default CreatePokemon;

