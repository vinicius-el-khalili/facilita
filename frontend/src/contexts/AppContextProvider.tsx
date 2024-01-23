import { ReactNode, useEffect, useState } from "react";
import AppContext from "./AppContext";
import { ClientType, CreateClientParameters } from "../types/types";
import { getClients } from "../services/getClients";
import { createClient } from "../services/createClient";
import { deleteClient } from "../services/deleteClient";

const AppContextProvider = ({children}:{children: ReactNode}) => {

    const [clients,setClients] = useState<ClientType[]|null>(null)
    const [clientsBackup,setClientsBackup] = useState<ClientType[]|null>(null)

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
        await getClients()

    }
    const _deleteClient = async (id: number) => {

        let _delete = await deleteClient(id)
        if (!_delete){ return }
        await getClients()

    }

    const _calculateRoutes = () => {}

    const filterClients = (str: string, option:string) => {

        if (str==""){
            setClients(clientsBackup)
            return
        }
        let filteredClients: ClientType[]
        switch (option){
            case "Nome":
                filteredClients = clients.filter(client => client.nome.includes(str))
                break
            case "Email":
                filteredClients = clients.filter(client => client.email.includes(str))
                break
            case "Telefone":
                filteredClients = clients.filter(client => client.telefone.includes(str))
                break
            case "Todos":
                filteredClients = clients.filter(client => 
                    client.nome.includes(str)||client.email.includes(str)||client.telefone.includes(str)
                )
                break
            default:
                break
        }
        if (!filteredClients) { return }
        setClientsBackup(clients)
        setClients(filteredClients)

    }

    useEffect(()=>{
        ;(async()=>{

            await _getClients()

        })();
    },[])

    return <AppContext.Provider value={{
        state: {
            clients, setClients
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