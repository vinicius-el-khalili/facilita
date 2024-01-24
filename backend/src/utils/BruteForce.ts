export type CoordinatesType = { x:number, y: number }
export type AdjacencyMatrix = number[][]
export type PathType = number[]

const getDistance = (coordinates1:CoordinatesType, coordinates2:CoordinatesType) => {
    return Math.sqrt(
        (coordinates1.x-coordinates2.x)**2 +
        (coordinates1.y-coordinates2.y)**2
    )
}

{`
    Considere uma rede de N pontos.
    Seja D(i,j) a distância entre dois pontos i,j e seja N o número de pontos na rede.
    Podemos representar a rede através de uma Matriz Adjacência, onde cada célula (i,j)
    da matriz representa a distância entre o de pontos (i,j):
    [
        [ D(0,0), D(0,1), D(0,2), ...,D(0,N) ],
        [ D(1,0), D(1,1), D(1,2), ...,D(1,N) ],
        ...
        [ D(N,0), D(N,1), D(N,2), ...,D(N,N) ],
    ]
`}

const getGraph = (coordinatesList:CoordinatesType[]):AdjacencyMatrix => {

    let graph: AdjacencyMatrix = []
    for (let i=0; i<coordinatesList.length; i++) {
        graph.push([])
        for (let j=0; j<coordinatesList.length; j++) {
            graph[i].push(0)
        }
    }
    for (let i=0; i<coordinatesList.length; i++) {
        for (let j=i+1; j<coordinatesList.length; j++) {
            graph[i][j] = graph[j][i] = getDistance(coordinatesList[i],coordinatesList[j])
        }
    }
    return graph

}

let shortestDistance = Infinity
let shortestPath: number[] = []

const BruteForce = (
    graph: AdjacencyMatrix,
    visitedNodes: number[],
    currentNode: number,
    totalPathDistance: number
) => {

    // Exit condition
    if (visitedNodes.length == graph.length){

        // Return to origin and compare paths
        if ( totalPathDistance+graph[currentNode][0] < shortestDistance){
            shortestDistance=totalPathDistance+graph[currentNode][0]
            shortestPath = [...visitedNodes,0]
        }
        return 
    }

    // Backtracking
    for (let candidateNode=0; candidateNode<graph.length; candidateNode++){
        if (!visitedNodes.includes(candidateNode)) {
            visitedNodes.push(candidateNode)
            BruteForce(
                graph,
                [...visitedNodes],
                candidateNode,
                totalPathDistance+graph[currentNode][candidateNode]
            )
            visitedNodes.pop()
        }
    }

}


export const executeBruteForceMethod = (coordinates:CoordinatesType[]) => {

    console.log("Calculating routes via Brute Force...")
    
    shortestDistance = Infinity
    shortestPath = []

    let graph = getGraph(coordinates)
    BruteForce(graph,[],0,0)

    console.log("Brute force method completed.")

    return { shortestPath, shortestDistance }

}


// test
// let g = [
//     [0,99,99,13],
//     [99,0,99,13],
//     [99,99,0,13],
//     [13,13,13,0],
// ]
// BruteForce(
//     g,
//     [],
//     0,
//     0
// )
// console.log({shortestPath,shortestDistance})