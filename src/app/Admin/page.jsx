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
        <div className="flex justify-center">
            <div className="md:w-1/3 w-3/4 h-auto bg-blue-950 mt-40 rounded-xl">
                <p className="font-bold text-white tracking-wider text-center pt-6 pb-2 md:text-3xl text-xl md">Administrador Aerotrans</p>
                <p className="font-bold text-white tracking-wide text-center pt-2 pb-4 text-xl">Iniciar Sección</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col text-center">
                        <label className="pt-6 pb-2 text-white text-xl">Correo Electrónico:</label>
                        <input 
                            {...register("correo", { required: "Correo es obligatorio" })} 
                            type="email" 
                            placeholder="Correo Electrónico"
                            className="py-2 rounded-xl px-4 border-2 border-black w-3/4 mx-auto"
                        />
                        {errors.correo && <p className="text-red-500 text-xl">{errors.correo.message}</p>}
                    </div>

                    <div className="flex flex-col text-center">
                        <label className="pt-6 pb-2 text-white text-xl">Nombre:</label>
                        <input 
                            {...register("nombre", { required: "El nombre es obligatorio", minLength: 8 })} 
                            type="text" 
                            placeholder="Nombre"
                            className="py-2 rounded-xl px-4 border-2 border-black w-3/4 mx-auto"
                        />
                        {errors.nombre && <p className="text-red-500 text-xl">{errors.nombre.message}</p>}
                    </div>

                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="text-xl my-6 font-semibold px-4 py-2 border-2 border-black rounded-xl bg-white"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
