export function forEach(array: Array<any>, func: Function): void {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (func(array[index], index, array) === false) {
            break;
        }
    }
}
