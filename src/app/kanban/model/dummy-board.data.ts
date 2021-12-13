import { KanbanBoard } from '.';

const toDoColumn = {
  id: 1,
  title: 'Pendiente',
  tasks: [
    { id: 7, description: 'Añade tareas.' }
  ],
};

const inProgressColumn = {
  id: 2,
  title: 'En Proceso',
  tasks: [
    { id: 3, description: 'Añade y arrastra tareas en progreso.' }
  ],
};

const completedColumn = {
  id: 3,
  title: 'Completadas',
  tasks: [
    { id: 1, description: 'Añade tareas finalizadas.' }
  ],
};

export const dummyBoard: KanbanBoard = {
  lists: [toDoColumn, inProgressColumn, completedColumn],
};
