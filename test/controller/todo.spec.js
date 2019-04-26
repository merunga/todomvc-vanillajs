import { todoInsertar, todoEliminar } from '../../src/controller/todo';

// cargamos el mock de utils
// https://jestjs.io/docs/es-ES/manual-mocks#mocking-user-modules
jest.mock('../../src/controller/utils');

describe('todo controller', () => {
  it('agrega al final', () => {
    const todos = [{ id: 0, label: 'existente' }];
    const label = 'nuevo';
    const newTodos = todoInsertar(todos, label);

    expect(newTodos).toEqual([
      { id: 0, label: 'existente' },
      { id: 1, label: 'nuevo' },
    ]);
  });
  it('elimina', () => {
    const todos = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ];
    const newTodos = todoEliminar(todos, 2);
    expect(newTodos).toEqual([
      { id: 1 },
      { id: 3 },
    ]);
  });
});
