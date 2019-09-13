import getFindPredicate from "../_helpers/getFilterPredicate";

function find(
    collection: Array<object>,
    predicate: Function | string | object
): object | undefined {
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

export default find;
