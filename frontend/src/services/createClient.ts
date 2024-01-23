export const createClient = async (
    name: string,
    email: string,
    phone: string,
    x: number,
    y: number
) => {

    try {

        let url = `${import.meta.env.VITE_REACT_NODE_SERVER_URL}/add`

        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    
        let body = JSON.stringify({
            nome: name,
            email: email,
            telefone: phone,
            x: x,
            y: y
        })
    
        let response = await fetch(`${url}`, {
            method: "POST",
            headers,
            body
        })

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
    
        
    } catch {

        console.log(`@createClient: fetch fail`)
        return false

    }

}