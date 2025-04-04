"use client";

import withAuth from "@/app/Components/WithAuth";
import { auth } from "@/libs/db";
import { useRouter } from "next/navigation"
import Swal from "sweetalert2";

function AdminView() {
    const user = auth.currentUser;
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await auth.signOut()  // Usamos auth directamente
            Swal.fire({
                title: "Sesión cerrada correctamente",
                text: "Acabas de cerrar como administrador!",
                timer: 2500,
                icon: "success",
                draggable: true,
            }).then(() => {
                router.push("/Pages/Admin");
            });
        } catch (error) {
            console.error("Error al cerrar sesión:", error)
            Swal.fire({
                title: "Ocurrió un error al cerrar sesión",
                text: "Parece algo inesperado! intenta de nuevo",
                timer: 2500,
                icon: "error",
                draggable: true,
            })
        }
    }

    // Opcional: puedes agregar una verificación adicional aquí
    if (!user) {
        return null; // El HOC ya maneja la redirección, esto es por si acaso
    }

    return (
        <div className="mt-24">
            <button 
                onClick={handleLogout}
                className='fixed bottom-10 right-10 pointer border-1 border-white bg-red-400 py-2 px-4 rounded-lg tracking-wide font-semibold hover:bg-red-600 transition-colors duration-200'
            >
                CERRAR SESIÓN
            </button>
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <p>Bienvenido, {user?.email}</p>
        {/* Aquí va el contenido de tu panel de administración */}
        </div>
    );
}

// Asegúrate de que el export esté correctamente envuelto
export default withAuth(AdminView);