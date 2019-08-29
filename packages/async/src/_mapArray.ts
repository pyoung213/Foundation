async function _mapArray(array: any[], asyncFunc: Function): Promise<Array<any>> {
    let index = -1;
    const length = array == null ? 0 : array.length;
    const result = new Array(length);

    while (++index < length) {
        result[index] = asyncFunc(array[index], index, array);
    }

    return Promise.all(result);
}

export default _mapArray;