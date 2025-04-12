"use client";

import withAuth from "@/app/Components/WithAuth";
import { auth } from "@/libs/db";
import { useRouter } from "next/navigation";
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
        return null;
    }

    const cartas = [
        ["/Pages/Admin/View/Options/Pedidos", "Pedidos", "https://cdn-icons-png.flaticon.com/128/2666/2666436.png"],
        ["/Pages/Admin/View/Options/Reseñas", "Reseñas", "https://cdn-icons-png.flaticon.com/128/2065/2065224.png"],
        ["/Pages/Admin/View/Options/Mensajes", "Mensajes", "https://cdn-icons-png.flaticon.com/128/2756/2756321.png"],
        ["/", "Salir", "https://cdn-icons-png.flaticon.com/128/5565/5565704.png"]
    ];

    return (
        <div className="mt-24 p-4">
            <h1 className="text-3xl font-bold mb-12 uppercase text-center">Bienvenido, Administrador</h1>

            <div className="grid grid-cols-2 gap-10 w-2/4 mx-auto">
                {cartas.map(([ruta, titulo, imagen], index) => (
                    <Card
                        key={index}
                        ruta={ruta}
                        titulo={titulo}
                        imagen={imagen}
                        onClick={titulo === "Salir" ? handleLogout : null}
                    />
                ))}
            </div>
        </div>
    );
}

export default withAuth(AdminView);
