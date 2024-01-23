import { FaUser } from "react-icons/fa";
import style from "./ClientRouteCard.module.scss"
import { LuMapPin } from "react-icons/lu";
import { ClientType } from "../../types/types";

const ClientRouteCard = ({client}:{
    client: ClientType
}) => {
    
    return (
        <div className={style.ClientRouteCard}>
            <div className={style.attributes}>

                <div className={style.attribute}>
                    <div className={style.icon}><FaUser/></div>
                    <div className={style.value}>{client.nome}</div>
                </div>

                <div className={style.attribute}>
                    <div className={style.icon}><LuMapPin/></div>
                    <div className={style.value}>
                        <span style={{fontWeight:"bolder",marginRight:3}}>x:</span>{client.x},
                        <span style={{fontWeight:"bolder",marginRight:3,marginLeft:3}}>y:</span>{client.y}
                    </div>
                </div>

            </div>
            
        </div>
    );
}
 
export default ClientRouteCard;