import {
    FETCH_TODOS,
    FETCH_SINGLE_TODO,
    UPDATE_TODO,
    TOGGLE_COMPLETE_TODO,
    DELETE_TODO,
    ADD_TODO,
} from "./types";
import axios from "axios";

export const getAllTodos = () => {
    return async (dispatch) => {
        const res = await axios.get(
            "http://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        return dispatch({
            type: FETCH_TODOS,
            payload: res.data,
        });
    };
};

export const getSingleTodo = (id) => {
    return {
        type: FETCH_SINGLE_TODO,
        payload: id,
    };
};
export const toggleTodoComplete = (id) => {
    return {
        type: TOGGLE_COMPLETE_TODO,
        payload: id,
    };
};

export const updateTodo = (id, title) => {
    return {
        type: UPDATE_TODO,
        payload: { id, title },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    };
};
