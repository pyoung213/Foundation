import { isObject } from "foundation-low";
import mapObject from "../_helpers/mapObject";
import mapArray from "../_helpers/mapArray";
import getMapPredicate from "../_helpers/getMapPredicate";

function mapAsync(
    arrayOrObject: Array<any> | object,
    property: Function | string
): Promise<Array<any>> {
    const propertyFunc = getMapPredicate(property);

    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, propertyFunc, {
            isParallel: true
        });
    }

    return mapArray(arrayOrObject as Array<any>, propertyFunc, {
        isParallel: true
    });
}

export default mapAsync;
