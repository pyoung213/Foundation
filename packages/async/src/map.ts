import isObject from "./isObject";
import mapObject from "./_mapObject";
import mapArray from "./_mapArray";


function map(arrayOrObject: Array<any> | object, asyncFunc: Function): Promise<Array<any>> {
    if (isObject(arrayOrObject)) {
        return mapObject(arrayOrObject, asyncFunc);
    }

    return mapArray(arrayOrObject as Array<any>, asyncFunc);
}

export default map;
