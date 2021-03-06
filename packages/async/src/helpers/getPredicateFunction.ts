import { isFunction, isObject, isString } from "foundation-low";

export function getPredicateFunction(
    predicate: Function | object | string | number
): Function {
    switch (true) {
        case isFunction(predicate):
            return predicate as Function;

        case isObject(predicate):
            return (item: object) => {
                let index = -1;
                const keys = Object.keys(predicate);
                const length = keys.length;

                while (++index < length) {
                    const key = keys[index];
                    if (!item[key] || item[key] !== predicate[key]) {
                        return false;
                    }
                }

                return true;
            };

        case isString(predicate):
            return (item: object) => {
                if (item[predicate as string] === true) {
                    return true;
                }

                return false;
            };

        default:
            return predicate as Function;
    }
}
