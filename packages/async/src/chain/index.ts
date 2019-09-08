import map from "../map";
import find from "../find";
import mapParallel from "../mapParallel";
import filter from "../filter";
import reject from "../reject";
import castArray from "../castArray";

type chainedPromise = {
    operation: Function;
    func?: Function;
}

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
    }

    public map = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: map,
            func
        });

        return this;
    }

    public mapParallel = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: mapParallel,
            func
        });

        return this;
    }

    public filter = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: filter,
            func
        });

        return this;
    }

    public find = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: find,
            func
        });

        return this;
    }

    public reject = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: reject,
            func
        });

        return this;
    }

    public value = async () => {
        let index = -1;
        const length = this._chainedPromises.length;

        while (++index < length) {
            const chainedPromises = this._chainedPromises[index];
            this._value = await chainedPromises.operation(this._value, chainedPromises.func);
        }

        return this._value;
    }
}

function chain(value: any): any {
    return new ChainWrapper(value);
}

export default chain;
