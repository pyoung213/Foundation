import { expect } from "chai";
import { asyncReject } from "./asyncReject";

async function asyncFunc(item: any): Promise<boolean> {
    return await new Promise(resolve => {
        resolve(item.id === 2);
    });
}

describe("reject", () => {
    it("reject with async function", async () => {
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

        const result = await asyncReject(array, asyncFunc);

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

    it("reject with string shorthand", async () => {
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

        expect(await asyncReject(array, "a")).to.eql([
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

    it("reject with object shorthand", async () => {
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

        const result = await asyncReject(array, {
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
