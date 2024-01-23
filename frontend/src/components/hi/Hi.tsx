import { useContext } from "react";
import ClientList from "../ClientList/ClientList";
import AppContext from "../../contexts/AppContext";
const Hi = () => {
    const context = useContext(AppContext)
    return (
        <>
        {context.state.msg}
        <ClientList/>
        </>
    );
}
 
export default Hi;