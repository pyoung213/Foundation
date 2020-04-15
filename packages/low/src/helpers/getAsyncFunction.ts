import { isString } from "../isString/isString";

export function getAsyncFunction(property: any): Function {
    switch (true) {
        case isString(property):
            return (item: object) => item[property];

        default:
            return property;
    }
}
