async function mapObject(object: object, asyncFunc: Function, options: MapOptions = {}): Promise<Array<any>> {
    let index = -1;
    const keys = Object.keys(object);
    const result = new Array(keys.length);

    if (options.isParallel) {
        while (++index < keys.length) {
            result[index] = asyncFunc(object[keys[index]], keys[index], object);
        }

        return Promise.all(result);
    }

    while (++index < keys.length) {
        result[index] = await asyncFunc(object[keys[index]], keys[index], object);
    }

    return result;
}

export default mapObject;
