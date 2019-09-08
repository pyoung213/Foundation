import { expect } from "chai";
import isObject from "./";

describe("isObject", () => {
    it("should detect an objects", () => {
        expect(isObject({
            "foo": "bar"
        })).to.be.true;
        expect(isObject(/x/)).to.be.true;
        expect(isObject(new Error)).to.be.true;
        expect(isObject(new Date)).to.be.true;
    });

    it("should return false for non-objects", () => {
        const asyncFunc = async (): Promise<string> => {
            return "foo";
        };
        expect(isObject(asyncFunc)).to.be.false;

        const promiseFunc = (): Promise<string> => {
            return new Promise(resolve => {
                resolve("foo");
            });
        };
        expect(isObject(promiseFunc)).to.be.false;
        expect(isObject(() => 0)).to.be.false;
        expect(isObject(true)).to.be.false;
        expect(isObject(1)).to.be.false;
        expect(isObject("a")).to.be.false;
    });
});
