import { FaUser } from "react-icons/fa";
import style from "./ClientCard.module.scss"
import { MdOutlineMail } from "react-icons/md";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";

const ClientCard = () => {
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
            <div className={style.deleteButton}>
                <FaRegTrashCan/>
            </div>

        </div>
    );
}
 
export default ClientCard;