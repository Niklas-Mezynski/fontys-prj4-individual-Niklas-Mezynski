"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoController = class TodoController {
    constructor(todoRepository, geoService) {
        this.todoRepository = todoRepository;
        this.geoService = geoService;
    }
    async create(todo) {
        if (todo.remindAtAddress) {
            const geo = await this.geoService.geocode(todo.remindAtAddress);
            // ignoring because if the service is down, the following section will
            // not be covered
            /* istanbul ignore next */
            if (!geo[0]) {
                // address not found
                throw new rest_1.HttpErrors.BadRequest(`Address not found: ${todo.remindAtAddress}`);
            }
            // Encode the coordinates as "lat,lng" (Google Maps API format). See also
            // https://stackoverflow.com/q/7309121/69868
            // https://gis.stackexchange.com/q/7379
            todo.remindAtGeo = `${geo[0].y},${geo[0].x}`;
        }
        return this.todoRepository.create(todo);
    }
    async findById(id, filter) {
        return this.todoRepository.findById(id, filter);
    }
    async find(filter) {
        return this.todoRepository.find(filter);
    }
    async replaceById(id, todo) {
        await this.todoRepository.replaceById(id, todo);
    }
    async updateById(id, todo) {
        await this.todoRepository.updateById(id, todo);
    }
    async deleteById(id) {
        await this.todoRepository.deleteById(id);
    }
    async count(where) {
        return this.todoRepository.count(where);
    }
    async updateAll(todo, where) {
        return this.todoRepository.updateAll(todo, where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/todos', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Todo) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, {
                    title: 'NewTodo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/todos/{id}', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Todo, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/todos', {
        responses: {
            '200': {
                description: 'Array of Todo model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Todo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo PUT success',
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Todo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo PATCH success',
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Todo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo DELETE success',
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/todos/count', {
        responses: {
            '200': {
                description: 'Todo model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Todo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/todos', {
        responses: {
            '200': {
                description: 'Todo PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Todo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Todo, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "updateAll", null);
TodoController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.TodoRepository)),
    (0, tslib_1.__param)(1, (0, core_1.inject)('services.Geocoder')),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.TodoRepository, Object])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map