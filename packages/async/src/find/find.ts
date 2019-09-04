import getFindPredicate from "../_helpers/getFilterPredicate";

async function findAsync(collection: Array<object>, predicate: FindFunction | string | object): Promise<object | undefined> {
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
