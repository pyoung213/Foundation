import ChainWrapper from "../_helpers/ChainWrapper";

function chain(value: any): any {
    return new ChainWrapper(value);
}

export default chain;
