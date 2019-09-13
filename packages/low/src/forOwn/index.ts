function forOwn(object: Record<string, any>, iteratee: Function): void {
    object = Object(object);
    Object.keys(object).forEach(key => iteratee(object[key], key, object));
}

export default forOwn;
