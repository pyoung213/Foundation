import map from "../map";
import find from "../find";
import filter from "../filter";
import reject from "../reject";
import castArray from "../castArray";

type chainedFunctions = {
    operation: Function;
    func?: Function;
};

class ChainWrapper {
    private _chainedFunctions: Array<chainedFunctions>;
    private _value: Array<any> | object;

    constructor(value: any) {
        this._value = value;
        this._chainedFunctions = [];
    }

    public castArray = (): ChainWrapper => {
        this._chainedFunctions.push({
            operation: castArray
        });

        return this;
    };

    public map = (func: Function): ChainWrapper => {
        this._chainedFunctions.push({
            operation: map,
            func
        });

        return this;
    };

    public filter = (func: Function): ChainWrapper => {
        this._chainedFunctions.push({
            operation: filter,
            func
        });

        return this;
    };

    public find = (func: Function): ChainWrapper => {
        this._chainedFunctions.push({
            operation: find,
            func
        });

        return this;
    };

    public reject = (func: Function): ChainWrapper => {
        this._chainedFunctions.push({
            operation: reject,
            func
        });

        return this;
    };

    public value = () => {
        let index = -1;
        const length = this._chainedFunctions.length;

        while (++index < length) {
            const chainedFunctions = this._chainedFunctions[index];
            this._value = chainedFunctions.operation(
                this._value,
                chainedFunctions.func
            );
        }

        return this._value;
    };
}

function chain(value: any): any {
    return new ChainWrapper(value);
}

export default chain;
