import Benchmark from "benchmark";
import _ from "lodash";
import { get } from "../src/get/get";
import { map } from "../src/map/map";
import { forEach } from "../src/forEach/forEach";
import { find } from "../src/find/find";
import { filter } from "../src/filter/filter";
import { reject } from "../src/reject/reject";

const suite = new Benchmark.Suite();

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
    .add("Low get object", () => {
        get(object, "h");
    })
    .add("Lodash get object", () => {
        _.get(object, "h");
    })
    .add("Low map object", () => {
        map(object, "a");
    })
    .add("Lodash map object", () => {
        _.map(object, "a");
    })
    .add("Low map array", () => {
        map(array, String);
    })
    .add("Lodash map array", () => {
        _.map(array, String);
    })
    .add("Low forEach", () => {
        forEach(array, String);
    })
    .add("Lodash forEach", () => {
        _.forEach(array, String);
    })
    .add("Low find", () => {
        find(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .add("Lodash find", () => {
        _.find(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .add("Low filter", () => {
        filter(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .add("Lodash filter", () => {
        _.filter(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .add("Low reject", () => {
        reject(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .add("Lodash reject", () => {
        _.reject(collection, (item: any) => {
            return item.foo === "bar";
        });
    })
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .run();
