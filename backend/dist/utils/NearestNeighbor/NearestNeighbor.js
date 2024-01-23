function getGraph(nodes) {
    let _graph = {};
    nodes.map((node, index) => { _graph[index] = node; });
    return _graph;
}
function getDistance(node1, node2) {
    return Math.sqrt((node1.x - node2.x) ** 2 + (node1.y - node2.y) ** 2);
}
function getNearestNeighbor(graph, currentKey, visitedKeys) {
    let minimumDistance = Infinity;
    let nearestNode = null;
    let currentNode = graph[currentKey];
    //console.log("--",currentKey)
    for (const [key, node] of Object.entries(graph)) {
        if (key == currentKey || visitedKeys.includes(key)) {
            continue;
        }
        let distance = getDistance(currentNode, node);
        if (distance < minimumDistance) {
            minimumDistance = distance;
            nearestNode = key;
        }
        //console.log({currentKey,key,distance,minimumDistance,nearestNode})
    }
    return nearestNode;
}
export function NNMethod(nodes) {
    const graph = getGraph(nodes);
    let visitedKeys = [];
    let currentKey = "0";
    let nextKey;
    for (let i = 0; i < nodes.length; i++) {
        nextKey = getNearestNeighbor(graph, currentKey, visitedKeys);
        visitedKeys.push(currentKey);
        currentKey = nextKey;
    }
    console.log(visitedKeys.map(Number));
    return visitedKeys.map(Number);
}
//# sourceMappingURL=NearestNeighbor.js.map