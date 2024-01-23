import { ClientType } from "../types/types"

export const Routes = async () => {

    try {

        let url = `${import.meta.env.VITE_REACT_NODE_SERVER_URL}/routes`

        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }

        let response = await fetch(`${url}`, {
            method: "GET",
            headers
        })

        if (!response) {
            return false
        }

        let data: {
            clientPath: ClientType[],
            shortestDistance: number
        }
        switch(response.status){
            case 200:
                console.log(`@getClients: success`)
                data = await response.json()
                return data
            default:
                console.log(`@getClients: ${response.status}`)
                return false
        }

        
    } catch(error) {

        console.log(`@getClients: fetch fail`)
        return false

    }

}
