import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

const initial = {
  input: "",
  todos: [
    { id: 1, text: "redux 기초 배우기", done: true },
    { id: 2, text: "리액트와 리덕스 사용하기", done: false },
  ],
};

const todos = handleActions(
  {
    // action.payload
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    // ({ ...state, input })
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    // ({
    //   ...state,
    //   todos: state.todos.concat(todo),
    // })
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    // ({
    //   ...state,
    //   todos: state.todos.map((todo) =>
    //     todo.id === id ? { ...todo, done: !todo.done } : todo
    //   ),
    // })
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
    // ({
    //   ...state,
    //   todos: state.todos.fliter((todo) => todo.id !== id),
    // })
  },
  initial
);

export default todos;
