import ClientCard from "../ClientCard/ClientCard";
import style from "./ClientList.module.scss"

const ClientList = () => {
    return (
        <div className={style.ClientList}>
            <h1>Clientes</h1>
            <div className={style.list}>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
            </div>
        </div>
    );
}
 
export default ClientList;