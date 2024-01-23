import { ReactNode, useState } from "react";
import AppContext from "./AppContext";
import { ClientType } from "../types/types";

const AppContextProvider = ({children}:{children: ReactNode}) => {

    const [clients,setClients] = useState<ClientType[]|null>(null)

    const getClients = () => {}
    const createClient = () => {}
    const deleteClient = () => {}
    const calculateRoutes = () => {}

    const filterClients = () => {}

    return <AppContext.Provider value={{
        state: {
            clients, setClients
        },
        services: {
            getClients,
            createClient,
            deleteClient,
            calculateRoutes,
        },
        actions: {
            filterClients
        }
    }}>
        {children}
    </AppContext.Provider>

}
export default AppContextProvider