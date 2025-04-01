// src/components/WithAuth.jsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/libs/db";
import Loading from "@/app/Components/Loading"; // Asegúrate de tener un componente de carga

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push("/Pages/Admin");
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <Loading />; // Muestra un spinner mientras verifica
    }

    return <Component {...props} />;
  };
}