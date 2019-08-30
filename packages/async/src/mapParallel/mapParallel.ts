import map from "../map/map";

function mapParallel(arrayOrObject: Array<any> | object, asyncFunc: Function): Promise<Array<any>> {
    return map(arrayOrObject, asyncFunc, {
        isParallel: true
    });
}

export default mapParallel;
