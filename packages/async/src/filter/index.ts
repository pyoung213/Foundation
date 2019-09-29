import filterObject from "../_helpers/filterObject";
import getFindPredicate from "../_helpers/getFilterPredicate";

async function doFilter(
    collection: Array<any>,
    predicate: Function
): Promise<Array<any>> {
    let index = -1;
    let resIndex = 0;
    const length = collection.length;
    const result = [];

    while (++index < length) {
        const value = collection[index];
        if (await predicate(value, index, collection)) {
            result[resIndex++] = value;
        }
    }

    return result;
}

function filter<T>(
    collection: Array<T>,
    predicate: Function | object | string
): Promise<Array<T>> {
    const predicateFunc = getFindPredicate(predicate);
    const func = Array.isArray(collection) ? doFilter : filterObject;

    return func(collection, predicateFunc);
}

export default filter;
