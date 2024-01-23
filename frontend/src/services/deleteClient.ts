export const deleteClient = async (id:number) => {

    try {

        let url = `${import.meta.env.VITE_REACT_NODE_SERVER_URL}/delete/${id}`

        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }

        let response = await fetch(`${url}`, {
            method: "DELETE",
            headers
        })

        if (!response) {
            return false
        }

        let data: any
        switch(response.status){
            case 200:
                console.log(`@deleteClient: success`)
                data = await response.json()
                return data
            default:
                console.log(`@deleteClient: ${response.status}`)
                return false
        }

        
    } catch(error) {

        console.log(`@deleteClient: fetch fail`)
        return false

    }

}
