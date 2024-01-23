import { ReactNode, useEffect } from "react";
import AppContext from "./AppContext";
import { getClients } from "../services/getClients";
import { createClient } from "../services/createClient";

const AppContextProvider = ({children}:{children: ReactNode}) => {

    const clients = null

    useEffect(()=>{
        ;(async()=>{

            let _clients = await getClients()
            console.log(_clients)
            let _add = await createClient(
                "John Wick",
                "johnwick@gmail.com",
                "0123456987",
                10,
                10
            )
            console.log(_add)

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