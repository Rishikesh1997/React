import { createStore } from "redux";

const initialState = {
  userList: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  const userListCopy = [...state.userList];

  switch (type) {
    case "USER_ADD":
      const id = payload.id ? payload.id : state.userList.length + 1;
      userListCopy.push({ ...payload, id });

      return {
        userList: userListCopy,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
