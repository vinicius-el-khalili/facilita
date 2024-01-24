import { useContext } from "react";
import ClientCard from "../ClientCard/ClientCard";
import Toolbar from '../Toolbar/Toolbar';
import style from "./Page.module.scss"
import AppContext from "../../contexts/AppContext";
import ClientRoutes from "../ClientRoutes/ClientRoutes";

const Page = () => {

    const context = useContext(AppContext)

    return (
        <div className={style.Page}>
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
            <ClientRoutes/>
        </div>
    );
}
 
export default Page;