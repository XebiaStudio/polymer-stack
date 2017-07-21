const friendListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRIEND': {
      const friends = state;
      const { friend } = action;
      return [...friends, friend];
    }
    default:
      return state;
  }
};

export default friendListReducer;
