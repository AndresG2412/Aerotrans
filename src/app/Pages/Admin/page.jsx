"use client";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/libs/db";
import { useState, useEffect } from "react";

export default function Admin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
        Correo: "",
        Contraseña: "",
        },
    });

    const onSubmit = async (data) => {
        setLoading(true);
        console.log("Intentando iniciar sesión con:", data); // Depuración
        
        try {
        // Verificación adicional de datos antes de enviar
        if (!data.Correo || !data.Contraseña) {
            throw new Error("Correo y contraseña son requeridos");
        }

        const userCredential = await signInWithEmailAndPassword(
            auth,
            data.Correo.trim(), // Añadido trim() para eliminar espacios
            data.Contraseña
        );
        
        console.log("Respuesta de Firebase:", userCredential); // Depuración
        
        Swal.fire({
            title: "INICIO EXITOSO!",
            text: "Acabas de iniciar como administrador!",
            timer: 3000,
            icon: "success",
            draggable: true,
        }).then(() => {
            router.push("/Pages/Admin/View");
        });
        } catch (error) {
        console.error("Error completo:", error); // Depuración detallada
        
        let errorMessage = "Error al iniciar sesión";
        if (error.code === "auth/invalid-credential") {
            errorMessage = "Correo o contraseña incorrectos";
        } else if (error.code === "auth/too-many-requests") {
            errorMessage = "Demasiados intentos fallidos. Intenta más tarde";
        } else if (error.code === "auth/invalid-email") {
            errorMessage = "Formato de correo electrónico inválido";
        } else if (error.message.includes("network")) {
            errorMessage = "Error de conexión. Verifica tu internet";
        }
        
        Swal.fire({
            title: "ERROR",
            text: errorMessage,
            icon: "error",
            confirmButtonText: "OK",
        });
        } finally {
        setLoading(false);
        }
    };

  return (
    <div className="h-screen bg-[url('/ImgAdmin/bg-login.png')] bg-cover bg-center">
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-6 md:w-2/4 py-8 rounded-lg border-2 border-black shadow-2xl bg-[#F8F6F0] mx-auto"
        >
          <p className="text-center font-semibold tracking-wider text-2xl">
            PANEL ADMINISTRADOR
          </p>

          <div
            className={`relative h-11 mx-6 md:w-3/4 min-w-[200px] md:mx-auto ${
              errors.Correo ? "mb-6" : ""
            }`}
          >
            <input
              placeholder=""
              type="email"
              autoComplete="email" // Mejorado para autocompletado
              {...register("Correo", { 
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Correo electrónico inválido"
                }
              })}
              className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Correo Electrónico
            </label>
            {errors.Correo?.type === "required" && (
              <span className='text-red-500'>El correo es requerido!</span>
            )}
            {errors.Correo?.type === "pattern" && (
              <span className='text-red-500'>{errors.Correo.message}</span>
            )}
          </div>

          <div
            className={`relative h-11 mx-6 md:w-3/4 min-w-[200px] md:mx-auto ${
              errors.Contraseña ? "mb-6" : ""
            }`}
          >
            <input
              placeholder=""
              type="password"
              autoComplete="current-password" // Mejorado para autocompletado
              {...register("Contraseña", { 
                required: true,
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres"
                }
              })}
              className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Contraseña
            </label>
            {errors.Contraseña?.type === "required" && (
              <span className='text-red-500'>La contraseña es requerida!</span>
            )}
            {errors.Contraseña?.type === "minLength" && (
              <span className='text-red-500'>{errors.Contraseña.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="border-[1.5px] group font-semibold hover:duration-300 hover:bg-red-400 tracking-widest border-black w-1/3 mx-auto rounded-lg py-1 disabled:opacity-50"
          >
            <p className="group-hover:scale-110 group-hover:duration-300">
              {loading ? "CARGANDO..." : "INGRESAR"}
            </p>
          </button>
        </form>
      </div>
    </div>
  );
}