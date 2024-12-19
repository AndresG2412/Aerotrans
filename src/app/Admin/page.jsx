"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Para redirección

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:  JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                alert("Login exitoso");
                router.push('/src/app/Admin/Page'); // Redirige a la ruta deseada
            } else {
                alert(result.message); // Credenciales incorrectas
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error en el servidor");
        }
    };

    return (
        <div className="mt-40">
            <p>Bienvenido Administrador</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Correo Electrónico:</label>
                    <input 
                        {...register("correo", { required: "Correo es obligatorio" })} 
                        type="email" 
                        placeholder="Correo Electrónico" 
                    />
                    {errors.correo && <p>{errors.correo.message}</p>}
                </div>

                <div>
                    <label>Nombre:</label>
                    <input 
                        {...register("nombre", { required: "El nombre es obligatorio", minLength: 8 })} 
                        type="text" 
                        placeholder="Nombre" 
                    />
                    {errors.nombre && <p>{errors.nombre.message}</p>}
                </div>

                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}
