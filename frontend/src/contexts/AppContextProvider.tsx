import { ReactNode, useEffect } from "react";
import AppContext from "./AppContext";
import { getClients } from "../services/getClients";

const AppContextProvider = ({children}:{children: ReactNode}) => {

    const clients = null

    useEffect(()=>{
        ;(async()=>{

            let _clients = await getClients()
            console.log(_clients)

        })();
    },[])

    return <AppContext.Provider value={{
        state: {
            clients
        }
    }}>
        {children}
    </AppContext.Provider>

}
export default AppContextProvider