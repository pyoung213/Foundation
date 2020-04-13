import { getFindPredicate } from "../helpers/getFilterPredicate";

export function find<T>(
    collection: Array<T>,
    predicate: Function | string | object
): T | undefined {
    const func = getFindPredicate(predicate);

    let index = -1;
    const length = collection.length;
    let result = undefined;

    while (++index < length) {
        if (func(collection[index])) {
            result = collection[index];
            break;
        }
    }

    return result;
}
