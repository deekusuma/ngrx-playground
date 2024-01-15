import { patchState, signalStore, withMethods } from '@ngrx/signals';
import {
  addEntity,
  removeAllEntities,
  removeEntity,
  updateAllEntities,
  updateEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { Todo } from './todo.interface';

const TodoStore = signalStore(
  withEntities<Todo>(),
  withMethods((store) => ({
    async addTodo(todo: Todo) {
      patchState(store, addEntity(todo));
    },

    async removeTodoById(id: number) {
      patchState(store, removeEntity(id));
    },

    async setFinished(id: number, finished: boolean) {
      patchState(store, updateEntity({ id, changes: { finished: finished } }));
    },

    async setAllFinished(finished: boolean) {
      patchState(store, updateAllEntities({ finished: finished }));
    },

    async removeAllTodos() {
      patchState(store, removeAllEntities());
    },
  }))
);
