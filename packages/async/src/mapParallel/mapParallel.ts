import { isObject } from "foundation-low";
import { mapObject } from "../helpers/mapObject";
import { mapArray } from "../helpers/mapArray";
import { getAsyncFunction } from "../helpers/getAsyncFunction";

export function mapParallel(
    arrayOrObject: Array<any> | object,
    property: Function | string
): Promise<Array<any>> {
    const propertyFunc = getAsyncFunction(property);

    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, propertyFunc, {
            isParallel: true
        });
    }

    return mapArray(arrayOrObject as Array<any>, propertyFunc, {
        isParallel: true
    });
}
