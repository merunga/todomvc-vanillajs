import store from '../controller/store.js';
import App from './App.js';

/**
 * Crea el elemento principal y lo inserta en el DOM dentro del elemeno #root
 */
export const renderApp = () => {
  // Obtenemos los todos desde el store
  const todos = store.get('todos');

  const app = App(todos);

  const root = document.getElementById('root');
  root.innerHTML = '';
  // lo insertamos en el elemento #root
  root.appendChild(app);
};
