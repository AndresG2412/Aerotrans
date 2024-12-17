"use Client";

import { useForm } from "react-hook-form"

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return(
        <div className="mt-40">
            <p>Bienvedio Administrador</p>
            <form onSubmit={handleSubmit((data)=>{
                console.log(data);
                
            })}>

                <div>                    
                    <label>Correo Electronico:</label>
                    <input {...register("correo", {required: true})} type="email" placeholder="Correo Electronico" required/>
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input {...register("contraseña", {required: true, minLength: 8})} type="password" placeholder="Contraseña" required/>
                </div>
                
                <button type="submit">Ingresar</button>
                </form>
        </div>
    );
}