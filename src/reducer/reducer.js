export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

export const reducer = (state = initialState, action) => {
  console.log("Action ", action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
