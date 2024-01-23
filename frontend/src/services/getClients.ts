
export const getClients = async () => {

    try {

        let url = import.meta.env.VITE_REACT_NODE_SERVER_URL

        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }

        let response = await fetch(`${url}`, {
            method: "GET",
            headers
        })

        console.log(response)

        if (!response) {
            return false
        }

        let data: any
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
