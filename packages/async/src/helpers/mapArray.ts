import { MapOptions } from "../models/MapOptions";

export const mapArray = async (
    array: Array<any>,
    asyncFunc: Function,
    options: MapOptions = {}
): Promise<Array<any>> => {
    let index = -1;
    const length = array == null ? 0 : array.length;
    const result = new Array(length);

    if (options.isParallel) {
        while (++index < length) {
            result[index] = asyncFunc(array[index], index, array);
        }

        return Promise.all(result);
    }

    while (++index < length) {
        result[index] = await asyncFunc(array[index], index, array);
    }

    return result;
};
