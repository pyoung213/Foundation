import isObject from "../isObject/isObject";
import mapObject from "../_helpers/mapObject";
import mapArray from "../_helpers/mapArray";
import getAsyncFunc from "../_helpers/getAsyncFunc";

function map(arrayOrObject: Array<any> | object, property: any): Promise<Array<any>> {
    const asyncFunc = getAsyncFunc(property);

    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, asyncFunc);
    }

    return mapArray(arrayOrObject as Array<any>, asyncFunc);
}

export default map;
