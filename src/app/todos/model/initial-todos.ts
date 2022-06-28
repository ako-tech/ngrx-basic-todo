import { createTodo } from './create-todo';

export const initialTodos = [
  'Escribir escaleta',
  'Grabar Audio',
  'Crear Clips',
].map((description) => createTodo(description));
