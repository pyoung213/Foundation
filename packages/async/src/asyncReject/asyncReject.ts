import { asyncFilter } from "../asyncFilter/asyncFilter";
import { getPredicateFunction } from "../helpers/getPredicateFunction";
import { filterObject } from "../helpers/filterObject";

function negate(predicate: Function) {
    return async (func: Function) => {
        return !(await predicate(func));
    };
}

export function asyncReject<T>(
    collection: Array<T>,
    predicate: Function | object | string
): Promise<Array<T>> {
    const predicateFunc = getPredicateFunction(predicate);
    const func = Array.isArray(collection) ? asyncFilter : filterObject;

    return func(collection, negate(predicateFunc));
}
