import { isString } from "foundation-low"; 

export function getAsyncFunction(property: any): Function {
    switch (true) {
        case isString(property):
            return (item: object) => item[property];

        default:
            return property;
    }
}
