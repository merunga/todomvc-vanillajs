import App from './App.js';

/**
 * Renderiza el html de la aplicacion
 */
export const renderUI = () => {
  // Por el momento comenzamos con todos estaticos
  const todos = [
    {
      id: 'id',
      label: 'Un todo',
    },
  ];

  // creamos el HTML en formator string dinamicamente usando los todos
  const app = App(todos);

  // lo insertamos en el elemento #root
  const root = document.getElementById('root');
  root.innerHTML = app;
};
