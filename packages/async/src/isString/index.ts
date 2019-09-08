function isString(value: any): boolean {
    const type = typeof value;

    return type == "string" || (type == "object" && value != null && !Array.isArray(value) && toString.call(value) == "[object String]");
}

export default isString;
