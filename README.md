## Example usage
```javascript
import { maxLipoTrPlus } from "./max-lipo-tr-plus.js"

// Rosenbrock function for 3D space
// Is minimized at x = 1, y = 1, z = 1
function rosenbrock3D(x, y, z) {
    return 100 * ((y - x**2)**2 + (z - y**2)**2) + (1 - x)**2 + (1 - y)**2;
}

const lower_bounds = [-100, -100, -100];
const upper_bounds = [100, 100, 100];
const max_calls = 250;

let result = await maxLipoTrPlus(rosenbrock3D, lower_bounds, upper_bounds, max_calls);

console.log(result);
// This gives :
// {
//   "x": [0.995011751207896, 0.9896402741130335, 0.9790070765474216], 
//   "y": 0.0001633625283124742
// }
```
