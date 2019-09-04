import { expect } from "chai";
import isFunction from "./isFunction";

describe("isFunction", () => {
    it("should detect function.", () => {
        const test = async (): Promise<string> => {
            return "foo";
        };

        expect(isFunction(test)).to.be.true;
        const promiseFunc = (): Promise<string> => {
            return new Promise(resolve => {
                resolve("foo");
            });
        };

        expect(isFunction(promiseFunc)).to.be.true;
        expect(isFunction(() => 0)).to.be.true;
    });

    it("should return false for non-functions.", () => {
        expect(isFunction(true)).to.be.false;
        expect(isFunction(new Date)).to.be.false;
        expect(isFunction(new Error)).to.be.false;
        expect(isFunction({
            "foo": "bar"
        })).to.be.false;
        expect(isFunction(1)).to.be.false;
        expect(isFunction(/x/)).to.be.false;
        expect(isFunction("a")).to.be.false;
    });
});
