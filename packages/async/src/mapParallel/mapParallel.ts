import isObject from "../isObject/isObject";
import mapObject from "../_helpers/mapObject";
import mapArray from "../_helpers/mapArray";

function mapParallel(arrayOrObject: Array<any> | object, asyncFunc: Function): Promise<Array<any>> {
    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, asyncFunc, {
            isParallel: true
        });
    }

    return mapArray(arrayOrObject as Array<any>, asyncFunc, {
        isParallel: true
    });
}

export default mapParallel;
