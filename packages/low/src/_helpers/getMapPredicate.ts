import isString from "../isString";

function getMapPredicate(property: any): Function {
    switch (true) {
        case isString(property):
            return (item: object) => item[property];

        default:
            return property;
    }
}

export default getMapPredicate;
