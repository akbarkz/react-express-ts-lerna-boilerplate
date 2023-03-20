import type { Application } from 'express';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { PORT } from './config/env';
import { UriConstant } from './constants/UriConstant';
import { testRouter } from './routers';

class App {
	private static instance: App;

	private port: string = PORT;
	private globalPrefix: string = UriConstant.ROOT;

	public app: Application;

	private constructor() {
		this.app = express();
		this.setMiddleware();
	}

	public static getInstance(): App {
		if (!App.instance) {
			App.instance = new App();
		}
		return App.instance;
	}

	private setRoute() {
		this.app.use(UriConstant.TEST_ROOT, testRouter.getRouter());
	}

	private setMiddleware(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(morgan('dev'));
		this.app.use(helmet());
		this.setRoute();
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`📢 API 서버 시작: http://localhost:${this.port}${this.globalPrefix}`);
		});
	}
}

function bootstrap() {
	const server = App.getInstance();
	server.listen();
}

bootstrap();
