import isObject from "../isObject/isObject";
import isFunction from "../isFunction/isFunction";
import isString from "../isString/isString";
import isAsyncFunction from "../isAsyncFunction/isAsyncFunction";

type FindFunction = (value: object, index?: number, obj?: object[]) => boolean;

function getPredicate(query: FindFunction | object | string | number): FindFunction {
    switch (true) {
        case isFunction(query):
            return query as FindFunction;

        case isObject(query):
            return (item: object) => {
                let index = -1;
                const keys = Object.keys(query);
                const length = keys.length;

                while (++index < length) {
                    const key = keys[index];
                    if (!item[key] || item[key] !== query[key]) {
                        return false;
                    }
                }

                return true;
            };

        case isString(query):
            return (item: object) => {
                if (item[query as string] === true) {
                    return true;
                }

                return false;
            };

        default:
            return query as FindFunction;
    }
}

async function doAsyncFind(collection: Array<object>, asyncFunc: FindFunction): Promise<object | undefined> {
    let index = -1;
    const length = collection.length;
    let result = undefined;

    while (++index < length) {
        if (await asyncFunc(collection[index])) {
            result = collection[index];
            break;
        }
    }

    return result;
}

function find(collection: Array<object>, query: FindFunction | object | string | number): object | undefined | Promise<object | undefined> {
    if (isAsyncFunction(query)) {
        return doAsyncFind(collection, query as FindFunction);
    }

    const predicate = getPredicate(query);

    let index = -1;
    const length = collection.length;
    let result;

    while (++index < length) {
        const item = collection[index];
        if (predicate(item)) {
            result = item;
            break;
        }
    }

    return result;
}

export default find;
