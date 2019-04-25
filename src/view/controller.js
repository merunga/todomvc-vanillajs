import App from './App.js';

/**
 * Renderiza el elemento principal y lo inserta en el DOM
 */
export const renderUI = () => {
  // Por el momento comenzamos con todos estaticos
  const todos = [
    {
      id: 'id',
      label: 'Un todo',
    },
  ];

  const app = App(todos);

  const root = document.getElementById('root');
  root.innerHTML = '';
  // lo insertamos en el elemento #root
  root.appendChild(app);
};
