import { expect } from "chai";
import map from "./";

async function asyncFunc(n: number): Promise<string> {
    return await new Promise((resolve) => {
        resolve(String(n));
    });
}

describe("Map", () => {
    const array = [1, 2];

    it("should map values in collection to a new array", async () => {
        const object = {
            "a": 1,
            "b": 2
        };
        const expected = ["1", "2"];

        expect(await map(array, String)).to.eql(expected);
        expect(await map(object, String)).to.eql(expected);
    });

    it("should map async values in collection to a new array", async () => {
        const object = {
            "a": 1,
            "b": 2
        };
        const expected = ["1", "2"];

        expect(await map(array, asyncFunc)).to.eql(expected);
        expect(await map(object, asyncFunc)).to.eql(expected);
    });

    it("should work with string shorthands", async () => {
        const objects = [{
            "a": "x"
        }, {
            "a": "y"
        }];

        const result = await map(objects, "a");

        expect(result).to.eql(["x", "y"]);
    });
});
