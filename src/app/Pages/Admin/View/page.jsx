"use client";

import withAuth from "@/app/Components/WithAuth";
import { auth } from "@/libs/db";
import { useRouter } from "next/navigation"
import Swal from "sweetalert2";

import Card from "@/app/Components/CompoAdmin/Card";

function AdminView() {
    const user = auth.currentUser;
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await auth.signOut();
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
            console.error("Error al cerrar sesión:", error);
            Swal.fire({
                title: "Ocurrió un error al cerrar sesión",
                text: "Parece algo inesperado! intenta de nuevo",
                timer: 2500,
                icon: "error",
                draggable: true,
            });
        }
    };

    if (!user) {
        return null; // Seguridad extra
    }

    const cartas = [
        ["/", "Pedidos"],
        ["/", "Reseñas"],
        ["/", "Mensajes"],
        ["/", "Salir"]
    ];

    return (
        <div className="mt-24 p-4">
            <button 
                onClick={handleLogout}
                className='fixed bottom-10 right-10 pointer border-1 border-white bg-red-400 py-2 px-4 rounded-lg tracking-wide font-semibold hover:bg-red-600 transition-colors duration-200'
            >
                CERRAR SESIÓN
            </button>

            <h1 className="text-2xl font-bold mb-2">Panel de Administración</h1>
            <p className="mb-6">Bienvenido, {user?.email}</p>

            {/* Renderizar cartas */}
            <div className="grid grid-cols-2 gap-10 w-2/4 mx-auto">
                {cartas.map(([ruta, titulo], index) => (
                    <Card key={index} ruta={ruta} titulo={titulo} imagen={null} />
                ))}
            </div>
        </div>
    );
}

export default withAuth(AdminView);
