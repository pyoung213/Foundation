function isObject(value: any): boolean {
    const type = typeof value;

    return !Array.isArray(value) && value != null && type == "object";
}

export default isObject;
