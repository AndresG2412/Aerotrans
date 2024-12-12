import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("listando los pedidos")
}

export function POST(){
    return NextResponse.json("creando el pedido")
}