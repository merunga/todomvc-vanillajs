import store, { createStore } from '../../src/controller/store';
import Header from '../../src/view/Header';

// cargamos el mock de utils
// https://jestjs.io/docs/es-ES/manual-mocks#mocking-user-modules
jest.mock('../../src/controller/utils');

describe(Header, () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('Ejecuta `todoInsertar` al presionar ENTER', () => {
    createStore(); // inicializamos el store

    // Chequeamos que los todos comienzan vacios
    let todos = store.get('todos');
    expect(todos).toHaveLength(0);

    const headerElem = Header(); // creamos el header
    const inputElem = headerElem.querySelector('input'); // obtenemos el input
    inputElem.value = 'todo a insertar'; // lo llenamos con el valor a insertar
    inputElem.dispatchEvent(new Event('focus')); // hacemos foco en el input
    // y "presionamos" ENTER
    inputElem.dispatchEvent(new KeyboardEvent('keypress', { keyCode: 13 }));

    todos = store.get('todos'); // Obtenemos de nuevo los todos
    // Y chequeamos que se haya insertado
    expect(todos).toEqual([{ id: 1, label: 'todo a insertar' }]);
  });
  it('No inserta si el input esta vacio', () => {
    createStore(); // inicializamos el store

    const headerElem = Header(); // creamos el header
    const inputElem = headerElem.querySelector('input'); // obtenemos el input
    inputElem.value = ''; // lo dejamos vacio
    inputElem.dispatchEvent(new Event('focus')); // hacemos foco en el input
    // y "presionamos" ENTER
    inputElem.dispatchEvent(new KeyboardEvent('keypress', { keyCode: 13 }));

    const todos = store.get('todos'); // Obtenemos de nuevo los todos
    // Y chequeamos que nada se haya insertado
    expect(todos).toHaveLength(0);
  });
  it('No inserta si se presiona una tecla distinta a ENTER', () => {
    createStore(); // inicializamos el store

    const headerElem = Header(); // creamos el header
    const inputElem = headerElem.querySelector('input'); // obtenemos el input
    inputElem.value = 'todo a insertar'; // lo llenamos con el valor a insertar
    inputElem.dispatchEvent(new Event('focus')); // hacemos foco en el input
    // y "presionamos" otra tecla distinta a ENTER
    inputElem.dispatchEvent(new KeyboardEvent('keypress', { key: 'x' }));

    const todos = store.get('todos'); // Obtenemos de nuevo los todos
    // Y chequeamos que nada se haya insertado
    expect(todos).toHaveLength(0);
  });
});
