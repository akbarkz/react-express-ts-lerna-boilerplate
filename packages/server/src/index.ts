import { App } from './app';

function bootstrap() {
	const server = App.getInstance();
	server.listen();
}

bootstrap();
