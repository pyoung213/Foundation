async function forEachAsync(array: Array<any>, asyncFunc: Function): Promise<void> {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (await asyncFunc(array[index], index, array) === false) {
            break;
        }
    }
}

export default forEachAsync;
