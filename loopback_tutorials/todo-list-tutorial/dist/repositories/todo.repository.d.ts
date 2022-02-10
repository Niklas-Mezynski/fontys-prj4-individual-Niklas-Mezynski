import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Todo, TodoRelations, TodoList } from '../models';
import { TodoListRepository } from './todo-list.repository';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    protected todoListRepositoryGetter: Getter<TodoListRepository>;
    readonly todoList: BelongsToAccessor<TodoList, typeof Todo.prototype.id>;
    constructor(dataSource: DbDataSource, todoListRepositoryGetter: Getter<TodoListRepository>);
}
