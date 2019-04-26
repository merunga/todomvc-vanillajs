import store from '../controller/store.js';
import { todoEliminar } from '../controller/todo.js';
import { renderUI } from './controller.js';

export const eliminarOnClick = (evt) => {
  // Obtenemos el elemento padre del boton, que engloba al todo
  // https://developer.mozilla.org/es/docs/Web/API/Element/closest
  const liElem = evt.target.closest('li');
  const id = parseInt(liElem.dataset.id);

  const todos = store.get('todos'); // Obtenemos los todos actuales
  const newTodos = todoEliminar(todos, id); // Eliminamos el todo
  store.set('todos', newTodos); // Guardamos el array actualizando en el store

  renderUI(); // Volvemos a pintar la vista para que se reflejen los cambios
};

/**
 * Crea el elemento del DOM para un `todo`
 *
 * @param todo Objecto con las propiedades `id` y `label`
 */
export default (todo) => {
  const liElem = document.createElement('li');
  liElem.setAttribute('data-id', todo.id);
  liElem.innerHTML = `
    <div class="view">
      <label>${todo.label}</label>
      <button class="destroy"></button>
    </div>
  `;

  // obtenemos el boton de eliminar
  const buttonElem = liElem.querySelector('button');
  // le asociamos una accion al evento 'click'
  buttonElem.addEventListener('click', eliminarOnClick);

  return liElem;
};
