import React from "react";

export default function Contact({ text }) { // ¡CORREGIDO! Asegurando que text se recibe como prop
    
    // Datos estáticos del formulario de contacto
    const contactData = {
        submitUrl: "https://formsubmit.co/manupedrob@gmail.com",
        hiddenFields: [
            { name: "_next", value: "https://manupedrobcv.onrender.com/" }, // URL a donde redirigir después del envío
            { name: "_captcha", value: "false" }, // Desactivar la verificación de captcha
        ],
        formInputs: [
            {
                labelKey: "name", // Clave para obtener el texto de 'text' (JSON)
                id: "name",
                type: "text",
                name: "name",
                placeholder: "Tu nombre", // Placeholder hardcodeado
            },
            {
                label: "E-mail", // Etiqueta directamente hardcodeada
                id: "email",
                type: "email",
                name: "email",
                placeholder: "tu@email.com", // Placeholder hardcodeado
            },
            // El campo de comentarios es un textarea, lo manejo aparte para simplificar
        ],
        commentArea: {
            labelKey: "comment", // Clave para obtener el texto de 'text' (JSON)
            id: "comments",
            name: "comments",
            placeholder: "Escribe tu mensaje...", // Placeholder hardcodeado
        }
    };

    return (
        <div
            id="contact"
            className="mt-12 mb-16 px-4 md:px-6 w-full max-w-6xl mx-auto text-center"
        >
            <h2 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-xl mb-8">
                {text.text}
            </h2>

            <form
                className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl 
                            text-white text-base md:text-lg flex flex-col gap-6 border border-white/20"
                action={contactData.submitUrl}
                method="POST"
            >
                
                {/* Campos de Nombre y Email generados dinámicamente */}
                {contactData.formInputs.map((inputProps, idx) => (
                    <div key={idx} className="flex flex-col text-left">
                        <label htmlFor={inputProps.id} className="font-semibold mb-1">
                            {/* Usa text para las etiquetas dinámicas */}
                            {inputProps.label || text[inputProps.labelKey]}
                        </label>
                        <input
                            id={inputProps.id}
                            name={inputProps.name}
                            type={inputProps.type}
                            required
                            placeholder={inputProps.placeholder}
                            className="p-3 rounded-lg bg-white text-black border border-gray-300 
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                ))}

                {/* Comentarios / Mensaje */}
                <div className="flex flex-col text-left">
                    <label htmlFor={contactData.commentArea.id} className="font-semibold mb-1">
                        {/* Usa text para la etiqueta de Comentario */}
                        {text[contactData.commentArea.labelKey]}
                    </label>
                    <textarea
                        id={contactData.commentArea.id}
                        name={contactData.commentArea.name}
                        rows="5"
                        placeholder={contactData.commentArea.placeholder}
                        className="p-3 rounded-lg bg-white text-black border border-gray-300 resize-none
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Botón centrado */}
                <div className="flex justify-center w-full">
                    <input
                        type="submit"
                        // Usa text para el valor del botón
                        value={text.send}
                        className="mt-2 py-3 px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                                 hover:scale-105 hover:brightness-110 transition-all duration-300
                                 text-white font-semibold rounded-xl shadow-lg cursor-pointer"
                    />
                </div>

                {/* Hidden fields generados dinámicamente */}
                {contactData.hiddenFields.map((field, idx) => (
                    <input 
                        key={idx} 
                        type="hidden" 
                        name={field.name} 
                        value={field.value} 
                    />
                ))}
            </form>
        </div>
    );
}