import { combineReducers } from "@reduxjs/toolkit";

// import all the reducers
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
});

export default rootReducer;
