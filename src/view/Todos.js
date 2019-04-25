import Todo from './Todo.js';

/**
 * Crea el elemento del DOM para la lista de todos
 *
 * @param todos Array de objetos con los todos existentes
 * Los todos deben tener `id` y `label`
 */
export default (todos) => {
  const todosElem = document.createElement('section');
  todosElem.setAttribute('class', 'main');

  const ulElem = document.createElement('div');
  ulElem.setAttribute('class', 'todo-list');

  todosElem.appendChild(ulElem);

  todos.forEach((t) => {
    const todoElem = Todo(t);
    ulElem.appendChild(todoElem);
  });
  return todosElem;
};
