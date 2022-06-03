export const initialState = {
    clients: [],
};

export const actionTypes = {
  GET_CLIENTS: "GET_CLIENTS",
};

const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "GET_CLIENTS":
      return {
        ...state,
        clients: [...state.clients, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
