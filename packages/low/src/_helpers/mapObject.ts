const mapObject = (object: object, func: Function): Array<any> => {
    let index = -1;
    const keys = Object.keys(object);

    const result = new Array(keys.length);
    while (++index < keys.length) {
        result[index] = func(object[keys[index]], keys[index], object);
    }

    return result;
};

export default mapObject;
