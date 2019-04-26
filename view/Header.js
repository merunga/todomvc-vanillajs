import store from '../controller/store.js';
import { todoInsertar } from '../controller/todo.js';
import { renderUI } from './controller.js';

export const insertarOnEnter = (evt) => {
  // Es un ENTER ?
  if (evt.keyCode === 13) {
    const label = evt.target.value; // Obtenemos el valor del input
    if (label.trim()) { // si el input no esta vacio
      const todos = store.get('todos'); // Obtenemos los todos actuales
      const newTodos = todoInsertar(todos, label); // Insertamos el nuevo todo
      store.set('todos', newTodos); // Lo guardamos en el store

      renderUI(); // Volvemos a pintar la vista para que se reflejen los cambios
      document.querySelector('.new-todo').focus(); // Y volvemos a hacer foco en el input
    }
  }
};

/**
 * Crea el elemento del DOM de la cabecera
 */
export default () => {
  const header = document.createElement('header');
  header.setAttribute('class', 'header');
  header.innerHTML = `
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus="">
  `;

  // Obtenemos el elemento input
  const inputElem = header.querySelector('input');
  // Le asignamos una acccion al evento de 'tecla presionada'
  inputElem.addEventListener('keypress', insertarOnEnter);

  return header;
};
