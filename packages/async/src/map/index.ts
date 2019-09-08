import isObject from "../isObject";
import mapObject from "../_helpers/mapObject";
import mapArray from "../_helpers/mapArray";
import getMapPredicate from "../_helpers/getMapPredicate";

function mapAsync(arrayOrObject: Array<any> | object, property: Function | string): Promise<Array<any>> {
    const propertyFunc = getMapPredicate(property);

    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, propertyFunc);
    }

    return mapArray(arrayOrObject as Array<any>, propertyFunc);
}

export default mapAsync;
