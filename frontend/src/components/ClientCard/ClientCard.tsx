import { FaUser } from "react-icons/fa";
import style from "./ClientCard.module.scss"
import { MdOutlineMail } from "react-icons/md";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";

const ClientCard = () => {

    const [deleteCheck,setDeleteCheck] = useState<boolean>(false)
    const handleDeleteButton = () => {
        setDeleteCheck(!deleteCheck)
    }

    return (
        <div className={style.ClientCard}>
            <div className={style.attributes}>

                <div className={style.attribute}>
                    <div className={style.icon}><FaUser/></div>
                    <div className={style.value}>John Wick</div>
                </div>

                <div className={style.attribute}>
                    <div className={style.icon}><MdOutlineMail/></div>
                    <div className={style.value}>johnwick@gmail.com</div>
                </div>

                <div className={style.attribute}>
                    <div className={style.icon}><LuPhone/></div>
                    <div className={style.value}>0123456789</div>
                </div>

                <div className={style.attribute}>
                    <div className={style.icon}><LuMapPin/></div>
                    <div className={style.value}>(12.4, 17.8)</div>
                </div>

            </div>
            <div
            className={style.deleteButton}
            onClick={handleDeleteButton}
            style={deleteCheck?{backgroundColor:"var(--red)"}:{}}
            >
                <FaRegTrashCan/>
            </div>

            {deleteCheck &&
            <div className={style.deleteCheckBox}>
                <p>Deletar usuário?</p>
                <div className={style.buttons}>
                    <div className={style.button}>Sim</div>
                    <div className={style.button}>Não</div>
                </div>
            </div>
            }

        </div>
    );
}
 
export default ClientCard;