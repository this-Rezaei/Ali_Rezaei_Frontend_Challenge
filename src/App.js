import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import AllTasks from "./page/allTasks/allTasks";
import Addtask from "./page/addTask/addtask";
function App() {
  return (
    <div className="bg-gray-700 min-h-screen ">
      <h1 className="text-4xl font-bold  text-red-500 py-5 text-center">
        All Tasks !
      </h1>

      <p className=" font-bold text-blue-500 py-5 text-center">
        لطفا اول این فایل را مطالعه فرمایید README.md
      </p>

      <div className="flex items-center justify-center">
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/addTask" element={<Addtask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
