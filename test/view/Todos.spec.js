import store, { createStore } from '../../src/controller/store';
import Todos from '../../src/view/Todos';

describe(Todos, () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('Devuelve una lista de los todos', () => {
    const todos = [
      { id: 1, label: 'todo 1' },
      { id: 2, label: 'todo 2' },
    ];
    const todosElem = Todos(todos);
    expect(todosElem.querySelectorAll('li')).toHaveLength(2);
  });
  it('Elimina un todo al apretar el la "X"', () => {
    // inicializamos el store
    createStore({
      todos: [
        { id: 1, label: 'todo 1' },
        { id: 2, label: 'todo 2' },
        { id: 3, label: 'todo 3' },
      ],
    });

    let todos = store.get('todos');
    expect(todos).toHaveLength(3);

    let todosElem = Todos(todos); // creamos la lista de todos
    // obtenemos el boton eliminar del primer todo, con `id` === 1
    let buttonElem = todosElem.querySelector('[data-id="1"] button.destroy');
    buttonElem.dispatchEvent(new Event('click')); // hacemos "click" en el boton

    todos = store.get('todos'); // Obtenemos de nuevo los todos
    // Y chequeamos que se haya eliminado el primer todo
    expect(todos).toEqual([
      { id: 2, label: 'todo 2' },
      { id: 3, label: 'todo 3' },
    ]);

    // Y repetimos el proceso para el todo con `id` === 3
    todosElem = Todos(todos);
    buttonElem = todosElem.querySelector('[data-id="3"] button.destroy');
    buttonElem.dispatchEvent(new Event('click'));

    todos = store.get('todos');
    expect(todos).toEqual([
      { id: 2, label: 'todo 2' },
    ]);
  });
});
