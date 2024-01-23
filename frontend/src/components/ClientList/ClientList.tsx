import { useContext } from "react";
import ClientCard from "../ClientCard/ClientCard";
import Toolbar from '../Toolbar/Toolbar';
import style from "./ClientList.module.scss"
import AppContext from "../../contexts/AppContext";

const ClientList = () => {

    const context = useContext(AppContext)

    return (
        <div className={style.ClientList}>
            <h1>Clientes</h1>
            <Toolbar/>
            <div className={style.list}>
                {
                context.state.clients&&
                context.state.clients.map(client=>(
                    <ClientCard client={client} key={`$CC${client.id}`}/>
                ))
                }
            </div>
        </div>
    );
}
 
export default ClientList;