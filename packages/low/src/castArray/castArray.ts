export function castArray<T>(item: T): Array<T> {
    if (!item) {
        return [];
    }

    return Array.isArray(item) ? item : [item];
}
