import { expect } from "chai";
import isAsyncFunction from "./isAsyncFunction";
import testHelpers from "../_helpers/testHelpers";

describe("isAsyncFunction", () => {
    it("should detect an async function.", () => {
        const test = async (): Promise<string> => {
            return "foo";
        };

        expect(isAsyncFunction(test)).to.be.true;
    });

    it("should return false for non-async functions.", () => {
        const promiseFunc = (): Promise<string> => {
            return new Promise(resolve => {
                resolve("foo");
            });
        };

        expect(isAsyncFunction(promiseFunc)).to.be.false;
        expect(isAsyncFunction(() => 0)).to.be.false;
        expect(isAsyncFunction(testHelpers.toArgs([1, 2, 3]))).to.be.false;
        expect(isAsyncFunction(true)).to.be.false;
        expect(isAsyncFunction(new Date)).to.be.false;
        expect(isAsyncFunction(new Error)).to.be.false;
        expect(isAsyncFunction({
            "foo": "bar"
        })).to.be.false;
        expect(isAsyncFunction(1)).to.be.false;
        expect(isAsyncFunction(/x/)).to.be.false;
        expect(isAsyncFunction("a")).to.be.false;
    });
});
