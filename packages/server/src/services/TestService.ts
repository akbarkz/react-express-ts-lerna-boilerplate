// import { TestModel } from '../models/TestModel'

export class TestService {
	constructor(private readonly testModel?: any /* model 생성 시 추가 */) {}

	public async getUsers() {
		// const users = await this.testModel.find();
		const users = [
			{ name: 'changyu', age: 26 },
			{ name: 'jebong', age: 26 }
		];
		return users;
	}
}
