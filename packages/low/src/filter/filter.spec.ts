import { expect } from "chai";
import { filter } from "./filter";

describe("filter", () => {
    it("filter with function", () => {
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

        const result = filter(array, (item: any) => item.id === 2);

        expect(result).to.eql([
            {
                id: 2,
                a: false
            }
        ]);
    });

    it("filter with string shorthand", () => {
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

        expect(filter(array, "a")).to.eql([
            {
                id: 3,
                a: true
            }
        ]);
    });

    it("filter with object shorthand", () => {
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

        const result = filter(array, {
            id: 2,
            a: true
        });

        expect(result).to.eql([
            {
                id: 2,
                a: true,
                foobar: "bar"
            }
        ]);
    });
});
