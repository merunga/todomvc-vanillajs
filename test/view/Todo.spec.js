import Todo from '../../src/view/Todo';

describe(Todo, () => {
  it('Devuelve un elemento con la informacion correcta', () => {
    const todo = { id: 1, label: 'todo 1' };
    const todoElem = Todo(todo);

    expect(parseInt(todoElem.dataset.id)).toBe(todo.id);
    expect(todoElem.querySelector('label').innerHTML).toBe(todo.label);
  });
});
