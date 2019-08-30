import isObject from "../isObject/isObject";
import mapObject from "../_helpers/mapObject";
import mapArray from "../_helpers/mapArray";
import getAsyncFunc from "../_helpers/getAsyncFunc";

function map(arrayOrObject: Array<any> | object, property: any, options?: MapOptions): Promise<Array<any>> {
    const asyncFunc = getAsyncFunc(property);

    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, asyncFunc, options);
    }

    return mapArray(arrayOrObject as Array<any>, asyncFunc, options);
}

export default map;
