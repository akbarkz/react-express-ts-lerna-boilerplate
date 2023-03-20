import Router from 'express';
import type { Router as IRouter } from 'express';

import { TestController } from '../controllers/TestController';

export class TestRouter {
	private testController: TestController;
	private router: IRouter;

	constructor() {
		this.testController = new TestController();
		this.router = Router();
	}

	public getRouter() {
		this.router.get('/', this.testController.getUsers.bind(this.testController));

		return this.router;
	}
}
