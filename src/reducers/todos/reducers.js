import {
  FETCH_TODOS,
  FETCH_SINGLE_TODO,
  UPDATE_TODO,
  TOGGLE_COMPLETE_TODO,
  DELETE_TODO,
  ADD_TODO,
} from "./types";

const initialState = {
  loading: true,
  todos: [],
  todo: {},
  deleted: false,
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: false,
        deleted: false,
        todos: [...action.payload],
      };
    case FETCH_SINGLE_TODO:
      return {
        ...state,
        loading: false,
        deleted: false,
        todo: state.todos.find((todo) => todo.id === action.payload),
      };
    case TOGGLE_COMPLETE_TODO:
      return {
        ...state,
        loading: false,
        deleted: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : { ...todo }
        ),
      };
    case ADD_TODO:
      return {
        ...state,
        loading: false,
        deleted: false,
        todos: [action.payload, ...state.todos],
      };
    case UPDATE_TODO:
      return {
        ...state,
        loading: false,
        deleted: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : { ...todo }
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        deleted: true,
      };
    default:
      return state;
  }
};

export default todoReducers;
