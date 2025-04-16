import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/libs/db";
import { useRouter } from "next/navigation";

export default function LoaderPedido() {
    const [estado, setEstado] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const verificarEstado = async () => {
        const pedidoId = localStorage.getItem("pedidoId");

        if (!pedidoId) return; // No hay pedido guardado

        const pedidoRef = doc(db, "Pedidos", pedidoId);
        const docSnap = await getDoc(pedidoRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setEstado(data.estado);

            if (data.estado === "respondido") {
            router.push(`/Pages/Pedido/View/${pedidoId}`);
            } else {
            // Verifica cada 5 segundos si ya fue respondido
            const intervalo = setInterval(async () => {
                const nuevoSnap = await getDoc(pedidoRef);
                const nuevoEstado = nuevoSnap.data().estado;

                if (nuevoEstado === "respondido") {
                clearInterval(intervalo);
                router.push(`/Pages/Pedido/View/${pedidoId}`);
                }
            }, 5000);

            return () => clearInterval(intervalo);
            }
        }
        };

        verificarEstado();
    }, [router]); // ✅ solución: se agregó `router` como dependencia
    
    if (estado === "pendiente") {
        return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center flex-col gap-4 text-white">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
            </div>
            <p className="text-xl mt-4">Se está asignando un vehículo para ti...</p>
        </div>
        );
    }

    return null;
}
