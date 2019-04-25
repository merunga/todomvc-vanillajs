import Todos from '../../src/view/Todos';

describe(Todos, () => {
  it('Devuelve una lista de los todos', () => {
    const todos = [
      { id: 1, label: 'todo 1' },
      { id: 2, label: 'todo 2' },
    ];
    const todosElem = Todos(todos);
    expect(todosElem.querySelectorAll('li')).toHaveLength(2);
  });
});
