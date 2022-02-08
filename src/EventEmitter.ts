class EventEmitter<T extends Event> {
	handlers = new Map<string, Set<Function>>();

	addEventListener(name: string, handler: (e: Event) => any) {
		return this.on(name, handler);
	}

	on(name: string, handler: (e: Event) => any) {
		if (!this.handlers.has(name)) {
			this.handlers.set(name, new Set());
		}

		this.handlers.get(name)?.add(handler);
	}

	emit(name: string, event: T) {
		if (this.handlers.has(name)) {
			const handlers = this.handlers.get(name);

			if (handlers) {
				for (const handler of handlers.values()) {
					handler(event);
				}
			}
		}
	}
}

export default EventEmitter;
