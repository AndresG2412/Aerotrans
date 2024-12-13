"use client";

import { useForm } from "react-hook-form";
import Button from "@/app/Components/Botton";
import enviar from "@/app/Images/Contacto/enviar.png"

export default function App() {

    const { register } = useForm();

    return (
        <form className="mt-40 w-2/3 px-6 rounded-xl py-12 mx-auto formulario">
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" required/>
                <label htmlFor="nombre" className="form__label">Nombre Completo</label>
            </div>

            <div className="form__group field">
                <input type="tel" className="form__field" placeholder="Name" required/>
                <label htmlFor="telefono" className="form__label">Telefono</label>
            </div>

            <div className="form__group field">
                <input type="tel" className="form__field" placeholder="Name" required/>
                <label htmlFor="direccion" className="form__label">Direccion</label>
            </div>

            <div className="form__group field mt-4">
            <label htmlFor="equipaje" className="form__label">Equipaje Pesado</label>
                <div className="form__options mt-4 flex gap-10">
                    <label>
                    <input type="radio" name="equipaje" value="si" required /> Sí
                    </label>
                    <label>
                    <input type="radio" name="equipaje" value="no" required /> No
                    </label>
                </div>
            </div>

            <Button titulo={"Enviar"} color={"green"} image={enviar}></Button>

        </form>
    );
}