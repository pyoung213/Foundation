function isAsyncFunction(value: any): boolean {
    const tag = toString.call(value);

    return tag == "[object AsyncFunction]" || tag == "[object GeneratorFunction]";
}

export default isAsyncFunction;
