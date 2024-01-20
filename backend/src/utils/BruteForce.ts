type CoordinatesType = number[]
type GraphType = {
    [key: number]: CoordinatesType
}

function getGraph (
    coordinatesList:CoordinatesType[]
){

    let graph:GraphType = {}
    graph[0]=[0,0] // Origin
    coordinatesList.map((coordinates,index) => {
        graph[index+1]=coordinates
    })
    return graph
}

function getDistance (
    coordinates1:CoordinatesType,
    coordinates2:CoordinatesType,
){

    return Math.sqrt(
        (coordinates1[0] - coordinates2[0])**2 +
        (coordinates1[1] - coordinates2[1])**2
    )

}

function BruteForce (
    coordinatesList:CoordinatesType[]
){

    let N = coordinatesList.length
    let counter = 0
    for (let i=0; i<N; i++) {
        for (let j=i+1; j<N; j++) {
            
            counter ++
            console.log(counter,i,j)
            
        }
    }

}

const coordinatesList = [
    [ 1.1, 2.2 ],
    [ 2.1, 2.2 ],
    [ 3.1, 3.2 ],
    [ 4.1, 4.2 ],
    [ 5.1, 5.2 ],
    [ 5.1, 5.2 ],
    [ 5.1, 5.2 ],
]

BruteForce(coordinatesList)