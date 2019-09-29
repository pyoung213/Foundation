import getFindPredicate from "../_helpers/getFilterPredicate";

async function findAsync<T>(
    collection: Array<T>,
    predicate: Function | string | object
): Promise<T | undefined> {
    const asyncFunc = getFindPredicate(predicate);

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

export default findAsync;
