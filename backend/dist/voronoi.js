import Delaunator from "delaunator";
let coords = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4]
];
let _coords = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
const delaunay = new Delaunator(_coords);
console.log(delaunay.triangles.length);
//# sourceMappingURL=voronoi.js.map