import isObject from "../isObject/isObject";

function isAsyncFunction(value: any): boolean {
    if (!isObject(value)) {
        return false;
    }

    const tag = toString.call(value);

    return tag == "[object AsyncFunction]" || tag == "[object GeneratorFunction]";
}

export default isAsyncFunction;
