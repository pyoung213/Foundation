import isObject from "./isObject";
import mapObject from "./_mapObject";
import mapArray from "./_mapArray";

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
