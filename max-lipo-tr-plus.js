import createMaxLipoTrPlusModule from './find_min_global_m.js'

var Module = null;

class JsFunction {
    constructor(theFunc) {
        this.theFunc = theFunc;
    }
    bang(argsArray) {
        return this.theFunc(...argsArray); // unpack args Array and call function
    }
}

export async function maxLipoTrPlus(theFunction,
                                    lower_bounds,
                                    upper_bounds,
                                    max_calls) { 

    if (!Module) {
        Module = await createMaxLipoTrPlusModule();
    }

    // Create an instance of JsFunction with the Rosenbrock function
    const jsFunc = new JsFunction(theFunction);

    // Call the WebAssembly function
    const result = Module.max_lipo_tr_plus(jsFunc, lower_bounds, upper_bounds, max_calls);

    // Return the result as an object
    return { x: result.x, y: result.y };
}

