import axios from "axios";

export function getPokemons() {
  return (dispatch) => {
    return axios
      .get("/pokemons")
      .then((response) => response.data)
      .then((r) => dispatch({ type: "GET_ALL_POKEMONS", payload: r }))
      .catch((err) => {
        return err;
      });
  };
}

export function postPokemon(payload) {
  return async (dispatch) => {
    try {
      const result = await axios.post("/pokemons", payload);
      console.log(result);
      return result;
    } catch (err) {
      return err;
    }
  };
}
export function getDetail(id) {
  return (dispatch) => {
    return axios
      .get(`/pokemons/${id}`)
      .then((response) => response.data)
      .then((r) => dispatch({ type: "GET_DETAIL", payload: r }))
      .catch((err) => {
        return err;
      });
  };
}
export function searchPoke(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/pokemons?name=${name}`);
      console.log("holaa", json.data);
      return dispatch({ type: "SEARCH_POKE", payload: json.data });
    } catch (error) {
      // alert("Pokemon not found");
      console.log(error);
    }
  };
}
export function filterTypes(payload) {
  console.log(payload);
  return { type: "FILTER_TYPES", payload };
}

export const filterByName = (payload) => {
  console.log(payload);
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
};
export function orderByAttack(payload) {
  return { type: "ORDER_BY_ATTACK", payload };
}
export function filterApiOrDb(payload) {
  return { type: "FILTER_API_DB", payload };
}
