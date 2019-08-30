function isObject(value: any): boolean {
    const type = typeof value;

    return !Array.isArray(value) && value != null && (type == "object" || type == "function");
}

export default isObject;
