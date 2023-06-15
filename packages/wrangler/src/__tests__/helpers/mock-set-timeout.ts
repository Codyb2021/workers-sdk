import type { SpyInstance } from "vitest";

let setTimeoutSpy: SpyInstance;

export function mockSetTimeout() {
	beforeEach(() => {
		setTimeoutSpy = vi
			.spyOn(global, "setTimeout")
			// @ts-expect-error we're using a very simple setTimeout mock here
			.mockImplementation((fn, _period) => {
				setImmediate(fn);
			});
	});

	afterEach(() => {
		setTimeoutSpy.mockRestore();
	});
}
