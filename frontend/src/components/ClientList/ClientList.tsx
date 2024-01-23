import { useContext, useEffect, useState } from "react";
import ClientCard from "../ClientCard/ClientCard";
import Toolbar from '../Toolbar/Toolbar';
import style from "./ClientList.module.scss"
import AppContext from "../../contexts/AppContext";

const ClientList = () => {

    const context = useContext(AppContext)
    const [key,setKey] = useState<number>(0)

    useEffect(()=>{

        setKey(prevKey=>prevKey+1)

    },[context.state.clients])

    return (
        <div className={style.ClientList} key={key}>
            <h1>Clientes {key}</h1>
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