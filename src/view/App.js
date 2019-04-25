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
  // Creamos cada una de las secciones
  const headerSrc = Header();
  const todosSrc = Todos(todos);
  const footerSrc = Footer(todos.length);

  // Creamos el elemento padre con template string
  const appSrc = `
    <section class="todoapp">
      ${headerSrc}
      ${todosSrc}
      ${footerSrc}
    </section>
  `;

  return appSrc;
};
