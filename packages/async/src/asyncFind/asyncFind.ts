import { getPredicateFunction } from "../helpers/getPredicateFunction";

export async function asyncFind<T>(
    collection: Array<T>,
    predicate: Function | string | object
): Promise<T | undefined> {
    const asyncFunc = getPredicateFunction(predicate);

    let index = -1;
    const length = collection.length;
    let result = undefined;

    while (++index < length) {
        if (await asyncFunc(collection[index])) {
            result = collection[index];
            break;
        }
    }

    return result;
}
