import { expect } from "chai";
import map from ".";

describe("Map", () => {
    const array = [1, 2];

    it("should map values in collection to a new array", () => {
        const object = {
            a: 1,
            b: 2
        };
        const expected = ["1", "2"];

        expect(map(array, String)).to.eql(expected);
        expect(map(object, String)).to.eql(expected);
    });

    it("should work with string shorthands", () => {
        const objects = [
            {
                a: "x"
            },
            {
                a: "y"
            }
        ];

        const result = map(objects, "a");

        expect(result).to.eql(["x", "y"]);
    });
});
