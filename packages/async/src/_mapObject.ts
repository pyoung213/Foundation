async function _mapObject(object: object, asyncFunc: Function): Promise<Array<any>> {
    const keys = Object.keys(object)
    const result = new Array(keys.length)

    keys.forEach((key, index) => {
        result[index] = asyncFunc(object[key], key, object)
    })

    return Promise.all(result)
}

export default _mapObject;