import { expect } from "chai";
import { find } from "./find";

describe("find", () => {
    it("find with function", () => {
        const array = [
            {
                id: 1,
                a: false
            },
            {
                id: 2,
                a: false
            },
            {
                id: 3,
                a: true
            }
        ];

        const result = find(array, (item: any) => item.id === 2);

        expect(result).to.eql({
            id: 2,
            a: false
        });
    });

    it("find with string shorthand", () => {
        const array = [
            {
                id: 1,
                a: false
            },
            {
                id: 2,
                a: false
            },
            {
                id: 3,
                a: true
            }
        ];

        expect(find(array, "a")).to.eql({
            id: 3,
            a: true
        });
    });

    it("find with object shorthand", () => {
        const array = [
            {
                id: 1,
                a: false
            },
            {
                id: 2,
                a: false
            },
            {
                id: 3,
                a: true
            },
            {
                id: 2,
                a: true,
                foobar: "bar"
            }
        ];

        const result = find(array, {
            id: 2,
            a: true
        });

        expect(result).to.eql({
            id: 2,
            a: true,
            foobar: "bar"
        });
    });
});
