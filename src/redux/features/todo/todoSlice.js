import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsersList } from "./todoApi";

const initialState = {
  todoList: [],
  isError: false,
};

export const fetchUserAsync = createAsyncThunk("todo/setTodo", async () => {
  const data = await fetchUsersList();
  return { todoList: data };
});

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      const selectedTodoId = action.payload.id;
      const filtedTodoList = state.todoList.filter((item) => item.id !== selectedTodoId);
      state.todoList = filtedTodoList;
    },
    setTodoList: (state, action) => {
      state.todoList = action.payload.todoList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserAsync.fulfilled, (state, action) => {
      state.todoList = action.payload.todoList;
    });
  },
});

export const { addTodo, removeTodo, setTodoList } = todoSlice.actions;

// asynchronous action
export const fetchUserData = () => async (dispatch, getState) => {
  const data = await fetchUsersList();
  console.log(data);
  dispatch(setTodoList({ todoList: data }));
};

export default todoSlice.reducer;
