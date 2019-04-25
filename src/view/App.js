import Header from './Header.js';
import Todos from './Todos.js';
import Footer from './Footer.js';

/**
 * Crea el html de la app dinamicamente basandose
 * en los `todos` que se reciben como parametro
 *
 * @param todos Array de objetos con los todos existentes
 */
export default (todos) => {
  // Creamos el elemento padre
  const appElem = document.createElement('section');
  appElem.setAttribute('class', 'todoapp');

  // Creamos cada uno de los elementos hijos
  const headerElem = Header();
  const todosElem = Todos(todos);
  const footerElem = Footer(todos.length);

  // Los insertamos en el padre
  appElem.appendChild(headerElem);
  appElem.appendChild(todosElem);
  appElem.appendChild(footerElem);

  return appElem;
};
