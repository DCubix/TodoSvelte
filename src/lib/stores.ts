import { writable } from "svelte/store";

const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
export const todoStore = writable(storedTodos);
todoStore.subscribe(todos => {
    localStorage.setItem("todos", JSON.stringify(todos));
});

const maxID = storedTodos.reduce((max, todo) => Math.max(max, todo.id), 0);
export const globalID = writable(maxID + 1);