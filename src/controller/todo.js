import { uuid } from './utils.js';

/**
 * Inserta un nuevo todo al final del original
 * @param {*} todos Array en donde insertar el nuevo todo
 * @param {*} label Label del nuevo todo
 */
export const todoInsertar = (todos, label) => {
  const todo = {
    id: uuid(),
    label,
  };
  return [
    ...todos,
    todo,
  ];
};

/**
 * Elimina un todo del array basado en el id
 * @param {*} todos Array de donde quitar el todo
 * @param {*} id Id del todo a eliminar
 */
export const todoEliminar = (todos, id) => (
  todos.filter(t => t.id !== id)
);
