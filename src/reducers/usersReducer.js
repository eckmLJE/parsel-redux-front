const users = (
  state = {
    availableUsers: [],
    userLoadingStatus: false,
    userLoggedIn: true,
    currentUser: 1
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_USERS_REQUEST":
      return { ...state, userLoadingStatus: true };
    case "ADD_USERS":
      return {
        ...state,
        availableUsers: action.users,
        userLoadingStatus: false
      };
    default:
      return state;
  }
};

export default users;
