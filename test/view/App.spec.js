import App from '../../src/view/App';

describe(App, () => {
  it('Se pinta correctamente', () => {
    const todos = [
      { id: 1, label: 'todo 1' },
      { id: 2, label: 'todo 2' },
    ];
    const appElem = App(todos);
    // Mas info de snapshots en https://jestjs.io/docs/es-ES/snapshot-testing
    expect(appElem.outerHTML).toMatchSnapshot();
  });
});
