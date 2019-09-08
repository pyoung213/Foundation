import { expect } from "chai";
import chain from "./";

async function asyncFunc(item: any): Promise<boolean> {
    return await new Promise((resolve) => {
        resolve(item.id === 2);
    });
}

describe("chain", () => {
    it("should chain functions", async () => {
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

        const result = await chain(array)
            .find((item: any) => item.id === 2)
            .castArray()
            .map("id")
            .value();

        expect(result).to.eql([2]);
    });

    it("should chain async functions", async () => {
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

        const result = await chain(array)
            .find(asyncFunc)
            .castArray()
            .map("id")
            .value();

        expect(result).to.eql([2]);
    });
});
