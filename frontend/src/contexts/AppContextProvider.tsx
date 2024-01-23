import { ReactNode } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({children}:{children: ReactNode}) => {

    const msg = "hello!"

    return <AppContext.Provider value={{
        state: {
            msg
        }
    }}>
        {children}
    </AppContext.Provider>

}
export default AppContextProvider