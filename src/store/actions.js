const auth0Login = () => (dispatch) => {
  dispatch({
    type: 'AUTH0_TRIGGER',
  })
} 

export default {
  auth0Login,
};
