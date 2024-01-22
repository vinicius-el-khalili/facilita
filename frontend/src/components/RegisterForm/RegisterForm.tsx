import { useState } from "react";
import style from "./RegisterForm.module.scss"
const RegisterForm = () => {

    const [name,setName] = useState<string|null>(null)
    const [email,setEmail] = useState<string|null>(null)
    const [phone,setPhone] = useState<string|null>(null)
    const [x,setX] = useState<number|null>(null)
    const [y,setY] = useState<number|null>(null)

    const handleSubmit = () => {}

    return (
        <div className={style.RegisterForm}>

            <h2>Cadastrar Cliente</h2>

            <form onSubmit={handleSubmit}>

                <div className={style.inputField}>
                    <input
                    type="text"
                    placeholder="Nome"
                    value={name?name:""}
                    onChange={(e)=>{setName(e.target.value)}}
                    required
                    />
                </div>
                
                <div className={style.inputField}>
                    <input
                    type="text"
                    placeholder="Email"
                    value={email?email:""}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    />
                </div>

                <div className={style.inputField}>
                    <input
                    type="text"
                    placeholder="Telefone"
                    value={phone?phone:""}
                    onChange={(e)=>{setPhone(e.target.value)}}
                    required
                    />
                </div>

                <div className={style.coordinates}>
                    <p>Coordenadas</p>
                    <div className={style.inputs}>

                        <div className={style.coordinateInput}>
                            <input
                            type="number"
                            placeholder="X"
                            value={x?x:""}
                            onChange={(e)=>{setX(Number(e.target.value))}}
                            required
                            />
                        </div>

                        <div className={style.coordinateInput}>
                            <input
                            type="number"
                            placeholder="Y"
                            value={y?y:""}
                            onChange={(e)=>{setY(Number(e.target.value))}}
                            required
                            />
                        </div>

                    </div>
                    
                </div>

                <button
                className={style.submitButton}
                type="submit">
                    Cadastrar
                </button>

            </form>

        </div>
    );
}
 
export default RegisterForm;