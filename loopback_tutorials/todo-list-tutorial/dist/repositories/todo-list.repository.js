"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let TodoListRepository = class TodoListRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, todoRepositoryGetter) {
        super(models_1.TodoList, dataSource);
        this.todoRepositoryGetter = todoRepositoryGetter;
        this.todos = this.createHasManyRepositoryFactoryFor('todos', todoRepositoryGetter);
        this.registerInclusionResolver('todos', this.todos.inclusionResolver);
    }
    findByTitle(title) {
        return this.findOne({ where: { title } });
    }
};
TodoListRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.db')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('TodoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.DbDataSource, Function])
], TodoListRepository);
exports.TodoListRepository = TodoListRepository;
//# sourceMappingURL=todo-list.repository.js.map