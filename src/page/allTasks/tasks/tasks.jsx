import React from "react";
import { UpdateTasks, handleDeletetask } from "../../../stores/actions";
import { useDispatch } from "react-redux";
const Tasks = ({ idTask, title, description, completed }) => {
  let dispatch = useDispatch();
  const dataTask = {
    title: title,
    description: description,
    completed: !completed,
  };
  const handleCompleted = () => {
    console.log("handleCompleted");
    dispatch(UpdateTasks(dataTask, idTask));
  };
  const handleDelete = () => {
    console.log(idTask);
    dispatch(handleDeletetask(idTask));
  };
  return (
    <div
      className={` w-80 h-40 p-2 rounded-sm flex flex-col items-center justify-between ${
        completed ? "bg-red-200" : "bg-gray-300"
      }`}
    >
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>

      <div className="flex justify-around w-full mt-2">
        {!completed ? (
          <>
            <button className="bg-blue-400 p-2 outline-none rounded-sm hover:bg-blue-500 ">
              update
            </button>
            <button
              onClick={handleCompleted}
              className="bg-yellow-400 outline-none  p-2 rounded-sm  hover:bg-yellow-500"
            >
              completed
            </button>
          </>
        ) : (
          <button
            onClick={handleCompleted}
            className="bg-yellow-400 outline-none  p-2 rounded-sm  hover:bg-yellow-500"
          >
            uncompleted
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-400 outline-none  p-2 rounded-sm  hover:bg-red-500"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Tasks;
