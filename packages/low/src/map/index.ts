import isObject from "../isObject";
import mapObject from "../_helpers/mapObject";
import mapArray from "../_helpers/mapArray";
import getMapPredicate from "../_helpers/getMapPredicate";

function map(
    arrayOrObject: Array<any> | object,
    property: Function | string
): Array<any> {
    const func = getMapPredicate(property);

    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, func);
    }

    return mapArray(arrayOrObject as Array<any>, func);
}

export default map;
