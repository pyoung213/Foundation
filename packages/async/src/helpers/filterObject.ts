import { asyncForEach } from "../asyncForEach/asyncForEach";

export async function filterObject(
    object: object,
    predicate: Function
): Promise<Array<any>> {
    const keys = Object(object).keys(object);
    const result = [] as Array<any>;

    await asyncForEach(keys, async (key: string) => {
        const value = object[key];
        if (await predicate(value, key, object)) {
            result.push(value);
        }
    });

    return result;
}
