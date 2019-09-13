import { expect } from "chai";
import chain from ".";

describe("chain", () => {
    it("should chain functions", async () => {
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

        const result = chain(array)
            .find((item: any) => item.id === 2)
            .castArray()
            .map("id")
            .value();

        expect(result).to.eql([2]);
    });
});
