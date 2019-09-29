import filterObject from "../_helpers/filterObject";
import getFindPredicate from "../_helpers/getFilterPredicate";

function doFilter<T>(collection: Array<T>, predicate: Function): Array<T> {
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

function filter<T>(
    collection: Array<T>,
    predicate: Function | object | string
): Array<T> {
    const predicateFunc = getFindPredicate(predicate);
    const func = Array.isArray(collection) ? doFilter : filterObject;

    return func(collection, predicateFunc);
}

export default filter;
