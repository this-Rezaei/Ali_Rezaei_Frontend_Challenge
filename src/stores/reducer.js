import * as types from "./actionType";

const initialState = {
  tasks: [],
  // user: {},
  loading: true,
  success: false,
};

const tasksReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case types.COMPLETED_TASK:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_TASKS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};

export default tasksReducers;
