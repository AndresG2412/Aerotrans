"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
    const pathname = usePathname(); // Detecta cambios en la ruta

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname} // Cambia la animación según la ruta
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
