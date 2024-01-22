import { FaSearch } from "react-icons/fa";
import style from "./SearchBox.module.scss"
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const SearchBox = () => {

    const [searchValue,setSearchValue] = useState<string|null>(null)
    const [searchFilter,setSearchFilter] = useState<string>("Todos")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSearchFilter(event.target.value)
    }

    const handleClearButton = () => {
        setSearchValue(null)
    }

    return (
        <div className={style.SearchBox}>

            <div className={style.icon}>
                <FaSearch/>
            </div>

            <input
            type="text"
            value={searchValue?searchValue:""}
            onChange={handleInputChange}
            >
            </input>

            <div
            className={style.clearButton}
            onClick={handleClearButton}
            >
                <IoClose/>
            </div>

            <select
            value={searchFilter}
            onChange={handleSelectChange}
            >
                <option value="Todos">Todos</option>
                <option value="Nome">Nome</option>
                <option value="Email">Email</option>
                <option value="Telefone">Telefone</option>
            </select>

        </div>
    );
}
 
export default SearchBox;