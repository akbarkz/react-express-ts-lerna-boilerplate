import type { TodoData, TodoList } from 'common/types';

const dummyTodoList: TodoList = [
	{
		id: Date.now().toString(),
		todo: '밥먹기'
	},
	{
		id: Date.now().toString(),
		todo: '잠자기'
	}
];

export class TodoService {
	public getTodoList() {
		return dummyTodoList;
	}

	public getTodoItem(id?: string) {
		const index = dummyTodoList.findIndex(u => u.id === id);
		if (!dummyTodoList[index]) throw new Error('not vaild id');
		return dummyTodoList[index];
	}

	public createTodo(todoData: TodoData) {
		dummyTodoList.push(todoData);
		return todoData;
	}

	public updateTodo(id: string, todoData: TodoData) {
		const index = dummyTodoList.findIndex(u => u.id === id);
		if (index === -1) throw new Error('not vaild id');
		dummyTodoList[index] = { ...dummyTodoList[index], ...todoData };
		return todoData;
	}

	public deleteTodo(id: string) {
		const index = dummyTodoList.findIndex(u => u.id === id);
		if (index === -1) throw new Error('not vaild id');
		const todoData = dummyTodoList.filter(item => item.id !== id);
		return todoData;
	}
}
