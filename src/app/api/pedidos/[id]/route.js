import { NextResponse } from "next/server";
import { conn } from "@/libs/db";

export function GET(){
    return NextResponse.json('Obteniendo un pedido especifico')
}

export function DELETE(){
    return NextResponse.json('Eliminando un pedido especifico')
}

export function PUT(){
    return NextResponse.json('Actualizando un pedido especifico')
}