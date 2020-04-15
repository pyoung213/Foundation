import { expect } from "chai";
import { asyncFind } from "./asyncFind";

async function asyncFunc(item: any): Promise<boolean> {
    return await new Promise((resolve) => {
        resolve(item.id === 2);
    });
}

describe("find", () => {
    it("find with async function", async () => {
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

        const result = await asyncFind(array, asyncFunc);

        expect(result).to.eql({
            id: 2,
            a: false
        });
    });

    it("find with string shorthand", async () => {
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

        expect(await asyncFind(array, "a")).to.eql({
            id: 3,
            a: true
        });
    });

    it("find with object shorthand", async () => {
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

        const result = await asyncFind(array, {
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
