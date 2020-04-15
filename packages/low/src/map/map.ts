import { isObject } from "../isObject/isObject";
import { mapObject } from "../helpers/mapObject";
import { mapArray } from "../helpers/mapArray";
import { getAsyncFunction } from "../helpers/getAsyncFunction";

export function map(
    arrayOrObject: Array<any> | object,
    property: Function | string
): Array<any> {
    const func = getAsyncFunction(property);

    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, func);
    }

    return mapArray(arrayOrObject as Array<any>, func);
}
