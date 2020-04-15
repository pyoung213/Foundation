import { filter } from "../filter/filter";
import { getFindPredicate } from "../helpers/getFilterPredicate";
import { filterObject } from "../helpers/filterObject";

function negate(predicate: Function) {
    return (func: Function) => {
        return !predicate(func);
    };
}

export function reject<T>(
    collection: Array<T>,
    predicate: Function | object | string
): Array<T> {
    const predicateFunc = getFindPredicate(predicate);
    const func = Array.isArray(collection) ? filter : filterObject;

    return func(collection, negate(predicateFunc));
}
