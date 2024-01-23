import { useContext } from "react";
import style from "./ClientRoutes.module.scss"
import AppContext from "../../contexts/AppContext";
import ClientRouteCard from "../ClientRouteCard/ClientRouteCard";
import { CgClose } from "react-icons/cg";
const ClientRoutes = () => {

    const context = useContext(AppContext)

    return (
        <>
        {context.state.clientRoutes&&
        <div className={style.Wrapper} onClick={()=>{console.log("ala")}}>
            <div className={style.ClientRoutes}>

                <div className={style.header}>
                    <h1>MELHOR ROTA</h1>
                    <div className={style.distance}>Distância: {context.state.clientRoutes.shortestDistance.toFixed(2)}</div>
                </div>

                <div className={style.ClientRouteCards}>
                    {context.state.clientRoutes.clientPath.map((client,index)=>(
                    <ClientRouteCard client={client} key={`CRC${index}`}/>
                    ))}
                </div>

                <div
                className={style.closeButton}
                onClick={()=>{context.state.setClientRoutes(null)}}>
                    <CgClose/>
                </div>

            </div>
        </div>
        }
        </>
    );
}
 
export default ClientRoutes;