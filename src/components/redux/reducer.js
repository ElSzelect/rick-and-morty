

const initialState = {
  myFauvorites: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, ...payload };

    default:
      return state;
  }
};
