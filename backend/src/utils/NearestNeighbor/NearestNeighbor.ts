
type nodeType = { x: number, y: number }
type nodeIndex = string
type graphType = { [key:nodeIndex]: nodeType }

function getGraph (
    nodes:nodeType[]
){

    let _graph:graphType = {}
    nodes.map( (node,index) => { _graph[index] = node })
    return _graph

}

function getDistance (
    node1:nodeType,
    node2:nodeType
){

    return Math.sqrt( (node1.x-node2.x)**2+(node1.y-node2.y)**2 )

}

function getNearestNeighbor (
    graph:graphType,
    index:nodeIndex,
    visitedIndexes:nodeIndex[]
){

    let minimumDistance:number = Infinity
    let nearestNode:nodeIndex|null = null
    let node:nodeType = graph[index]

    for (let _node_ of Object.values(graph)) {
        //pass
    }

}

const nodes = [
    {x:1,y:2},
    {x:3,y:4},
    {x:1,y:3},
    {x:2,y:2}
]
const graph = getGraph(nodes)
getNearestNeighbor(graph,"0",[])