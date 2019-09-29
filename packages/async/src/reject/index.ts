import filter from "../filter";
import getFindPredicate from "../_helpers/getFilterPredicate";
import filterObject from "../_helpers/filterObject";

function negate(predicate: Function) {
    return async (func: Function) => {
        return !(await predicate(func));
    };
}

function reject<T>(
    collection: Array<T>,
    predicate: Function | object | string
): Promise<Array<T>> {
    const predicateFunc = getFindPredicate(predicate);
    const func = Array.isArray(collection) ? filter : filterObject;

    return func(collection, negate(predicateFunc));
}

export default reject;
