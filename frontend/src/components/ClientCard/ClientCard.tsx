import { FaUser } from "react-icons/fa";
import style from "./ClientCard.module.scss"
import { MdOutlineMail } from "react-icons/md";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ClientType } from "../../types/types";
import AppContext from "../../contexts/AppContext";

const ClientCard = ({client}:{
    client: ClientType
}) => {

    const context = useContext(AppContext)
    const [deleteCheck,setDeleteCheck] = useState<boolean>(false)
    
    return (
        <div className={style.ClientCard}>
            <div className={style.attributes}>

                <div className={style.attribute}>
                    <div className={style.icon}><FaUser/></div>
                    <div className={style.description}>Nome</div>
                    <div className={style.value}>{client.nome}</div>
                </div>

                <div className={style.attribute}>
                    <div className={style.icon}><MdOutlineMail/></div>
                    <div className={style.description}>Email</div>
                    <div className={style.value}>{client.email}</div>
                </div>

                <div className={style.attribute}>
                    <div className={style.icon}><LuPhone/></div>
                    <div className={style.description}>Telefone</div>
                    <div className={style.value}>{client.telefone}</div>
                </div>

                <div className={style.attribute}>
                    <div className={style.icon}><LuMapPin/></div>
                    <div className={style.description}>Coordenadas</div>
                    <div className={style.value}>
                        <span style={{fontWeight:"lighter",marginRight:6}}>x:</span>{client.x}
                        <span style={{fontWeight:"lighter",marginRight:6,marginLeft:12}}>y:</span>{client.y}
                    </div>
                </div>

            </div>
            <div
            className={style.deleteButton}
            onClick={()=>{setDeleteCheck(!deleteCheck)}}
            style={deleteCheck?{backgroundColor:"var(--red)"}:{}}
            >
                <FaRegTrashCan/>
            </div>

            {deleteCheck &&
            <div className={style.deleteCheckBox}>
                <p>Deletar usuário?</p>
                <div className={style.buttons}>
                    <div
                    className={style.button}
                    onClick={()=>{ context.services.deleteClient(client.id) }}>
                        Sim
                    </div>
                    <div 
                    className={style.button}
                    onClick={()=>{ setDeleteCheck(false) }}>
                        Não
                    </div>
                </div>
            </div>
            }

        </div>
    );
}
 
export default ClientCard;