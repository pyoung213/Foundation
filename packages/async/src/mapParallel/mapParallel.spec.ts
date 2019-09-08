import { expect } from "chai";
import mapParallel from "./";

async function asyncFunc(n: number): Promise<string> {
    return await new Promise((resolve) => {
        resolve(String(n));
    });
}

describe("Map", () => {
    const array = [1, 2];

    it("should map parallel in collection to a new array", async () => {
        const object = {
            "a": 1,
            "b": 2
        };
        const expected = ["1", "2"];

        expect(await mapParallel(array, asyncFunc)).to.eql(expected);
        expect(await mapParallel(object, asyncFunc)).to.eql(expected);
    });
});
