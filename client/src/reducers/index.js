const initialState = {
  pokemons: [],
  pokes: [],
  types: [],
  pokeDetail: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        pokeDetail: [],
        pokemons: payload,
        pokes: payload,
      };

    case "SEARCH_POKE":
      return {
        ...state,
        pokemons: payload,
      };

    case "FILTER_TYPES":
      const all2 = state.pokes;
      const fil = all2.filter((t) =>
        t.type
          ? t.type[0] === payload || t.type[1] === payload
          : t.types && t.types.length === 1
          ? t.types[0] === payload
          : t.types && t.types.length > 1
          ? t.types[0] === payload || t.types[1] === payload
          : null
      );
      return {
        ...state,
        pokemons: fil,
      };

    case "ORDER_BY_NAME":
      let reubicaciónAlph =
        payload === "asc"
          ? state.pokes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: reubicaciónAlph,
      };

    case "ORDER_BY_ATTACK":
      const sortedAttack =
        payload === "fasc"
          ? state.pokes.sort(function (a, b) {
              if (a.strength > b.strength) {
                return 1;
              }
              if (b.strength > a.strength) {
                return -1;
              }
              return 0;
            })
          : state.pokes.sort(function (a, b) {
              if (a.strength > b.strength) {
                return -1;
              }
              if (b.strength > a.strength) {
                return 1;
              }
              return 0;
            });
      return { ...state, pokemons: sortedAttack };

    case "FILTER_API_DB":
      const all = state.pokes;
      const filtered =
        payload === "created"
          ? all.filter((p) => p.itsCreated === true)
          : all.filter((p) => !p.itsCreated);
      return { ...state, pokemons: filtered };

    case "POST_POKEMON":
      return {
        ...state,
      };

    case "GET_DETAIL":
      return {
        ...state,
        pokeDetail: payload,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
