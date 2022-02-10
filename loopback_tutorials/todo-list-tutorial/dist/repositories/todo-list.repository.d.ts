import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { TodoList, TodoListRelations, Todo } from '../models';
import { TodoRepository } from './todo.repository';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id, TodoListRelations> {
    protected todoRepositoryGetter: Getter<TodoRepository>;
    readonly todos: HasManyRepositoryFactory<Todo, typeof TodoList.prototype.id>;
    constructor(dataSource: DbDataSource, todoRepositoryGetter: Getter<TodoRepository>);
    findByTitle(title: string): Promise<(TodoList & TodoListRelations) | null>;
}
