import isObject from "../isObject/isObject";

function isFunction(value: any): boolean {
    if (!isObject(value)) {
        return false;
    }

    const tag = toString.call(value);

    return tag == "[object Function]" || tag == "[object AsyncFunction]"
    || tag == "[object GeneratorFunction]" || tag == "[object Proxy]";
}

export default isFunction;
