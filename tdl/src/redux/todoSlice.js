import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import TodoItem from "../components/TodoItem";
import axios from 'axios';

const baseURL = "http://localhost:5000/";

export const getTodoAsync = createAsyncThunk(
    'todos/getTodoAsync',
    async () => {
        try {
            const res = await axios.get(baseURL);
            console.log('uee', res);
        } catch (error) {
            console.error(error);
        }
    });

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async(payload) => {
        try {
            const res = await axios.post(`${baseURL}save`, {title: payload.title});
            console.log('addi?', res);
        }
        catch (error) {
            console.log('non fungo', error);
        }
    }
);

export const toggleCompleteAsync = createAsyncThunk(
    'todos/toggleCompleteAsync',
    async(payload) => {
        try {
            const res = await axios.get(`${baseURL}${payload._id}`, {completed: payload.completed});
            console.log('toggli?', res);
            console.log('completato?', payload.completed);
            console.log('id?', payload._id);

        }
        catch (error) {
            console.log('non togglo', error);
        }
    }
);

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async(payload) => {
        try {
            const res = await axios.post(`${baseURL}${payload._id}`);
            console.log('eliminato?', res);
        }
        catch (error) {
            console.log('non elimino', error);
        }
    }
);

// export const deleteTodoAsync = createAsyncThunk(
//     'todos/deleteTodoAsync',
//     async(payload) => {
//         const response = await fetch(
//             `http://localhost:7000/todos/${payload._id}`,
//             {
//                 method: 'DELETE',
//             }
//         );
//         if(response.ok) {
//             return { _id: payload._id };
//         }
//     }
// );

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { _id: 1, title: "todo1", completed: false },
        { _id: 2, title: "todo2", completed: false },
        { _id: 3, title: "todo3", completed: true },
    ],
    reducers: {
        addTodoAsync: (state, action) => {
            const newTodo = {
                // id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleCompleteAsync: (state, action) => {
            const index = state.findIndex(
                (todo) => todo._id === action.payload._id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodoAsync: (state, action) => {
            return state.filter((todo) => todo._id !== action.payload._id);
        },
    }
    //extraReducers: {
        // [getTodoAsync.fulfilled]: (state, action) => {
        //     return action.payload.todos;
        // },
        // [addTodoAsync.fulfilled]: (state, action) => {
        //     state.push(action.payload.todo);
        // },
        // [toggleCompleteAsync.fulfilled]: (state, action) => {
        //     const index = state.findIndex(
        //         (todo) => todo.id === action.payload.id
        //     );
        //     state[index].completed = action.payload.completed;
        // },
        // [deleteTodoAsync.fulfilled]: (state, action) => {
        //     return state.filter((todo) => todo._id !== action.payload._id);
        // },
    //}
});

export const {
    addTodo,
    toggleComplete,
    deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;