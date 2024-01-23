import { ReactNode, useEffect, useState } from "react";
import AppContext from "./AppContext";
import { ClientRoutes, ClientType, CreateClientParameters } from "../types/types";
import { getClients } from "../services/getClients";
import { createClient } from "../services/createClient";
import { deleteClient } from "../services/deleteClient";
import { getRoutes } from "../services/getRoutes";

const AppContextProvider = ({children}:{children: ReactNode}) => {

    const [clients,setClients] = useState<ClientType[]|null>(null)
    const [clientsBackup,setClientsBackup] = useState<ClientType[]|null>(null)

    const [clientRoutes,setClientRoutes] = useState<ClientRoutes|null>(null)

    const _getClients = async () => {

        let _clients = await getClients()
        if (!_clients){ return }
        setClients(_clients)
        setClientsBackup(_clients)

    }
    const _createClient = async (client: CreateClientParameters) => {

        let _create = await createClient(
            client.nome,
            client.email,
            client.telefone,
            client.x,
            client.y,
        )
        if (!_create){ return }
        let _clients = await getClients()
        if (!_clients){ return }
        setClients(_clients)
        setClientsBackup(_clients)


    }
    const _deleteClient = async (id: number) => {

        let _delete = await deleteClient(id)
        if (!_delete){ return }
        let _clients = await getClients()
        if (!_clients){ return }
        setClients(_clients)
        setClientsBackup(_clients)


    }


    const _calculateRoutes = async () => {

        let _clientRoutes = await getRoutes()
        if (!_clientRoutes){ return }
        setClientRoutes(_clientRoutes)
        console.log(_clientRoutes)

    }

    const filterClients = (str: string, option:string) => {

        if (str==""){
            setClients(clientsBackup)
            return
        }
        let filteredClients: ClientType[]
        switch (option){
            case "Nome":
                filteredClients = clientsBackup.filter(client => client.nome.includes(str))
                break
            case "Email":
                filteredClients = clientsBackup.filter(client => client.email.includes(str))
                break
            case "Telefone":
                filteredClients = clientsBackup.filter(client => client.telefone.includes(str))
                break
            case "Todos":
                filteredClients = clientsBackup.filter(client => 
                    client.nome.includes(str)||client.email.includes(str)||client.telefone.includes(str)
                )
                break
            default:
                break
        }
        if (!filteredClients) { return }
        setClients(filteredClients)

    }

    useEffect(()=>{
        ;(async()=>{

            await _getClients()

        })();
    },[])

    return <AppContext.Provider value={{
        state: {
            clients, setClients,
            clientRoutes,setClientRoutes
        },
        services: {
            getClients: _getClients,
            createClient:_createClient,
            deleteClient:_deleteClient,
            calculateRoutes: _calculateRoutes,
        },
        actions: {
            filterClients
        }
    }}>
        {children}
    </AppContext.Provider>

}
export default AppContextProvider