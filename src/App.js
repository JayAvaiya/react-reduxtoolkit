import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/app/store";

// importing todo actions
import { addTodo, removeTodo, fetchUserAsync, fetchUserData } from "./redux/features/todo/todoSlice";

function App() {
  const todo = useSelector((state) => {
    return state.todo.todoList;
  });
  const dispatch = useDispatch();

  return (
    <div className="p-5 flex-col align-middle h-screen justify-center w-full">
      {todo?.map((item) => (
        <div key={item.id}>{JSON.stringify(item)}</div>
      ))}
      <div>
        <button className="rounded-md p-5 bg-lime-300 font-extrabold" onClick={() => dispatch(fetchUserData())}>
          Fetch User List
        </button>
      </div>
    </div>
  );
}

export default App;
