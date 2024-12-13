"use client";

import { useForm } from "react-hook-form";

export default function PedidoForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/pedidos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                alert("¡Pedido enviado con éxito!");
            } else {
                const error = await response.json();
                alert("Hubo un problema al enviar el pedido.");
            }
        } catch (error) {
            alert("Error de conexión con el servidor.");
        }
    };

    return (
        <form
            className="mt-40 w-2/3 px-6 rounded-xl py-12 mx-auto formulario"
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* Campo Nombre */}
            <div className="form__group field">
                <input
                    type="text"
                    className="form__field"
                    placeholder="Nombre Completo"
                    {...register("nombre", {
                        required: "El nombre es obligatorio",
                        minLength: {
                            value: 8,
                            message: "El nombre debe tener al menos 8 caracteres",
                        },
                        maxLength: {
                            value: 50,
                            message: "El nombre no puede exceder los 50 caracteres",
                        },
                    })}
                />
                <label htmlFor="nombre" className="form__label">
                    Nombre Completo
                </label>
                {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
            </div>

            {/* Campo Teléfono */}
            <div className="form__group field">
                <input
                    type="text"
                    className="form__field"
                    placeholder="Teléfono"
                    {...register("telefono", {
                        required: "El teléfono es obligatorio",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "El teléfono solo puede contener números",
                        },
                        minLength: {
                            value: 10,
                            message: "El teléfono debe tener al menos 10 dígitos",
                        },
                        maxLength: {
                            value: 15,
                            message: "El teléfono no puede exceder los 15 dígitos",
                        },
                    })}
                />
                <label htmlFor="telefono" className="form__label">
                    Teléfono
                </label>
                {errors.telefono && <p className="text-red-500">{errors.telefono.message}</p>}
            </div>

            {/* Campo Dirección */}
            <div className="form__group field">
                <input
                    type="text"
                    className="form__field"
                    placeholder="Dirección"
                    {...register("direccion", {
                        required: "La dirección es obligatoria",
                        minLength: {
                            value: 8,
                            message: "La dirección debe tener al menos 8 caracteres",
                        },
                        maxLength: {
                            value: 50,
                            message: "La dirección no puede exceder los 50 caracteres",
                        },
                    })}
                />
                <label htmlFor="direccion" className="form__label">
                    Dirección
                </label>
                {errors.direccion && <p className="text-red-500">{errors.direccion.message}</p>}
            </div>

            {/* Campo Equipaje */}
            <div className="form__group field mt-4">
                <label htmlFor="equipaje" className="form__label">
                    Equipaje Pesado
                </label>
                <div className="form__options mt-4 flex gap-10">
                    <label>
                        <input
                            type="radio"
                            value="si"
                            {...register("equipaje", { required: "Debes seleccionar una opción" })}
                        />{" "}
                        Sí
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            {...register("equipaje", { required: "Debes seleccionar una opción" })}
                        />{" "}
                        No
                    </label>
                </div>
                {errors.equipaje && <p className="text-red-500">{errors.equipaje.message}</p>}
            </div>

            <button type="submit" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded" onClick={"./View"}>
                Pedir Carro
            </button>
        </form>
    );
}
