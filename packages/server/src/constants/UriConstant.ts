export class UriConstant {
	static readonly ROOT = '/api' as const;

	static readonly TODO_ROOT = `${this.ROOT}/todo` as const;
	static readonly GET_TODO_LIST = `${this.TODO_ROOT}/list` as const;
	static readonly GET_TODO_ITEM = `${this.TODO_ROOT}/item` as const;
	static readonly CREATE_TODO_ITEM = `${this.TODO_ROOT}/create` as const;
	static readonly UPDATE_TODO_ITEM = `${this.TODO_ROOT}/update` as const;
	static readonly DELETE_TODO_ITEM = `${this.TODO_ROOT}/delete:id` as const;
}
