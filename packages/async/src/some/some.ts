import isAsyncFunction from "../isAsyncFunction/isAsyncFunction";
async function someAsync(array: Array<any>, predicate: Function): Promise<boolean> {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (await predicate(array[index], index, array)) {
            return true;
        }
    }

    return false;
}

function some(array: Array<any>, predicate: Function): Promise<boolean> | boolean {
    if (isAsyncFunction(predicate)) {
        return someAsync(array, predicate);
    }

    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (predicate(array[index], index, array)) {
            return true;
        }
    }

    return false;
}

export default some;
