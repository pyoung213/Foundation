import Benchmark from "benchmark";
import _ from "lodash";
import map from "../src/map/map";
import forEach from "../src/forEach/forEach";

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

suite
    .add("Async map object", () => {
        map(object, "a");
    })
    .add("Lodash map object", () => {
        _.map(object, "a");
    })
    .add("Async map array", () => {
        map(array, String);
    })
    .add("Lodash map array", () => {
        _.map(array, String);
    })
    .add("Native map array", () => {
        array.map(String);
    })
    .add("Async forEach", () => {
        forEach(array, String);
    })
    .add("Lodash forEach", () => {
        _.forEach(array, String);
    })
    .add("Native forEach", () => {
        array.forEach(String);
    })
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .run({
        "async": true
    });
