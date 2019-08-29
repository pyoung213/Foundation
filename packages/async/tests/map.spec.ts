import { expect } from "chai";
// import Benchmark from "benchmark";
import map from "@/map";
// import forEach from "@/forEach";
// import DavidAsync from "../compare/async.js";

describe("Typescript usage suite", () => {
    const array = [1, 2];

    it('should map values in `collection` to a new array', async () => {
        const object = { 'a': 1, 'b': 2 },
            expected = ['1', '2'];

        // const suite = new Benchmark.Suite;

        // suite
        //     .add("Pat Async map", async () => {
        //         await map(array, String)
        //     })
        //     .add("Dav Async map", async () => {
        //         await DavidAsync.mapParallel(array, String);
        //     })
        //     .add("Pat Async forEach", async () => {
        //         await forEach(array, String);
        //     })
        //     .add("Dav Async forEach", async () => {
        //         await DavidAsync.eachSerial(array, String);
        //     })
        //     // add listeners
        //     .on('cycle', function (event: any) {
        //         console.log(String(event.target));
        //     })
        //     // run async
        //     .run({ 'async': true });

        expect(await map(array, String)).to.eql(expected);
        expect(await map(object, String)).to.eql(expected);
    });
});