import { Todo } from './todo.interface';

export function createTodo(description: string): Todo {
  return {
    id: generateId(),
    description,
    completed: false,
  };
}

// Just a plain simple id generator to showcase the app.
// DO NOT USE IN PROD
function generateId(): string {
  return String(Math.round(Date.now() * Math.random() * 9))
    .replace('1', 'e')
    .replace('3', 'a')
    .replace('7', 'c');
}
