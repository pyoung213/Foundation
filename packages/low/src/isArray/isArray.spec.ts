import { expect } from "chai";
import isArray from ".";

describe("isArray", () => {
    it("should detect an array.", () => {
        const test = [1, 2, 3];

        expect(isArray(test)).to.be.true;
    });

    it("should return false for non-arrays.", () => {
        expect(isArray(true)).to.be.false;
        expect(isArray(new Date())).to.be.false;
        expect(isArray(new Error())).to.be.false;
        expect(
            isArray({
                foo: "bar"
            })
        ).to.be.false;
        expect(isArray(1)).to.be.false;
        expect(isArray(/x/)).to.be.false;
        expect(isArray("a")).to.be.false;
    });
});
