type CoordinatesType = { x:number, y: number }
type AdjacencyMatrix = number[][]

const getDistance = (coordinates1:CoordinatesType, coordinates2:CoordinatesType) => {
    console.log(coordinates1,coordinates2)
    return Math.sqrt(
        (coordinates1.x-coordinates2.x)**2 +
        (coordinates1.y-coordinates2.y)**2
    )
}

{`
    Seja D(i,j) a distância entre dois nós i,j e seja N o número de nós.
    Matriz adjacência:
    [
        [ D(0,0), D(0,1), D(0,2), ...,D(0,N) ],
        [ D(1,0), D(1,1), D(1,2), ...,D(1,N) ],
        ...
        [ D(N,0), D(N,1), D(N,2), ...,D(N,N) ],
    ]
`}

const getGraph = (coordinatesList:CoordinatesType[]) => {
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
    console.log(graph)
}


const coordinates = [
    {x:0, y:0},
    {x:0, y:1},
    {x:1, y:1},
    {x:1, y:0},
]
getGraph(coordinates)