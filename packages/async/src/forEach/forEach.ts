import isAsyncFunction from "../isAsyncFunction/isAsyncFunction";

async function doAsyncLoop(array: Array<any>, asyncFunc: Function): Promise<void> {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (await asyncFunc(array[index], index, array) === false) {
            break;
        }
    }
}

function forEach(array: Array<any>, asyncFunc: Function): Promise<void> | void {
    if (isAsyncFunction(asyncFunc)) {
        return doAsyncLoop(array, asyncFunc);
    }

    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (asyncFunc(array[index], index, array) === false) {
            break;
        }
    }
}

export default forEach;
