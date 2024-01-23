
type nodeType = { x: number, y: number }
type nodeKey = string
type graphType = { [key:nodeKey]: nodeType }

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
    currentKey:nodeKey,
    visitedKeys:nodeKey[]
){

    let minimumDistance:number = Infinity
    let nearestNode:nodeKey|null = null
    let currentNode:nodeType = graph[currentKey]

    //console.log("--",currentKey)
    for ( const [key,node] of Object.entries(graph) ){

        if( key==currentKey || visitedKeys.includes(key) ){
            continue
        }
        let distance = getDistance(currentNode,node)
        if ( distance < minimumDistance ){
            minimumDistance = distance
            nearestNode = key
        }
        //console.log({currentKey,key,distance,minimumDistance,nearestNode})
    }

    return nearestNode

}

export function NNMethod (
    nodes:nodeType[]
){

    const graph = getGraph(nodes)
    let visitedKeys: nodeKey[] = []
    let currentKey:nodeKey = "0"
    let nextKey: nodeKey

    for ( let i=0; i<nodes.length; i++ ){
        nextKey = getNearestNeighbor(graph,currentKey,visitedKeys)
        visitedKeys.push(currentKey)
        currentKey = nextKey
    }

    console.log(visitedKeys.map(Number))
    return visitedKeys.map(Number)

}
