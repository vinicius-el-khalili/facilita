import { Dispatch, SetStateAction, createContext } from "react";
import { ClientType, CreateClientParameters } from "../types/types";

type AppContextTypes = {
    state: {
        clients: ClientType[]|null
        setClients: Dispatch<SetStateAction<ClientType[]|null>>
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
        setClients: ()=>{}
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