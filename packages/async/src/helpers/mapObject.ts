import { MapOptions } from "../models/MapOptions";

export const mapObject = async (
    object: object,
    asyncFunc: Function,
    options: MapOptions = {}
): Promise<Array<any>> => {
    let index = -1;
    const keys = Object.keys(object);

    if (options.isParallel) {
        const promises = keys.map(key => asyncFunc(object[key], key, object));

        return Promise.all(promises);
    }

    const result = new Array(keys.length);
    while (++index < keys.length) {
        result[index] = await asyncFunc(
            object[keys[index]],
            keys[index],
            object
        );
    }

    return result;
};
