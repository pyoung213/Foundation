import Benchmark from "benchmark";
import _ from "lodash";
import map from "../src/map";
import forEach from "../src/forEach";
import find from "../src/find";

const suite = new Benchmark.Suite;

const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10
};

const array = _.range(10);
const collection = [
    ...array.map(() => object),
    {
        foo: "bar"
    }
];

suite
    .add("Async map object", async () => {
        await map(object, "a");
    })
    .add("Lodash map object", () => {
        _.map(object, "a");
    })
    .add("Async map array", async () => {
        await map(array, String);
    })
    .add("Lodash map array", () => {
        _.map(array, String);
    })
    .add("Native map array", () => {
        array.map(String);
    })
    .add("Async forEach", async () => {
        await forEach(array, String);
    })
    .add("Lodash forEach", () => {
        _.forEach(array, String);
    })
    .add("Native forEach", () => {
        array.forEach(String);
    })
    .add("Async find", async () => {
        await find(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .add("Lodash find", () => {
        _.find(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .add("Native find", () => {
        collection.find((item: any) => {
            return item.foo === "bar";
        });
    })
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .run({
        "async": true
    });
