import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json('Obteniendo un pedido especifico')
}

//ruta de verificacion de login administrador
export async function POST(req) {
    try {
        const { correo, contraseña } = await req.json();

        // Query para verificar si el correo y la contraseña coinciden
        const [rows] = await connection.execute(
            'SELECT * FROM admins WHERE correo = ? AND contra = ?',
            [correo, contraseña]
        );

        if (rows.length > 0) {
            // Usuario encontrado
            return NextResponse.json({ success: true, message: 'Login exitoso' }, { status: 200 });
        } else {
            // Usuario no encontrado
            return NextResponse.json({ success: false, message: 'Credenciales incorrectas' }, { status: 401 });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
    }
}

export function DELETE(){
    return NextResponse.json('Eliminando un pedido especifico')
}

export function PUT(){
    return NextResponse.json('Actualizando un pedido especifico')
}