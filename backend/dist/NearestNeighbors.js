// util: calculate distance between nodes
const fastInverseSqrt = (x) => {
    let y = new Float32Array(1);
    let i = new Int32Array(y.buffer);
    y[0] = x;
    i[0] = 0x5f3759df - (i[0] >> 1); // Magic number for approximation
    y = new Float32Array(i.buffer);
    y = new Float32Array(y.buffer);
    y = new Float32Array(y.buffer);
    y[0] = y[0] * (1.5 - (0.5 * x * y[0] * y[0])); // Newton's method for refinement
    return 1.0 / y[0];
};
function fastDistance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    const squaredDistance = dx * dx + dy * dy;
    return squaredDistance * fastInverseSqrt(squaredDistance);
}
export {};
// util: turn input into adjacency matrix
//# sourceMappingURL=NearestNeighbors.js.map