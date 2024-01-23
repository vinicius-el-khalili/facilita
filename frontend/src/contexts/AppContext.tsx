import { Dispatch, SetStateAction, createContext } from "react";
import { ClientRoutes, ClientType, CreateClientParameters } from "../types/types";

type AppContextTypes = {
    state: {
        clients: ClientType[]|null
        setClients: Dispatch<SetStateAction<ClientType[]|null>>
        clientRoutes: ClientRoutes|null
        setClientRoutes: Dispatch<SetStateAction<ClientRoutes|null>>
    }
    services: {
        getClients: () => void
        createClient: (client: CreateClientParameters) => void
        deleteClient: (id:number) => void
        calculateRoutes: () => void
    }
    actions: {
        filterClients: (str: string, option:string) => void
    }
}

const DEFAULT_VALUE: AppContextTypes = {
    state: {
        clients: null,
        setClients: ()=>{},
        clientRoutes: null,
        setClientRoutes: ()=>{}
    },
    services: {
        getClients: () => {},
        createClient: () => {},
        deleteClient: () => {},
        calculateRoutes: () => {}
    },
    actions: {
        filterClients: () => {}
    }
}

const AppContext = createContext<AppContextTypes>(DEFAULT_VALUE)
export default AppContext