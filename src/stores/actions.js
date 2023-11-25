import * as types from "./actionType";

import axios from "axios";

const getAllTasks = (tasks) => ({
  type: types.GET_TASKS,
  payload: tasks,
});
const completedTask = () => ({
  type: types.COMPLETED_TASK,
});
const addTask = () => ({
  type: types.ADD_TASKS,
});
const deleleTask = () => ({
  type: types.DELETE_TASKS,
});

export const allTasks = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/api/tasks`)
      .then((res) => {
        dispatch(getAllTasks(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const UpdateTasks = (data, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/api/tasks/${id}`, data)
      .then((res) => {
        dispatch(completedTask(res.data));
        dispatch(allTasks());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const CreateTask = (task) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}/api/tasks`, task)
      .then((res) => {
        dispatch(addTask());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const handleDeletetask = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/api/tasks/${id}`)
      .then((res) => {
        dispatch(deleleTask());
        dispatch(allTasks());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
