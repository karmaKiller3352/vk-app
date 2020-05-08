import update from 'immutability-helper';
const ReducerUser = (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return state.filter((user) => user.id !== action.payload);
    case 'ADD_USER':
      return [action.payload, ...state];
    case 'CHECK_USER':
      const targetUser = state.find((user) => user.id === action.payload);
      const currentFlag = targetUser.showFriends;

      const targetUserIndex = state.findIndex(
        (user) => user.id === action.payload
      );
      const updatedUser = update(targetUser, {
        showFriends: { $set: !currentFlag },
      });
      return update(state, { [targetUserIndex]: { $set: updatedUser } });
    default:
      return state;
  }
};

export default ReducerUser;
