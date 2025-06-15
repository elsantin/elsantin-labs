// COMENTARIO ESTRATÉGICO: Script para el cuestionario, con envío AJAX y mensajes en página.
document.addEventListener('DOMContentLoaded', function() {
    
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const languageSwitcherBtn = document.getElementById('language-switcher');
    let currentLanguage = localStorage.getItem('q_language') || 'es'; 
    const formLanguageHiddenInput = document.getElementById('form_language_hidden');

    // COMENTARIO ESTRATÉGICO: Añadidas traducciones para mensajes de envío.
    const translations = {
        'es': {
            'q_site_title': 'Cuestionario de Proyecto Web - por elsantin',
            'q_logo_link_title': 'Volver al Dev Hub de elsantin',
            'q_title': 'Hablemos de tu Proyecto Web',
            'q_greeting_1': 'Hola, espero que te encuentres bien.',
            'q_intro_1': 'Este es el primer paso para que podamos dar forma a tu proyecto web. Te agradecería mucho si dedicas unos minutos a estas preguntas.',
            'q_intro_2': 'Tus ideas y visión son la base para crear algo que realmente funcione para ti.',
            'q_lang_switcher_text': 'ENG',

            'q_fs1_legend': 'Empecemos por ti y tu práctica',
            'q_fs1_f_email_label': 'Tu Dirección de Email:',
            'q_fs1_f_email_placeholder': 'Ej: tuemail@dominio.com',
            'q_fs1_f1_label': 'Especialidad Principal:',
            'q_fs1_f1_placeholder': 'Ej: Cardiología, Diseño Gráfico',
            'q_fs1_f2_label': 'Tus Servicios Estrella (hasta 3, en orden de importancia, que SÍ o SÍ deben destacarse):',
            'q_fs1_f2_placeholder': '1. Mi servicio más importante...\n2. Mi segundo servicio clave...\n3. Otro servicio a destacar...',
            'q_fs1_f3_label': 'Tu Diferenciador Único (en 1 frase breve): ¿Qué te hace especial o diferente?',
            'q_fs1_f4_label': 'Valores Clave (1 o 2 que te representen: Confianza, Innovación, Empatía, Calidez, Profesionalismo, Cercanía, Otro):',
            'q_fs1_f4_placeholder': 'Ej: Confianza, Empatía',

            'q_fs2_legend': 'Definiendo el éxito de tu web',
            'q_fs2_f1_label': 'Meta Nº1 de tu Página Web (en pocas palabras): Ej: "Conseguir que nuevos pacientes pidan cita"',
            'q_fs2_f1_placeholder': 'Ej: Conseguir que nuevos pacientes pidan cita',
            'q_fs2_f2_label': 'Acción MÁS Importante del Visitante (elige solo UNA: Contactar por formulario/email, Llamar, Agendar cita, Ubicar consulta, Otra):',
            'q_fs2_f2_placeholder': 'Ej: Contactar por formulario',
            'q_fs2_f3_label': 'Tu Paciente/Cliente Ideal (descríbelo en 3-5 palabras clave): Ej: "Mujeres 30-50, buscan estética"',
            'q_fs2_f3_placeholder': 'Ej: Mujeres 30-50, buscan estética',
            'q_fs2_f4_label': 'Información Clave que tus visitantes DEBEN encontrar al instante (puedes listar varios puntos o describirlo en un párrafo):',
            'q_fs2_f4_placeholder': 'Ej: Horarios, Servicios principales, Teléfono de contacto...',

            'q_fs3_legend': 'La esencia visual y la sensación que buscas',
            'q_fs3_f1_label': 'Adjetivos para el Diseño (elige 3-4: Elegante, Moderno, Profesional, Minimalista, Cálido, Sereno, Innovador, Confiable, Cercano, Otro):',
            'q_fs3_f1_placeholder': 'Ej: Elegante, Profesional, Sereno',
            'q_fs3_f2_label': 'Tonalidad general de colores (Clara, Oscura, Neutra):',
            'q_fs3_f2_placeholder': 'Ej: Oscura',
            'q_fs3_f3_label': 'Algún color de acento que te guste (o de tu logo, si tienes):',
            'q_fs3_f4_label': 'Algún color que prefieras evitar:',
            'q_fs3_f5_label': 'Estilo de Letra Preferido (Clásico/Formal o Moderno/Limpio):',
            'q_fs3_f5_placeholder': 'Ej: Moderno/Limpio',
            'q_fs3_opt_subtitle': 'Inspiración Visual (OPCIONAL – pero muy útil si tienes ejemplos):',
            'q_fs3_opt_f1_label': 'Un sitio web que te GUSTE mucho por su diseño (enlace URL):',
            'q_fs3_opt_f1_placeholder': 'https://ejemplo.com',
            'q_fs3_opt_f2_label': '¿Qué te gusta de él (en una frase)?:',
            'q_fs3_opt_f3_label': 'Un sitio web que NO te guste por su diseño (enlace URL):',
            'q_fs3_opt_f3_placeholder': 'https://ejemplo-no.com',
            'q_fs3_opt_f4_label': '¿Qué te disgusta de él (en una frase)?:',
            
            'q_fs4_legend': 'Contenido y herramientas clave para tu página',
            'q_fs4_f1_label': 'Bloques de Información Esenciales (3-5 más importantes para tu página única: Bienvenida, Sobre Mí breve, Servicio Estrella 1, Servicio Estrella 2, Cómo funciona/Proceso, Testimonios breves, Llamada a la Acción/Contacto, Ubicación/Mapa):',
            'q_fs4_f1_placeholder': 'Ej: Bienvenida, Sobre Mí, Servicio Estrella 1, Contacto, Ubicación',
            'q_fs4_mat_subtitle': 'Material que YA TIENES Listo:',
            'q_fs4_mat_q1': 'Logo profesional:',
            'q_fs4_mat_q2': 'Fotos de buena calidad:',
            'q_fs4_mat_q3': 'Textos básicos para alguna sección:',
            'q_radio_yes': 'Sí',
            'q_radio_no': 'No',
            'q_fs4_func_subtitle': 'Funcionalidades que NECESITAS:',
            'q_fs4_func_q1': 'Formulario de contacto:',
            'q_fs4_func_q2': 'Mapa de ubicación:',
            'q_fs4_func_q3': 'Enlaces a Redes Sociales:',
            'q_fs4_func_q3_placeholder': 'Si es Sí, especifica aquí (ej: Facebook, Instagram)',
            'q_fs4_func_q4': 'Botón para llamar por WhatsApp o teléfono:',

            'q_submit_button': 'Enviar Mis Respuestas',
            'q_form_submitting': 'Enviando tus respuestas...',
            'q_form_success': '¡Gracias! Tus respuestas han sido enviadas con éxito. Me pondré en contacto contigo pronto.',
            'q_form_error': 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo o contáctame directamente.',
            'q_closing_text': 'Agradezco mucho que te tomaras el tiempo para compartir tus ideas; esta información es realmente valiosa. Revisaré tus respuestas con atención y te contactaré pronto para que conversemos sobre los próximos pasos.',
            'q_closing_signature': 'Un saludo,<br>elsantin',
            'q_footer_text': '© <span id="currentYearPlaceholder"></span> elsantin',
            'q_btt_label_aria': 'Volver arriba'
        },
        'en': {
            'q_site_title': 'Web Project Questionnaire - by elsantin',
            'q_logo_link_title': 'Back to elsantin\'s Dev Hub',
            'q_title': 'Let\'s Talk About Your Web Project',
            'q_greeting_1': 'Hello, I hope you are doing well.',
            'q_intro_1': 'This is the first step so we can shape your web project. I would greatly appreciate it if you could dedicate a few minutes to these questions.',
            'q_intro_2': 'Your ideas and vision are the foundation for creating something that truly works for you.',
            'q_lang_switcher_text': 'ESP',

            'q_fs1_legend': 'Let\'s start with you and your practice',
            'q_fs1_f_email_label': 'Your Email Address:',
            'q_fs1_f_email_placeholder': 'E.g., youremail@domain.com',
            'q_fs1_f1_label': 'Main Specialty:',
            'q_fs1_f1_placeholder': 'E.g., Cardiology, Graphic Design',
            'q_fs1_f2_label': 'Your Star Services (up to 3, in order of importance, that MUST be highlighted):',
            'q_fs1_f2_placeholder': '1. My most important service...\n2. My second key service...\n3. Another service to highlight...',
            'q_fs1_f3_label': 'Your Unique Differentiator (in 1 short sentence): What makes you special or different?',
            'q_fs1_f4_label': 'Key Values (1 or 2 that represent you: Trust, Innovation, Empathy, Warmth, Professionalism, Closeness, Other):',
            'q_fs1_f4_placeholder': 'E.g., Trust, Empathy',

            'q_fs2_legend': 'Defining the success of your website',
            'q_fs2_f1_label': 'Website Goal #1 (in a few words): E.g., "Get new patients to request appointments"',
            'q_fs2_f1_placeholder': 'E.g., Get new patients to request appointments',
            'q_fs2_f2_label': 'Visitor\'s MOST Important Action (choose only ONE: Contact via form/email, Call, Schedule appointment, Find location, Other):',
            'q_fs2_f2_placeholder': 'E.g., Contact via form',
            'q_fs2_f3_label': 'Your Ideal Patient/Client (describe in 3-5 keywords): E.g., "Women 30-50, seeking aesthetics"',
            'q_fs2_f3_placeholder': 'E.g., Women 30-50, seeking aesthetics',
            'q_fs2_f4_label': 'Key Information your visitors MUST find instantly (list several points or describe in a paragraph):',
            'q_fs2_f4_placeholder': 'E.g., Opening hours, main services, contact phone...',
            
            'q_fs3_legend': 'The visual essence and feeling you\'re looking for',
            'q_fs3_f1_label': 'Adjectives for the Design (choose 3-4: Elegant, Modern, Professional, Minimalist, Warm, Serene, Innovative, Reliable, Approachable, Other):',
            'q_fs3_f1_placeholder': 'E.g., Elegant, Professional, Serene',
            'q_fs3_f2_label': 'General color tone (Light, Dark, Neutral):',
            'q_fs3_f2_placeholder': 'E.g., Dark',
            'q_fs3_f3_label': 'Any accent color you like (or from your logo, if you have one):',
            'q_fs3_f4_label': 'Any color you prefer to avoid:',
            'q_fs3_f5_label': 'Preferred Font Style (Classic/Formal or Modern/Clean):',
            'q_fs3_f5_placeholder': 'E.g., Modern/Clean',
            'q_fs3_opt_subtitle': 'Visual Inspiration (OPTIONAL – but very helpful if you have examples):',
            'q_fs3_opt_f1_label': 'A website you REALLY LIKE for its design (URL link):',
            'q_fs3_opt_f1_placeholder': 'https://example.com',
            'q_fs3_opt_f2_label': 'What do you like about it (in one sentence)?:',
            'q_fs3_opt_f3_label': 'A website you DON\'T LIKE for its design (URL link):',
            'q_fs3_opt_f3_placeholder': 'https://example-no.com',
            'q_fs3_opt_f4_label': 'What do you dislike about it (in one sentence)?:',

            'q_fs4_legend': 'Key content and tools for your page',
            'q_fs4_f1_label': 'Essential Information Blocks (3-5 most important for your single page: Welcome, Brief About Me, Star Service 1, Star Service 2, How it works/Process, Brief Testimonials, Call to Action/Contact, Location/Map):',
            'q_fs4_f1_placeholder': 'E.g., Welcome, About Me, Star Service 1, Contact, Location',
            'q_fs4_mat_subtitle': 'Material you ALREADY HAVE Ready:',
            'q_fs4_mat_q1': 'Professional logo:',
            'q_fs4_mat_q2': 'Good quality photos:',
            'q_fs4_mat_q3': 'Basic texts for any section:',
            'q_radio_yes': 'Yes',
            'q_radio_no': 'No',
            'q_fs4_func_subtitle': 'Functionalities you NEED:',
            'q_fs4_func_q1': 'Contact form:',
            'q_fs4_func_q2': 'Location map:',
            'q_fs4_func_q3': 'Social Media links:',
            'q_fs4_func_q3_placeholder': 'If Yes, specify here (e.g., Facebook, Instagram)',
            'q_fs4_func_q4': 'Button to call via WhatsApp or phone:',

            'q_submit_button': 'Send My Answers',
            'q_form_submitting': 'Sending your answers...',
            'q_form_success': 'Thank you! Your answers have been sent successfully. I will contact you soon.',
            'q_form_error': 'There was an error sending the form. Please try again or contact me directly.',
            'q_closing_text': 'I greatly appreciate you taking the time to share your ideas; this information is truly valuable. I will review your answers carefully and contact you soon to discuss the next steps.',
            'q_closing_signature': 'Best regards,<br>elsantin',
            'q_footer_text': '© <span id="currentYearPlaceholder"></span> elsantin',
            'q_btt_label_aria': 'Back to top'
        }
    };

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found in questionnaire translations.`);
            lang = 'es'; 
        }
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            let translationText = translations[lang][key];

            if (translationText !== undefined) {
                if (key === 'q_footer_text' && yearSpan) {
                    translationText = translationText.replace('<span id="currentYearPlaceholder"></span>', yearSpan.outerHTML);
                }
                
                if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && key.includes('_placeholder')) {
                    element.placeholder = translationText;
                } else if (element.tagName === 'TITLE') {
                    element.textContent = translationText;
                } else if (element.hasAttribute('aria-label') && key.includes('_label_aria')) { 
                    element.setAttribute('aria-label', translationText);
                    if (key === 'q_btt_label_aria') {
                        element.setAttribute('title', translationText);
                    }
                } else if (element.hasAttribute('title') && key.includes('_link_title')) { 
                     element.setAttribute('title', translationText);
                }
                else {
                    element.innerHTML = translationText;
                }
            } else {
                if (!(element.placeholder === "" && key.includes('_placeholder'))) {
                   // console.warn(`Translation key "${key}" not found for language "${lang}".`);
                }
            }
        });

        if (languageSwitcherBtn) {
            languageSwitcherBtn.textContent = translations[lang]['q_lang_switcher_text'];
        }
        if (formLanguageHiddenInput) {
            formLanguageHiddenInput.value = lang; 
        }
        localStorage.setItem('q_language', lang);
        currentLanguage = lang;
        document.body.classList.add('language-set');
    }

    if (languageSwitcherBtn) {
        languageSwitcherBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'es' : 'en';
            setLanguage(newLang);
        });
    }
    
    setLanguage(currentLanguage);

    // --- FORMULARIO AJAX ---
    const clientForm = document.getElementById('clientForm');
    const formConfirmationDiv = document.getElementById('formConfirmation');
    const submitButton = clientForm.querySelector('button[type="submit"]');

    if (clientForm && submitButton) {
        clientForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Evitar el envío tradicional

            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = translations[currentLanguage]['q_form_submitting'] || 'Enviando...';
            submitButton.disabled = true;
            formConfirmationDiv.style.display = 'none'; // Ocultar mensajes previos

            const formData = new FormData(clientForm);
            const formAction = clientForm.action;

            try {
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: { // FormSubmit a veces requiere esto para AJAX
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // FormSubmit suele devolver un 200 OK incluso si hay un "error" de su lado (ej. email no confirmado)
                    // pero para el usuario, si la petición fue "ok", asumimos que llegó al servidor.
                    // La confirmación real del email es un paso aparte que debes hacer con FormSubmit.
                    formConfirmationDiv.innerHTML = translations[currentLanguage]['q_form_success'];
                    formConfirmationDiv.className = 'form-confirmation-message success'; // Para estilizar éxito
                    clientForm.reset(); // Limpiar el formulario
                } else {
                    // Si FormSubmit devuelve un error (ej. 4xx, 5xx)
                    const errorData = await response.json().catch(() => null); // Intenta parsear error JSON
                    console.error('FormSubmit error response:', response.status, errorData);
                    formConfirmationDiv.innerHTML = translations[currentLanguage]['q_form_error'];
                    if (errorData && errorData.error) {
                         formConfirmationDiv.innerHTML += `<br><small>${errorData.error}</small>`;
                    }
                    formConfirmationDiv.className = 'form-confirmation-message error'; // Para estilizar error
                }
            } catch (error) {
                // Error de red o similar
                console.error('Fetch error:', error);
                formConfirmationDiv.innerHTML = translations[currentLanguage]['q_form_error'];
                formConfirmationDiv.className = 'form-confirmation-message error';
            } finally {
                submitButton.innerHTML = originalButtonText; // Restaurar texto del botón
                submitButton.disabled = false;
                formConfirmationDiv.style.display = 'block'; // Mostrar mensaje
            }
        });
    }


    if (yearSpan) {
        const yearTextElement = document.querySelector('[data-lang-key="q_footer_text"] #currentYear');
        if (yearTextElement) {
            yearTextElement.textContent = new Date().getFullYear();
        }
    }

    const backToTopButton = document.getElementById('back-to-top-btn');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { 
                backToTopButton.style.display = 'flex'; 
                setTimeout(() => backToTopButton.style.opacity = '1', 10); 
            } else {
                backToTopButton.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= 300) { 
                         backToTopButton.style.display = 'none';
                    }
                }, 300); 
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
