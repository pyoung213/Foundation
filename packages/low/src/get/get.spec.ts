import { expect } from "chai";
import { get } from "./get";

describe("get", () => {
    it("should get one level", () => {
        const object = {
            foo: {
                bar: "bar"
            }
        };

        const result = get(object, "foo");

        expect(result).to.eql({
            bar: "bar"
        });
    });

    it("should get nested array value", () => {
        const object = {
            foo: [
                {
                    bar: "bar"
                }
            ]
        };

        const result = get(object, "foo[0].bar");

        expect(result).to.eql("bar");
    });

    it("should get nested object", () => {
        const object = {
            foo: {
                bar: "bar"
            }
        };

        const result = get(object, "foo.bar");

        expect(result).to.eql("bar");
    });

    it("should use fallback if doesn't exist", () => {
        const object = {
            foo: {
                bar: "bar"
            }
        };

        const result = get(object, "foo.bar2", "foobar");

        expect(result).to.eql("foobar");
    });
});
