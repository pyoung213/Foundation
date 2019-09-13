const mapArray = (array: Array<any>, func: Function): Array<any> => {
    let index = -1;
    const length = array == null ? 0 : array.length;
    const result = new Array(length);

    while (++index < length) {
        result[index] = func(array[index], index, array);
    }

    return result;
};

export default mapArray;
