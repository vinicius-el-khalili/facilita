function getGraph(nodes) {
    let _graph = {};
    nodes.map((node, index) => { _graph[index] = node; });
    return _graph;
}
function getDistance(node1, node2) {
    return Math.sqrt((node1.x - node2.x) ** 2 + (node1.y - node2.y) ** 2);
}
function getNearestNeighbor(graph, index, visitedIndexes) {
    let minimumDistance = Infinity;
    let nearestNode = null;
    let node = graph[index];
    for (let _node_ of Object.values(graph)) {
        //pass
    }
}
const nodes = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 3 },
    { x: 2, y: 2 }
];
const graph = getGraph(nodes);
getNearestNeighbor(graph, "0", []);
export {};
//# sourceMappingURL=NearestNeighbor.js.map