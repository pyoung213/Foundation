import filter from "../filter";
import getFindPredicate from "../_helpers/getFilterPredicate";
import filterObject from "../_helpers/filterObject";

function negate(predicate: Function) {
    return (func: Function) => {
        return !predicate(func);
    };
}

function reject(
    collection: Array<any>,
    predicate: Function | object | string
): Array<any> {
    const predicateFunc = getFindPredicate(predicate);
    const func = Array.isArray(collection) ? filter : filterObject;

    return func(collection, negate(predicateFunc));
}

export default reject;
