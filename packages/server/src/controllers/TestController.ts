import type { Request, Response } from 'express';
import { TestService } from '../services/TestService';

export class TestController {
	private testService: TestService;

	constructor() {
		this.testService = new TestService();
	}

	async getUsers(req: Request, res: Response) {
		const users = await this.testService.getUsers();
		return res.status(200).json(users);
	}
}
