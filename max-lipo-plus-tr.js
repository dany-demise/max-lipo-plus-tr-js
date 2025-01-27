import createMaxLipoTrPlusModule from './find_min_global_o3.js'

var Module = null;

class JsFunction {
    constructor(func) {
        this.func = func;
        this.args = new Float32Array(func.length);
    }
    bang() {
        return this.func(...this.args); // unpack args Array and call function
    }
    setArg(i, arg) {
        this.args[i] = arg;
    }
}

export async function maxLipoPlusTr(theFunction,
                                    lower_bounds,
                                    upper_bounds,
                                    max_calls) { 

    if (!Module) {
        Module = await createMaxLipoTrPlusModule();
    }

    // Create an instance of JsFunction with the Rosenbrock function
    const jsFunc = new JsFunction(theFunction);

    // Call the WebAssembly function
    const result = await Module.max_lipo_plus_tr(jsFunc, lower_bounds, upper_bounds, max_calls);

    // Return the result as an object
    return { x: result.x, y: result.y };
}

