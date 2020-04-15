import { asyncMap } from "../asyncMap/asyncMap";
import { asyncFind } from "../asyncFind/asyncFind";
import { mapParallel } from "../mapParallel/mapParallel";
import { asyncFilter } from "../asyncFilter/asyncFilter";
import { asyncReject } from "../asyncReject/asyncReject";
import { castArray } from "foundation-low";

type chainedPromise = {
    operation: Function;
    func?: Function;
};

class ChainWrapper {
    private _chainedPromises: Array<chainedPromise>;
    private _value: Array<any> | object;

    constructor(value: any) {
        this._value = value;
        this._chainedPromises = [];
    }

    public castArray = (): ChainWrapper => {
        this._chainedPromises.push({
            operation: castArray
        });

        return this;
    };

    public map = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: asyncMap,
            func
        });

        return this;
    };

    public mapParallel = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: mapParallel,
            func
        });

        return this;
    };

    public filter = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: asyncFilter,
            func
        });

        return this;
    };

    public find = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: asyncFind,
            func
        });

        return this;
    };

    public reject = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: asyncReject,
            func
        });

        return this;
    };

    public value = async (): Promise<any> => {
        let index = -1;
        const length = this._chainedPromises.length;

        while (++index < length) {
            const chainedPromises = this._chainedPromises[index];
            this._value = await chainedPromises.operation(
                this._value,
                chainedPromises.func
            );
        }

        return this._value;
    };
}

export function asyncChain(value: any): any {
    return new ChainWrapper(value);
}
