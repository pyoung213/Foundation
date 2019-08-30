function isFunction(value: any): boolean {
    const tag = toString.call(value);

    return tag == "[object Function]" || tag == "[object AsyncFunction]"
    || tag == "[object GeneratorFunction]" || tag == "[object Proxy]";
}

export default isFunction;
