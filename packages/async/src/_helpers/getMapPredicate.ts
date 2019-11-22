import { isString } from "foundation-low";

function getAsyncFunc(property: any): Function {
    switch (true) {
        case isString(property):
            return (item: object) => item[property];

        default:
            return property;
    }
}

export default getAsyncFunc;