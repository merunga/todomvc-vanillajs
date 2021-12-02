let todos = [
  {
    id: Date.now(),
    label: 'Un todo desde el store',
  },
];

export const renderApp = () => {
  // Creamos el elemento padre
  const appElem = document.createElement('section');
  appElem.setAttribute('class', 'todoapp');

  // Creamos cada uno de los elementos hijos

  // HEADER
  const headerElem = document.createElement('header');
  headerElem.setAttribute('class', 'header');
  headerElem.innerHTML = `
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus="">
  `;

  // Obtenemos el elemento input
  const inputElem = headerElem.querySelector('input');
  // Le asignamos una acccion al evento de 'tecla presionada'
  inputElem.addEventListener('keypress', (evt) => {
    // Es un ENTER ?
    if (evt.keyCode === 13) {
      const label = evt.target.value; // Obtenemos el valor del input
      if (label.trim()) { // si el input no esta vacio
        // Insertamos el nuevo todo
        const todo = {
          id: Date.now(), // creamos un id
          label,
        };
        todos = [
          ...todos,
          todo,
        ];

        renderApp(); // Volvemos a pintar la vista para que se reflejen los cambios
        document.querySelector('.new-todo').focus(); // Y volvemos a hacer foco en el input
      }
    }
  });

  // LISTA
  const todosElem = document.createElement('section');
  todosElem.setAttribute('class', 'main');

  const ulElem = document.createElement('div');
  ulElem.setAttribute('class', 'todo-list');

  todosElem.appendChild(ulElem);

  todos.forEach((todo) => {
    const todoElem = document.createElement('li');
    todoElem.setAttribute('data-id', todo.id);
    todoElem.innerHTML = `
      <div class="view">
        <label>${todo.label}</label>
        <button class="destroy"></button>
      </div>
    `;

    // obtenemos el boton de eliminar
    const buttonElem = todoElem.querySelector('button');
    // le asociamos una accion al evento 'click'
    buttonElem.addEventListener('click', (evt) => {
      // Obtenemos el elemento padre del boton, que engloba al todo
      // https://developer.mozilla.org/es/docs/Web/API/Element/closest
      const liElem = evt.target.closest('li');
      const id = parseInt(liElem.dataset.id);
      todos = todos.filter((t) => t.id !== id);

      renderApp(); // Volvemos a pintar la vista para que se reflejen los cambios
    });
    ulElem.appendChild(todoElem);
  });

  // FOOTER
  const footerElem = document.createElement('footer');
  footerElem.setAttribute('class', 'footer');
  footerElem.innerHTML = `<span class="todo-count"><strong>${todos.length}</strong> todo</span>`;

  // Los insertamos en el padre
  appElem.appendChild(headerElem);
  appElem.appendChild(todosElem);
  appElem.appendChild(footerElem);

  const root = document.getElementById('root');
  root.innerHTML = '';
  // lo insertamos en el elemento #root
  root.appendChild(appElem);
};
