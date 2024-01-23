import { createContext } from "react";

type AppContextTypes = {
    state: {
        clients: any[]|null
    },
}

const DEFAULT_VALUE: AppContextTypes = {
    state: {
        clients: null
    }
}

const AppContext = createContext<AppContextTypes>(DEFAULT_VALUE)
export default AppContext