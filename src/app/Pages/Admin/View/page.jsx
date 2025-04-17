"use client";

import withAuth from "@/app/Components/WithAuth";
import { auth } from "@/libs/db";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import Card from "@/app/Components/CompoAdmin/Card";

function AdminView() {
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
    
    return (
        <div className="mt-24 p-4">
            <h1 className="text-3xl font-bold mb-12 uppercase text-center">Bienvenido, Administrador</h1>

            <div className="grid grid-cols-2 gap-4">
                <button>
                    <Card ruta={"/Pages/Admin/View/Options/Pedidos"} titulo={"Pedidos"} imagen={"https://cdn-icons-png.flaticon.com/128/2666/2666436.png"}/>
                </button>
                <button>
                    <Card ruta={"/Pages/Admin/View/Options/Opiniones"} titulo={"Reseñas"} imagen={"https://cdn-icons-png.flaticon.com/128/2065/2065224.png"}/>
                </button>
                <button>
                    <Card ruta={"/Pages/Admin/View/Options/Mensajes"} titulo={"Mensajes"} imagen={"https://cdn-icons-png.flaticon.com/128/2756/2756321.png"}/>
                </button>
                <button onClick={handleLogout}>
                    <Card ruta={"/Pages/Admin"} titulo={"Salir"} imagen={"https://cdn-icons-png.flaticon.com/128/5565/5565704.png"}/>
                </button>
            </div>
        </div>
    );
}

export default withAuth(AdminView);
