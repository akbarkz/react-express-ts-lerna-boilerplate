export class UriConstant {
	static readonly ROOT = '/api' as const;
	static readonly TEST_ROOT = `${this.ROOT}/test` as const;
}
