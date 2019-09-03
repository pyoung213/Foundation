/* eslint-disable @typescript-eslint/no-use-before-define */
export default {
    toArgs
};

function toArgs(array: Array<any>): Array<any> {
    // eslint-disable-next-line prefer-spread
    return (function() {
        // eslint-disable-next-line prefer-rest-params
        return arguments;
    }.apply(undefined, array));
}
