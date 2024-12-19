import { NextResponse } from "next/server";
import { conn } from "@/libs/db";

export async function POST(req) {
    try {
        // Obtener los datos del cuerpo de la petición
        const { correo, nombre } = await req.json();

        // Mostrar los valores recibidos en consola
        console.log("Correo recibido:", correo);
        console.log("Nombre recibido:", nombre);

        // Consulta SQL para verificar si el correo y el nombre coinciden
        const [result] = await conn.query(
            'SELECT * FROM admins WHERE correo = ? AND nombre = ?',
            [correo, nombre]
        );

        // Mostrar el resultado de la consulta
        console.log("Resultado de la consulta SQL:", result);

        if (result && result.length > 0) {
            // Usuario encontrado
            return NextResponse.json({ success: true, message: 'Login exitoso' }, { status: 200 });
        } else {
            // Usuario no encontrado
            return NextResponse.json({ success: false, message: 'Credenciales incorrectas' }, { status: 401 });
        }

    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
    }
}
