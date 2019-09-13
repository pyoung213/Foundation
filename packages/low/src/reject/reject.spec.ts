import { expect } from "chai";
import reject from ".";

describe("reject", () => {
    it("reject with function", () => {
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

        const result = reject(array, (item: any) => item.id === 2);

        expect(result).to.eql([
            {
                id: 1,
                a: false
            },
            {
                id: 3,
                a: true
            }
        ]);
    });

    it("reject with string shorthand", () => {
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

        expect(reject(array, "a")).to.eql([
            {
                id: 1,
                a: false
            },
            {
                id: 2,
                a: false
            }
        ]);
    });

    it("reject with object shorthand", () => {
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

        const result = reject(array, {
            id: 2,
            a: true
        });

        expect(result).to.eql([
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
        ]);
    });
});
