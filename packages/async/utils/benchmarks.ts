import Benchmark from "benchmark";
import _ from "lodash";
import map from "../src/map/map";
import mapParallel from "../src/mapParallel/mapParallel";
import forEach from "../src/forEach/forEach";

const suite = new Benchmark.Suite;

const array = [1, 2];

suite
    .add("Async map", async () => {
        await map(array, String);
    })
    .add("Async mapParallel", async () => {
        await mapParallel(array, String);
    })
    .add("Lodash map", async () => {
        _.map(array, String);
    })
    .add("Async forEach", async () => {
        await forEach(array, String);
    })
    .add("Lodash forEach", async () => {
        _.forEach(array, String);
    })
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .run({
        "async": true
    });
