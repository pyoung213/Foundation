import map from "../map/map";
import find from "../find/find";
import castArray from "../castArray/castArray";

type chainedPromise = {
    operation: Function;
    func?: Function;
}

export default class ChainWrapper {
    private _chainedPromises: Array<chainedPromise>;
    private _value: Array<any> | object;

    constructor(value: any) {
        this._value = value;
        this._chainedPromises = [];
    }

    public map = (func: Function): ChainWrapper => {
        this._chainedPromises.push({
            operation: map,
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

    public castArray = (): ChainWrapper => {
        this._chainedPromises.push({
            operation: castArray
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
