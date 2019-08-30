import isString from "../isString/isString";
import isFunction from "../isFunction/isFunction";

function getAsyncFunc(property: any): Function {
    switch (true) {
        case isFunction(property):
            return property;

        case isString(property):
            return (item: object) => item[property];

        default:
            return property;
    }
}

export default getAsyncFunc;
