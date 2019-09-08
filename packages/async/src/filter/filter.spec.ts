import { expect } from "chai";
import filter from "./";

async function asyncFunc(item: any): Promise<boolean> {
    return await new Promise((resolve) => {
        resolve(item.id === 2);
    });
}

describe("filter", () => {
    it("filter with async function", async () => {
        const array = [{
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
        }];

        const result = await filter(array, asyncFunc);

        expect(result).to.eql([{
            id: 2,
            a: false
        }]);
    });

    it("filter with string shorthand", async () => {
        const array = [{
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
        }];

        expect(await filter(array, "a")).to.eql([{
            id: 3,
            a: true
        }]);
    });

    it("filter with object shorthand", async () => {
        const array = [{
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
        }];

        const result = await filter(array, {
            id: 2,
            a: true
        });

        expect(result).to.eql([{
            id: 2,
            a: true,
            foobar: "bar"
        }]);
    });
});
