Original DLib article on MaxLIPO+TR : [https://blog.dlib.net/2017/12/a-global-optimization-algorithm-worth.html](https://blog.dlib.net/2017/12/a-global-optimization-algorithm-worth.html)

Article on porting to Javascript : [https://dany-demise.github.io/blog/optimizing-a-javascript-function-with-dlibs-maxlipotr-global-optimization-algorithm-using-emscripten-and-wasm/](https://dany-demise.github.io/blog/optimizing-a-javascript-function-with-dlibs-maxlipotr-global-optimization-algorithm-using-emscripten-and-wasm/)

## Example usage
```javascript
import { maxLipoPlusTr } from "./max-lipo-plus-tr.js"

// Rosenbrock function for 3D space
// Is minimized at x0 = 1, x1 = 1, x2 = 1
function rosenbrock3D(x0, x1, x2) {
    return 100 * ((x1 - x0**2)**2 + (x2 - x1**2)**2) + (1 - x0)**2 + (1 - x1)**2;
}

const lower_bounds = [-100, -100, -100];
const upper_bounds = [100, 100, 100];
const max_calls = 300;

let result = await maxLipoPlusTr(rosenbrock3D, lower_bounds, upper_bounds, max_calls);

console.log(result);
// This gives :
// {
//   "x": [0.995011751207896, 0.9896402741130335, 0.9790070765474216], 
//   "y": 0.0001633625283124742
// }
```
