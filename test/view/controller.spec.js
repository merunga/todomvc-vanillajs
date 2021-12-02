import { createStore } from '../../src/controller/store';
import { renderApp } from '../../src/view';

describe('View controller', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('renderApp inserta app dentro del elemento #root', () => {
    createStore({
      todos: [
        {
          id: 'id',
          label: 'Un todo',
        },
      ],
    });
    renderApp();
    const rootElem = document.getElementById('root');
    // Mas info de snapshots en https://jestjs.io/docs/es-ES/snapshot-testing
    expect(rootElem.innerHTML).toMatchSnapshot();
  });
});
