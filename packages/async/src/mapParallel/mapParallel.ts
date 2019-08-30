import map from "../map/map";

function mapParallel(arrayOrObject: Array<any> | object, property: Function | string): Promise<Array<any>> | any[] {
    return map(arrayOrObject, property, {
        isParallel: true
    });
}

export default mapParallel;
