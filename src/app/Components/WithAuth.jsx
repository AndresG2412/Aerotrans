// src/components/WithAuth.jsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/libs/db";
import Loading from "@/app/Components/Loading";
import { setPersistence, browserSessionPersistence, signOut } from "firebase/auth";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Configurar persistencia de sesión solo para la sesión actual del navegador
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
              router.push("/Pages/Admin");
            } else {
              setLoading(false);
            }
          });

          return () => unsubscribe();
        })
        .catch((error) => {
          console.error("Error setting persistence:", error);
          router.push("/Pages/Admin");
        });

      // Cerrar sesión cuando se cierre la pestaña/ventana
      const handleBeforeUnload = () => {
        signOut(auth).catch(error => {
          console.error("Error al cerrar sesión:", error);
        });
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [router]);

    if (loading) {
      return <Loading />;
    }

    return <Component {...props} />;
  };
}