// src/components/WithAuth.jsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "@/libs/db";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push("/Pages/Admin");
        }
      });

      return () => unsubscribe();
    }, [router]);

    return <Component {...props} />;
  };
}