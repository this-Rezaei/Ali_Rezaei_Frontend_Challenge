import React, { useEffect } from "react";
import Tasks from "./tasks/tasks";
import { useDispatch, useSelector } from "react-redux";
import { allTasks } from "../../stores/actions";
import { Link } from "react-router-dom";
const AllTasks = () => {
  let dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(allTasks());
  }, [""]);

  return (
    <div className="bg-[#0000002c] w-full h-auto min-h-[500px] max-w-3xl p-3 rounded-sm">
      <div className="w-full  p-2 flex justify-center">
        <Link
          to={"/addTask"}
          className="bg-blue-400 p-2 outline-none rounded-sm hover:bg-blue-500 "
        >
          add atsk
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {loading ? (
          <p className="text-2xl text-white">loading ....</p>
        ) : (
          tasks.map((task) => (
            <Tasks
              key={task.id}
              idTask={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllTasks;
