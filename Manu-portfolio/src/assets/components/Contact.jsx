import React from "react";

export default function Contact({ text }) { 
    // Fallback por si 'text' viene undefined
    const content = text || { 
        text: "Contáctame", 
        name: "Nombre", 
        email: "Email", 
        comment: "Mensaje", 
        send: "Enviar Mensaje" 
    };

    const contactData = {
        submitUrl: "https://formsubmit.co/manupedrob@gmail.com",
        hiddenFields: [
            { name: "_next", value: "https://manupedrobcv.onrender.com/" }, 
            { name: "_captcha", value: "false" },
        ],
        formInputs: [
            {
                labelKey: "name",
                id: "name",
                type: "text",
                name: "name",
                placeholder: "Ej: Juan Pérez",
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                )
            },
            {
                labelKey: "email",
                labelFallback: "Email",
                id: "email",
                type: "email",
                name: "email",
                placeholder: "tu@email.com",
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                )
            },
        ],
        commentArea: {
            labelKey: "comment",
            id: "comments",
            name: "comments",
            placeholder: "¿En qué puedo ayudarte?",
        }
    };

    return (
        <section id="contacto" className="py-20 px-4 md:px-6 w-full max-w-6xl mx-auto">
            
            {/* Cabecera: Título en Honeydew (#f1faee) */}
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#f1faee] tracking-tight">
                    {content.text}
                </h2>
                <p className="text-[#a8dadc] text-lg">
                    ¿Tienes una propuesta o proyecto en mente? Hablemos.
                </p>
            </div>

            <div className="relative">
                {/* Decoración de fondo (Glow): De Strawberry Red a Steel Blue */}
               

                <form
                    // Fondo Glassmorphism sobre Deep Space Blue
                    className="relative bg-[#1d3557]/50 backdrop-blur-xl border border-[#a8dadc]/10 p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col gap-6"
                    action={contactData.submitUrl}
                    method="POST"
                >
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactData.formInputs.map((inputProps, idx) => (
                            <div key={idx} className="flex flex-col text-left group">
                                {/* Label: Por defecto Frosted Blue, al enfocar cambia a Strawberry Red */}
                                <label htmlFor={inputProps.id} className="text-sm font-semibold text-[#a8dadc] mb-2 ml-1 group-focus-within:text-[#e63946] transition-colors">
                                    {content[inputProps.labelKey] || inputProps.labelFallback}
                                </label>
                                
                                <div className="relative">
                                    {/* Icono */}
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#e63946] transition-colors">
                                        {inputProps.icon}
                                    </div>

                                    <input
                                        id={inputProps.id}
                                        name={inputProps.name}
                                        type={inputProps.type}
                                        required
                                        placeholder={inputProps.placeholder}
                                        // Input Styles: Borde rojo al enfocar
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#a8dadc]/20 text-[#f1faee] placeholder-gray-500 
                                                   focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946] 
                                                   transition-all duration-300 hover:bg-white/10"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Área de Texto */}
                    <div className="flex flex-col text-left group">
                        <label htmlFor={contactData.commentArea.id} className="text-sm font-semibold text-[#a8dadc] mb-2 ml-1 group-focus-within:text-[#e63946] transition-colors">
                            {content[contactData.commentArea.labelKey]}
                        </label>
                        <textarea
                            id={contactData.commentArea.id}
                            name={contactData.commentArea.name}
                            rows="5"
                            required
                            placeholder={contactData.commentArea.placeholder}
                            className="w-full p-4 rounded-xl bg-white/5 border border-[#a8dadc]/20 text-[#f1faee] placeholder-gray-500 resize-none
                                       focus:outline-none focus:border-[#e63946] focus:ring-1 focus:ring-[#e63946] 
                                       transition-all duration-300 hover:bg-white/10"
                        />
                    </div>

                    {/* Botón de envío: Strawberry Red (#e63946) */}
                    <button
                        type="submit"
                        className="mt-4 w-full md:w-auto md:self-end px-8 py-3.5 bg-[#e63946] hover:bg-[#d62839] 
                                   text-[#f1faee] font-bold rounded-xl shadow-lg shadow-[#e63946]/20
                                   transform hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <span>{content.send}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    {/* Hidden fields */}
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
        </section>
    );
}