import forEach from "../forEach";

function filterObject(object: object, predicate: Function): Array<any> {
    const keys = Object(object).keys(object);
    const result = [] as Array<any>;

    forEach(keys, (key: string) => {
        const value = object[key];
        if (predicate(value, key, object)) {
            result.push(value);
        }
    });

    return result;
}

export default filterObject;
