import isAsyncFunction from "../isAsyncFunction/isAsyncFunction";

const doAsyncLoop = async (object: object, asyncFunc: Function, options: MapOptions): Promise<Array<any>> => {
    let index = -1;
    const keys = Object.keys(object);

    if (options.isParallel) {
        const promises = keys.map((key) => asyncFunc(object[key], key, object));

        return Promise.all(promises);
    }

    const result = new Array(keys.length);
    while (++index < keys.length) {
        result[index] = await asyncFunc(object[keys[index]], keys[index], object);
    }

    return result;
};

function mapObject(object: object, asyncFunc: Function, options: MapOptions = {}): Promise<Array<any>> | any[] {
    if (isAsyncFunction(asyncFunc)) {
        return doAsyncLoop(object, asyncFunc, options);
    }

    let index = -1;
    const keys = Object.keys(object);
    const result = new Array(keys.length);

    while (++index < keys.length) {
        result[index] = asyncFunc(object[keys[index]], keys[index], object);
    }

    return result;

}

export default mapObject;
