"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTodoListController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoTodoListController = class TodoTodoListController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async getTodoList(id) {
        return this.todoRepository.todoList(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/todos/{id}/todo-list', {
        responses: {
            '200': {
                description: 'TodoList belonging to Todo',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.TodoList) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoTodoListController.prototype, "getTodoList", null);
TodoTodoListController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.TodoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.TodoRepository])
], TodoTodoListController);
exports.TodoTodoListController = TodoTodoListController;
//# sourceMappingURL=todo-todo-list.controller.js.map