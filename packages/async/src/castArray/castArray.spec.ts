import { expect } from "chai";
import castArray from "./";

describe("castArray", () => {
    it("should cast number", () => {
        const test = 1;
        expect(castArray(test)).to.eql([test]);
    });

    it("should cast object", () => {
        const test = {
            "a": 1
        };
        expect(castArray(test)).to.eql([test]);
    });

    it("should cast string", () => {
        const test = "string";
        expect(castArray(test)).to.eql([test]);
    });

    it("should return empty array for undefined", () => {
        const test = undefined;
        expect(castArray(test)).to.eql([]);
    });

    it("should return empty array for null", () => {
        const test = null;
        expect(castArray(test)).to.eql([]);
    });

    it("should return same array", () => {
        const test = ["foo"];
        expect(castArray(test)).to.eql(test);
    });
});
