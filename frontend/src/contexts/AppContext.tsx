import { createContext } from "react";

type AppContextTypes = {
    state: {
        msg: string
    },
}

const DEFAULT_VALUE: AppContextTypes = {
    state: {
        msg: "context!"
    }
}

const AppContext = createContext<AppContextTypes>(DEFAULT_VALUE)
export default AppContext