import { expect } from "chai";
import isString from "./";

describe("isString", () => {
    it("should detect a string", () => {
        expect(isString("a")).to.be.true;
    });

    it("should return false for non-strings", () => {
        expect(isString({
            "foo": "bar"
        })).to.be.false;
        expect(isString(/x/)).to.be.false;
        expect(isString(new Error)).to.be.false;
        expect(isString(new Date)).to.be.false;
        const asyncFunc = async (): Promise<string> => {
            return "foo";
        };
        expect(isString(asyncFunc)).to.be.false;

        const promiseFunc = (): Promise<string> => {
            return new Promise(resolve => {
                resolve("foo");
            });
        };
        expect(isString(promiseFunc)).to.be.false;
        expect(isString(() => 0)).to.be.false;
        expect(isString(true)).to.be.false;
        expect(isString(1)).to.be.false;
    });
});
