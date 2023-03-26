import type { Router as IRouter } from 'express';
import Router from 'express';

import { UriConstant } from '../constants/UriConstant';
import { TodoController } from '../controllers/TodoController';

export class TodoRouter {
	constructor(
		private todoController: TodoController = new TodoController(),
		private router: IRouter = Router()
	) {}

	public getRouter() {
		this.router.get(
			UriConstant.GET_TODO_LIST,
			this.todoController.getTodo.bind(this.todoController)
		);
		this.router.get(
			UriConstant.GET_TODO_ITEM,
			this.todoController.getOneTodo.bind(this.todoController)
		);
		this.router.post(
			UriConstant.CREATE_TODO_ITEM,
			this.todoController.createTodo.bind(this.todoController)
		);
		this.router.put(
			UriConstant.UPDATE_TODO_ITEM,
			this.todoController.updateTodo.bind(this.todoController)
		);
		this.router.delete(
			UriConstant.DELETE_TODO_ITEM,
			this.todoController.deleteTodo.bind(this.todoController)
		);

		return this.router;
	}
}
