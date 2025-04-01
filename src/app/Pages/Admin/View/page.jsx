"use client";

import withAuth from "@/app/Components/WithAuth";
import { auth } from "@/libs/db";

function AdminView() {
  const user = auth.currentUser;

  // Opcional: puedes agregar una verificación adicional aquí
  if (!user) {
    return null; // El HOC ya maneja la redirección, esto es por si acaso
  }

  return (
    <div className="mt-24">
      <h1 className="text-2xl font-bold">Panel de Administración</h1>
      <p>Bienvenido, {user?.email}</p>
      {/* Aquí va el contenido de tu panel de administración */}
    </div>
  );
}

// Asegúrate de que el export esté correctamente envuelto
export default withAuth(AdminView);