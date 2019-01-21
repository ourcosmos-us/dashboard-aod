const initialState = {
  auth0Pending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH0_TRIGGER':
      return {
        ...state,
        auth0Pending: true,
      }
    default:
      return state;
  }
};
