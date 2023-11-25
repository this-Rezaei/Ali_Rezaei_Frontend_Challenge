import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CreateTask } from "../../stores/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Addtask = () => {
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.data);

  var uniq = Number(new Date().getTime() + Math.random().toFixed());

  let dispatch = useDispatch();
  const handleCreate = async (e) => {
    const { title, description } = e.target;
    e.preventDefault();
    const dataAdd = {
      id: uniq,
      title: title.value,
      description: description.value,
      completed: false,
    };
    await dispatch(CreateTask(dataAdd));
  };
  success && navigate("/");

  return (
    <div className="bg-[#0000002c] w-full h-auto min-h-[500px] max-w-3xl p-3 rounded-sm  ">
      <h2 className="text-white text-2xl text-center">Add User</h2>

      <form onSubmit={handleCreate} className="flex flex-col gap-2 mt-5">
        <input
          name="title"
          className="text-lg p-1 "
          type="text"
          placeholder="title"
        />
        <input
          name="description"
          className="text-lg p-1 "
          type="text"
          placeholder="description"
        />
        <button
          type="submit"
          className="bg-blue-400 p-2 outline-none rounded-sm hover:bg-blue-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Addtask;
