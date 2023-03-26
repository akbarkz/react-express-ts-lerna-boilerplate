import type { Request, Response } from 'express';
import { TodoService } from '../services/TodoService';

export class TodoController {
	constructor(private todoService: TodoService = new TodoService()) {}

	async getTodo(req: Request, res: Response) {
		try {
			const todo = await this.todoService.getTodoList();
			return res.status(200).json(todo);
		} catch (error) {
			return res.status(400).json({ message: 'error' });
		}
	}

	async getOneTodo(req: Request, res: Response) {
		try {
			const todo = await this.todoService.getTodoItem(req.query.id as string | undefined);
			return res.status(200).json(todo);
		} catch (error) {
			return res.status(400).json({ message: 'error' });
		}
	}

	async createTodo(req: Request, res: Response) {
		try {
			const newTodo = await this.todoService.createTodo(req.body.todoData);
			return res.status(200).json(newTodo);
		} catch (error) {
			return res.status(400).json({ message: 'error' });
		}
	}

	async updateTodo(req: Request, res: Response) {
		try {
			const updateTodo = await this.todoService.updateTodo(req.body.id, req.body.todoData);
			return res.status(200).json(updateTodo);
		} catch (error) {
			return res.status(400).json({ message: 'error' });
		}
	}

	async deleteTodo(req: Request, res: Response) {
		try {
			const deleteTodo = await this.todoService.deleteTodo(req.params.id);
			return res.status(200).json(deleteTodo);
		} catch (error) {
			return res.status(400).json({ message: 'error' });
		}
	}
}
