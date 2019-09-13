import filterObject from "../_helpers/filterObject";
import getFindPredicate from "../_helpers/getFilterPredicate";

function doFilter(collection: Array<any>, predicate: Function): Array<any> {
    let index = -1;
    let resIndex = 0;
    const length = collection.length;
    const result = [];

    while (++index < length) {
        const value = collection[index];
        if (predicate(value, index, collection)) {
            result[resIndex++] = value;
        }
    }

    return result;
}

function filter(
    collection: Array<any>,
    predicate: Function | object | string
): Array<any> {
    const predicateFunc = getFindPredicate(predicate);
    const func = Array.isArray(collection) ? doFilter : filterObject;

    return func(collection, predicateFunc);
}

export default filter;
