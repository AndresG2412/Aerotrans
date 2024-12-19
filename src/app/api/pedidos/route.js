import { NextResponse } from "next/server";
import { conn } from "@/libs/db";

export function GET(){
    return NextResponse.json("listando los pedidos");
}

export async function POST(request){

    try {
        const {nombre, direccion, telefono, equipaje} = await request.json();

        const result = await conn.query('INSERT INTO pedidos SET ?' ,{
            nombre,
            direccion,
            telefono,
            equipaje
        });

        console.log(result);
        
        return NextResponse.json({
            id: result.insertId,
            nombre,
            direccion,
            telefono,
            equipaje
        });
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            message: error.message
        },{
            status: 500
        })
    }
}