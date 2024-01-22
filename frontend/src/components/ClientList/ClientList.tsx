import ClientCard from "../ClientCard/ClientCard";
import style from "./ClientList.module.scss"

const ClientList = () => {
    return (
        <div className={style.ClientList}>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
        </div>
    );
}
 
export default ClientList;