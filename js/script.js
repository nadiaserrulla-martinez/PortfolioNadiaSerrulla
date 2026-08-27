/*=========================================================
NADIA SERRULLA - PORTFOLIO GLOBAL 2026
=========================================================*/

"use strict";

const CONFIG = {
    loadingTime: 3000,
    cursorSpeed: 0.35,
    revealThreshold: 0.15
};

// BASE DE DATOS LOCAL DE PROYECTOS
const PROJECTS_DATA = {
    bitbybit: {
        title: "BIT by BIT",
        pdf: "PDFs/Manual_Identidad_BITbyBIT.pdf",
        pdfTitle: "Manual de Identidad - BIT by BIT [PDF]",
        subtitle: `
            <div class="modal-project-summary">
                <p>Estrategia de marca que evoluciona la colección estática de un museo retro hacia una <strong>experiencia cultural</strong> viva e interactiva. El proyecto parte del antiguo Museo del Recreativo para crear un nuevo naming y un lenguaje visual que <strong>conecta la nostalgia arcade con el gaming actual</strong>.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Branding · Aplicaciones · Identidad Visual </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Branding</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Illustrator · Photoshop · Indesign </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">3 semanas</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Branding/BITbyBIT/BIT_01.png" alt="Logotipo negativo">
                <figcaption class="modal-caption">Logotipo negativo.</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Bit by Bit es el <strong>rebranding del Museo del Recreativo</strong>, una propuesta creada para evolucionar la <strong>preservación histórica del videojuego</strong> hacia una experiencia viva e interactiva. El proyecto actualiza la identidad de la institución para <strong>conectar la nostalgia del arcade tradicional con las tendencias del gaming contemporáneo</strong>. Mediante un naming lúdico que apela al lenguaje tecnológico y una nueva arquitectura de marca, la propuesta integra torneos, consolas actuales y exposiciones dinámicas que combinan <strong>el pasado y el presente del sector</strong>.</p>
                
                <p>Para vertebrar este cambio, lideré la estrategia de rebranding y el diseño integral de la <strong>nueva experiencia de marca</strong>. Esto abarca desde la <strong>conceptualización del naming y la identidad visual</strong>, hasta el desarrollo del <strong>sistema gráfico para las exposiciones físicas, los espacios interactivos y el material de comunicación del museo</strong>.</p>

                <p>Más allá del rediseño visual, este trabajo demuestra mi capacidad para reposicionar una entidad cultural, transformando una colección estática de objetos en un espacio de entretenimiento dinámico capaz de atraer a un público intergeneracional.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Estrategia de marca y desarrollo de naming (Bit by Bit).</li>
                        <li>Sistema de identidad visual y lenguaje gráfico adaptativo.</li>
                        <li>Conceptualización de la experiencia de visitante y áreas interactivas.</li>
                        <li>Señalética y material gráfico para el espacio expositivo.</li>
                        <li>Assets promocionales para campañas de comunicación y eventos.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Branding/BITbyBIT/BIT_03.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_03.png", caption: "Mercha de BIT by BIT." },
            { src: "Img/Proyectos/Branding/BITbyBIT/BIT_04.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_04.png", caption: "Folleto de BIT by BIT." },
            { src: "Img/Proyectos/Branding/BITbyBIT/BIT_05.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_05.png", caption: "Valla publicitaria de BIT by BIT." },
            { src: "Img/Proyectos/Branding/BITbyBIT/BIT_06.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_06.png", caption: "Inicio de la página web de BIT by BIT." },
            { src: "Img/Proyectos/Branding/BITbyBIT/BIT_07.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_07.png", caption: "Explicación de máquina dentr de la web BIT by BIT." },
        ]
    },
    Lyngard: {
        title: "LYNGÅRD",
        pdf: "PDFs/Manual_Identidad_Lyngard.pdf",
        pdfTitle: "Manual de Identidad - Lyngård [PDF]",
        subtitle: `
            <div class="modal-project-summary">
                <p>Ecosistema creativo que evoluciona un <strong>videojuego de terror psicológico</strong> hacia una marca sólida. El origen es una demo jugable en pixel art (programada por mí) que explora la culpa y la evasión en una isla fictica noruega de 1998.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Dirección de arte · Branding · Campaña crowdfunding</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Proyecto personal / TFG</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Illustrator · Photoshop · Clip Studio </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">6 meses</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Branding/Lyngard/Lyngard_13.png" alt="Entorno del juego Lyngård en pixel art">
                <figcaption class="modal-caption">Escenario exterior en pixel art e integración de iluminación en GDevelop para la demo jugable.</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Para viabilizar este universo, <strong>dirigí toda la identidad visual y la comunicación del proyecto</strong>. Esto abarca desde la creación del logotipo y el sistema tipográfico, hasta el material gráfico necesario para orquestar una campaña de crowdfunding.</p>
                
                <p>Más allá de la prueba de concepto interactiva, este trabajo demuestra mi capacidad para dotar a un producto de un empaque gráfico profesional y diseñar su estrategia de mecenazgo.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Manual de identidad corporativa.</li>
                        <li>Sistema tipográfico propio.</li>
                        <li>Diseño de campaña de crowdfunding.</li>
                        <li>Assets gráficos y material promocional.</li>
                        <li>Creación de recompensas para los mecenas.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_0.png", full: "Img/Proyectos/Branding/Lyngard/L_0.png", caption: "Logotipo sin textura." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_01.png", full: "Img/Proyectos/Branding/Lyngard/L_01.png", caption: "Isotipo." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_1.png", full: "Img/Proyectos/Branding/Lyngard/L_1.png", caption: "Imagen principal de la campaña de crowdfunding en Kickstarter." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_11.png", full: "Img/Proyectos/Branding/Lyngard/L_11.png", caption: "Carta de agradecimiento para los mecenas." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_2.png", full: "Img/Proyectos/Branding/Lyngard/L_2.png", caption: "Icono en Kickstarter: Recompensas más accesibles [Early Bird]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_3.png", full: "Img/Proyectos/Branding/Lyngard/L_3.png", caption: "Icono en Kickstarter: Recompensas de coleccionista [Collector's Edition]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_4.png", full: "Img/Proyectos/Branding/Lyngard/L_4.png", caption: "Icono en Kickstarter: Recompensas exclusivas dentro del juego [Mind Master]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_10.png", full: "Img/Proyectos/Branding/Lyngard/L_10.png", caption: "Recompensa Kickstarter: LLavero." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_5.png", full: "Img/Proyectos/Branding/Lyngard/L_5.png", caption: "Recompensa Kickstarter: Versión digital del videojuego [Código de Steam]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_6.png", full: "Img/Proyectos/Branding/Lyngard/L_6.png", caption: "Recompensa Kickstarter: Versión física del videojuego [USB con forma de Cassette]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_7.png", full: "Img/Proyectos/Branding/Lyngard/L_7.png", caption: "Recompensa Kickstarter: Vinilo de la banda sonora del videojuego." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_8.png", full: "Img/Proyectos/Branding/Lyngard/L_8.png", caption: "Recompensa Kickstarter: CD de la banda sonora del videojuego." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_9.png", full: "Img/Proyectos/Branding/Lyngard/L_9.png", caption: "Recompensa Kickstarter: Mapa de Lyngård con sus zonas marcadas." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_14.png", full: "Img/Proyectos/Branding/Lyngard/L_14.png", caption: "Visualización de todos los elementos gráficos en el Kickstarter." }
        ]
    },
    UV: {
        title: "Consell de l'Estudiantat",
        subtitle: `
            <div class="modal-project-summary">
                <p>Ecosistema creativo que evoluciona un <strong>videojuego de terror psicológico</strong> hacia una marca sólida. El origen es una demo jugable en pixel art (programada por mí) que explora la culpa y la evasión en una isla fictica noruega de 1998.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Dirección de arte · Branding · Campaña crowdfunding</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Proyecto personal / TFG</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Illustrator · Photoshop · Clip Studio </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">6 meses</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Branding/Lyngard/Lyngard_13.png" alt="Entorno del juego Lyngård en pixel art">
                <figcaption class="modal-caption">Escenario exterior en pixel art e integración de iluminación en GDevelop para la demo jugable.</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Para viabilizar este universo, <strong>dirigí toda la identidad visual y la comunicación del proyecto</strong>. Esto abarca desde la creación del logotipo y el sistema tipográfico, hasta el material gráfico necesario para orquestar una campaña de crowdfunding.</p>
                
                <p>Más allá de la prueba de concepto interactiva, este trabajo demuestra mi capacidad para dotar a un producto de un empaque gráfico profesional y diseñar su estrategia de mecenazgo.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Manual de identidad corporativa.</li>
                        <li>Sistema tipográfico propio.</li>
                        <li>Diseño de campaña de crowdfunding.</li>
                        <li>Assets gráficos y material promocional.</li>
                        <li>Creación de recompensas para los mecenas.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_0.png", full: "Img/Proyectos/Branding/Lyngard/L_0.png", caption: "Logotipo con textura & sin textura." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_01.png", full: "Img/Proyectos/Branding/Lyngard/L_01.png", caption: "Isotipo." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_1.png", full: "Img/Proyectos/Branding/Lyngard/L_1.png", caption: "Imagen principal de la campaña de crowdfunding en Kickstarter." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_11.png", full: "Img/Proyectos/Branding/Lyngard/L_11.png", caption: "Carta de agradecimiento para los mecenas." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_2.png", full: "Img/Proyectos/Branding/Lyngard/L_2.png", caption: "Icono en Kickstarter: Recompensas más accesibles [Early Bird]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_3.png", full: "Img/Proyectos/Branding/Lyngard/L_3.png", caption: "Icono en Kickstarter: Recompensas de coleccionista [Collector's Edition]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_4.png", full: "Img/Proyectos/Branding/Lyngard/L_4.png", caption: "Icono en Kickstarter: Recompensas exclusivas dentro del juego [Mind Master]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_10.png", full: "Img/Proyectos/Branding/Lyngard/L_10.png", caption: "Recompensa Kickstarter: LLavero." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_5.png", full: "Img/Proyectos/Branding/Lyngard/L_5.png", caption: "Recompensa Kickstarter: Versión digital del videojuego [Código de Steam]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_6.png", full: "Img/Proyectos/Branding/Lyngard/L_6.png", caption: "Recompensa Kickstarter: Versión física del videojuego [USB con forma de Cassette]." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_7.png", full: "Img/Proyectos/Branding/Lyngard/L_7.png", caption: "Recompensa Kickstarter: Vinilo de la banda sonora del videojuego." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_8.png", full: "Img/Proyectos/Branding/Lyngard/L_8.png", caption: "Recompensa Kickstarter: CD de la banda sonora del videojuego." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_9.png", full: "Img/Proyectos/Branding/Lyngard/L_9.png", caption: "Recompensa Kickstarter: Mapa de Lyngård con sus zonas marcadas." },
            { src: "Img/Proyectos/Branding/Lyngard/Lyngard_14.png", full: "Img/Proyectos/Branding/Lyngard/L_14.png", caption: "Visualización de todos los elementos gráficos en el Kickstarter." }
        ]
    },
    LEO: {
        title: "LEO",
        subtitle: `
            <div class="modal-project-summary">
                <p>Rediseño de la emblemática <strong>cerveza tailandesa LEO</strong> para elevar su percepción de marca y conectar con las nuevas generaciones. La propuesta transforma las icónicas manchas del leopardo en un <strong>sistema gráfico dinámico y flexible</strong>: un código de color variable en la etiqueta que aporta modernidad y diferencia con claridad cada variedad de cerveza.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Identidad Visual · Marca flexible</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Rediseño de identidad visual</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Illustrator · Photoshop </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">1 mes</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Branding/LEO/LEO_01.png" alt="Logotipo rediseñado de LEO">
                <figcaption class="modal-caption">Logotipo rediseñado de LEO</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Para articular esta propuesta, dirigí el <strong>rediseño completo de la identidad visual</strong> y el sistema de empaque de la marca. Esto abarca desde la <strong>actualización del logotipo</strong> y el tratamiento tipográfico, hasta el <strong>desarrollo del sistema gráfico modular</strong> de las manchas de leopardo y la codificación cromática para las distintas variedades.</p>
                
                <p>Más allá de la renovación estética, este trabajo demuestra mi capacidad para reposicionar un producto de gran consumo mediante un empaque profesional, revalorizando la marca y adaptándola a las exigencias del público joven.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Rediseño de identidad visual y logotipo.</li>
                        <li>Sistema gráfico modular adaptable (patrón de leopardo).</li>
                        <li>Arquitectura de gama y código cromático por variedad.</li>
                        <li>Diseño de packaging para botellas, latas y agrupaciones.</li>
                        <li>Assets gráficos y material promocional para punto de venta.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Branding/LEO/LEO_5.png", full: "Img/Proyectos/Branding/LEO/LEO_05.png", caption: "Mockup cerveza LEO con sus variantes" },
            { src: "Img/Proyectos/Branding/LEO/LEO_2.png", full: "Img/Proyectos/Branding/LEO/LEO_02.png", caption: "Etiqueta Cerveza LEO: Lager." },
            { src: "Img/Proyectos/Branding/LEO/LEO_3.png", full: "Img/Proyectos/Branding/LEO/LEO_03.png", caption: "Etiqeuta Cerveza LEO: Lager Pilsen." },
            { src: "Img/Proyectos/Branding/LEO/LEO_4.png", full: "Img/Proyectos/Branding/LEO/LEO_04.png", caption: "Etiqueta LEO: Stout." }
        ]
    },
    NIUBO: {
        title: "NIUBÓ",
        subtitle: `
            <div class="modal-project-summary">
                <p>Niubó es una <strong>aplicación integral</strong> diseñada para revolucionar la gestión y el cuidado de los animales, creando un puente de conexión directo entre los propietarios de mascotas, las clínicas veterinarias y los centros de acogida.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">UX/UI · Identidad visual</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">App para la gestión de animales</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Figma · Illustrator </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">2 semanas</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/UX/NIUBO/niubo_1.png" alt="Bienvenido a Niubó">
                <figcaption class="modal-caption">Bienvenido a NIUBÓ</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>La plataforma se estructura en torno a dos perfiles principales orientados a cubrir tanto las necesidades del ámbito particular como las del sector profesional y solidario: por un lado, el perfil enfocado a centros veterinarios y protectoras, y por otro, el dirigido a personas con mascotas y voluntarios.</p>
                
                <p>Para los usuarios particulares, la aplicación funciona como un asistente personal para el bienestar animal, permitiendo llevar un control exhaustivo y centralizado de aspectos tan importantes como el calendario de vacunación, la pauta de alimentación, el control de peso y la comodidad de solicitar citas previas de forma rápida. En el caso de las protectoras y las clínicas veterinarias, la herramienta ofrece un soporte administrativo y logístico clave que les permite organizar, supervisar y optimizar de manera eficiente el estado y la administración de todos los animales que se encuentran bajo su tutela.</p>

                <p>Asimismo, la aplicación destaca por su fuerte compromiso social gracias a una función específica pensada para los voluntarios. En el caso de que un usuario con este perfil se encuentre con un animal perdido, abandonado o en mal estado, la aplicación le proporciona de forma inmediata la ubicación exacta de las protectoras y centros veterinarios disponibles más cercanos, facilitando una respuesta rápida, coordinada y eficaz para socorrer al animal en el momento en que más lo necesita.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Desarrollo de una aplicación integral para la gestión de mascotas, clínicas veterinarias y centros de refugio.</li>
                        <li>Estructuración de perfiles diferenciados para centros profesionales/protectoras y particulares/voluntarios.</li>
                        <li>Sistema de control personal para el cuidado diario de mascotas (vacunas, alimentación, peso y solicitud de citas).</li>
                        <li>Plataforma de gestión y supervisión logística de animales bajo la tutela de protectoras y veterinarias.</li>
                        <li>Funcionalidad de emergencia geolocalizada para que los voluntarios puedan ubicar instantáneamente protectoras y centros disponibles ante animales perdidos o en mal estado.</li>
                        <li>Comunidad con el fin de aprender y cuidar de la mascota o de un animal recién rescatado</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/UX/NIUBO/niubo_02.png", full: "Img/Proyectos/UX/NIUBO/niubo_02.png", caption: "Entrada a la APP NIUBÓ" },
            { src: "Img/Proyectos/UX/NIUBO/niubo_03.png", full: "Img/Proyectos/UX/NIUBO/niubo_03.png", caption: "Resgitro en la APP" },
            { src: "Img/Proyectos/UX/NIUBO/niubo_04.png", full: "Img/Proyectos/UX/NIUBO/niubo_04.png", caption: "Ventana principal de la APP" },
            { src: "Img/Proyectos/UX/NIUBO/niubo_05.png", full: "Img/Proyectos/UX/NIUBO/niubo_05.png", caption: "Comunidad de NIUBÓ" }
        ]
    },
    Mareabrumosa: {
        title: "Marea brumosa",
        subtitle: `
            <div class="modal-project-summary">
                <p>Marea brumosa es el título que tiene este <strong>overlay</strong> que tiene inspiración en cómo la niebla del océano yacen, en un reflejo confuso, las estrellas nocturnas.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Overlay </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Temática libre</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · After effects </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">2 semanas</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Overlay/marea/marea_0.png" alt="Fondo">
                <figcaption class="modal-caption">Fondo Overlay</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto marcó un hito muy especial al tratarse de mi primer overlay, permitiéndome comprender de primera mano cómo el diseño puede adentrarse con fuerza dentro de un sector estrechamente ligado a la industria del videojuego como es el streaming.</p>
                
                <p>El desarrollo de esta pieza supuso un apartado sumamente interesante al englobar y conectar de forma sinérgica múltiples disciplinas creativas. La propuesta entrelaza con fluidez el arte de la ilustración, las bases sólidas del diseño gráfico y la dinamización propia del motion graphics, dotando al directo de una atmósfera visual única, inmersiva y dotada de una gran personalidad.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Conceptualización y diseño de "Marea brumosa", mi primer proyecto de overlay para streaming.</li>
                        <li>Exploración de las oportunidades del diseño dentro de la industria del videojuego y las retransmisiones en directo.</li>
                        <li>Fusión multidisciplinar entre el arte de la ilustración, el diseño gráfico y el motion graphics.</li>
                        <li>Creación de una atmósfera visual basada en la narrativa de la niebla oceánica y las estrellas nocturnas.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Overlay/marea/marea_01.png", full: "Img/Proyectos/Overlay/marea/marea_1.png", type: "image", caption: "Overlay Marea Brumosa Imagen" },
            { src: "Img/Proyectos/Overlay/marea/marea_01.png", full: "video/marea_0.mp4", type: "video", caption: "Overlay Marea Brumosa Vídeo" }
        ]
    },
    AC: {
        title: "Animal Crossing: New Horizon",
        subtitle: `
            <div class="modal-project-summary">
                <p>Este overlay de tiempo de carga se realizó para retransmitir el videojuego de <strong>Animal Crossing: New Horizon</strong>, teniendo elementos muy significativos dle videojuego como la playa, las conchas, etc...</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Overlay tiempo de carga </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Temática videojuego</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · After effects </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">1 semana</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Overlay/AC/AC_01.png" alt="Fondo">
                <figcaption class="modal-caption">Fondo Overlay</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto representó un paso adelante en mi evolución técnica, ya que me centré en el diseño de una pantalla de carga temática inspirada en Animal Crossing. Este trabajo me permitió profundizar en la capacidad del diseño para mejorar la experiencia de usuario y conectar directamente con la comunidad de un videojuego a través de sus elementos más icónicos.</p>
                
                <p>El desarrollo de esta pieza fue un proceso técnico sumamente enriquecedor, en el que dediqué una atención especial a la ilustración, el diseño de elementos integrados y la animación detallada. Mi objetivo principal fue reflejar la esencia y el encanto característico del juego, cuidando cada aspecto para dotar a la transición de una atmósfera visual auténtica, acogedora y fiel al universo original.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Conceptualización y desarrollo integral de un overlay de tiempo de carga inspirado en Animal Crossing.</li>
                        <li>Enfoque exhaustivo en la ilustración personalizada y la animación de elementos clave para trasladar la estética propia del juego al entorno de streaming.</li>
                        <li>Reflejo de la esencia narrativa y visual del videojuego, priorizando una interfaz que fuera familiar y atractiva para su comunidad.</li>
                        <li>Optimización del diseño para que la pieza cumpliera una función práctica sin perder la calidad artística y el detalle creativo.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Overlay/AC/AC_01.png", full: "video/AC.mp4", caption: "Overlay Animal Crossing: New Horizon Vídeo" },
        ]
    },
    BG3: {
        title: "Baldur's Gate 3",
        subtitle: `
            <div class="modal-project-summary">
                <p>Este proyecto es concebido como una pieza integral de ambientación para <strong>Baldur's Gate 3</strong>. El diseño se inspira en la estética oscura y épica del juego, fusionando elementos icónicos de su narrativa para transportar al espectador directamente al corazón de la aventura.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Overlay </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Temática videojuego</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · After effects </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">1 semana y media</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Overlay/BG3/BG3_2.png" alt="Fondo">
                <figcaption class="modal-caption">Fondo Overlay tiempo de carga</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto marcó un hito muy especial al tratarse de mi primer overlay, permitiéndome comprender de primera mano cómo el diseño puede adentrarse con fuerza dentro de un sector estrechamente ligado a la industria del videojuego como es el streaming.</p>
                
                <p>Este proyecto representa, hasta la fecha, mi trabajo más ambicioso y logrado. Al tratarse de un universo tan vasto y visualmente rico como el de Baldur's Gate 3, me ha permitido llevar mis capacidades de ilustración y narrativa visual a un nivel superior, logrando un parecido estético que respeta y honra la esencia original del título de Larian Studios.</p>

                <p>El desarrollo de esta pieza ha sido un ejercicio complejo de equilibrio. Por un lado, he diseñado el overlay principal para las sesiones de juego activo; por otro, he creado una pantalla de descanso que funciona como un espacio de pausa inmersivo. La propuesta destaca por la profundidad de sus ilustraciones, creadas desde cero para evocar la ambientación fantástica del juego, y por una integración técnica donde la animación de los elementos gráficos refuerza la atmósfera mágica y peligrosa que define la experiencia del usuario en el juego. Es, sin duda, la pieza donde mejor he conseguido equilibrar el diseño funcional con la exigencia artística que merece un título de esta magnitud.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Conceptualización y diseño integral de "Overlay Baldur's Gate 3", incluyendo la versión para streaming activo y la pantalla de descanso.</li>
                        <li>Logro de un alto nivel de fidelidad visual y estética respecto al videojuego original, siendo el proyecto con mayor calidad técnica hasta la fecha.</li>
                        <li>Dominio avanzado de la ilustración digital aplicada a la creación de ambientaciones complejas y atmosféricas.</li>
                        <li>Optimización de la narrativa visual para garantizar una experiencia inmersiva, tanto en los momentos de mayor acción como en las transiciones de pausa.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Overlay/BG3/BG3_02.png", full: "Img/Proyectos/Overlay/BG3/BG3_2.png", caption: "Overlay Baldur's Gate 3 tiempo de carga" },
            { src: "Img/Proyectos/Overlay/BG3/BG3_03.png", full: "Img/Proyectos/Overlay/BG3/BG3_3.png", caption: "Overlay Baldur's Gate 3" },
            { src: "Img/Proyectos/Overlay/BG3/BG3_04.png", full: "Img/Proyectos/Overlay/BG3/BG3_4.png", caption: "Overlay Baldur's Gate 3 distintos overlays (con o sin cámara)" },
        ]
    },
    PICAPICA: {
        title: "Festival PICA PICA",
        subtitle: `
            <div class="modal-project-summary">
                <p>Festival PICA PICA es una pieza <strong>universitaria</strong> que reflejó unos de los proyectos de la carrera que tanto me gustó. El diseño se inspira en la estética amable y ilustrativa del ambiente que se quería reflejar en el proyecto: comunidad.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Cartelería </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">universitario</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · Illustrator </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">2 semanas</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/carteleria/Cartel_PICAPICA_imagen_derecha.png" alt="Fondo">
                <figcaption class="modal-caption">Fondo PICA PICA</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto nació en el ámbito universitario, donde se nos planteó el reto de inventarnos un festival desde cero enfocado a que la gente participara en actividades comunicativas y talleres. Así fue como ideamos el festival PICA PICA, un concepto dinámico en el que cada asistente podía "picar" de cada taller y aprender mutuamente de forma fluida y enriquecedora.</p>

                <p>Todo el desarrollo visual se realizó de manera completamente ilustrativa porque era el recurso ideal para captar la atención del público desde el primer instante, reflejando además la gran diversidad de vegetación y la variedad de personas que convivían en el evento.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Conceptualización y diseño integral de "Overlay Baldur's Gate 3", incluyendo la versión para streaming activo y la pantalla de descanso.</li>
                        <li>Logro de un alto nivel de fidelidad visual y estética respecto al videojuego original, siendo el proyecto con mayor calidad técnica hasta la fecha.</li>
                        <li>Dominio avanzado de la ilustración digital aplicada a la creación de ambientaciones complejas y atmosféricas.</li>
                        <li>Optimización de la narrativa visual para garantizar una experiencia inmersiva, tanto en los momentos de mayor acción como en las transiciones de pausa.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Carteleria/Cartel_PICAPICA_imagen_derecha.png", full: "Img/Proyectos/Carteleria/cartel PICA PICA.png", caption: "Festival PICA PICA Imagen" },
        ]
    },
    Anuario: {
        title: "ANUARIO 2023/2024",
        pdf: "PDFs/Anuario_Nadia Serrulla.pdf",
        pdfTitle: "Anuario 2023/2024 [PDF]",
        subtitle: `
            <div class="modal-project-summary">
                <p>Durante segundo de carrera se nos propuso realizar el <strong>anuario de la universidad</strong> como projecto final en la asignatural de Editorial.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Editorial </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Universitario</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · Illustrator · Indesign</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">2 semanas y media</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Editorial/Anuario/Anuario_imagen_derecha.png" alt="Fondo">
                <figcaption class="modal-caption">Parte de una página del Anuario</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto editorial nació con la meta de diseñar un anuario corporativo y visual cuyo concepto central debía reflejar la elegancia y sofisticación de un escaparate de moda de alta gama. Para construir esa atmósfera premium, se cuidó meticulosamente cada decisión gráfica: se combinó una tipografía de trazo caligráfico —que aportaba la firma de distinción y delicadeza propia de la alta costura— junto con una sans serif limpia y moderna para estructurar bloques de lectura legibles.</p>

                <p>El pilar diferenciador del proyecto fue la paleta cromática, la cual se articuló en torno a las tendencias internacionales del Pantone Color Institute, integrando el potente Viva Magenta (Pantone Color del Año 2023) junto al suave y envolvente Peach Fuzz (Pantone Color del Año 2024).</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Dominio técnico en diagramación editorial.</li>
                        <li>Dinamismo reticular.</li>
                        <li>Traducción efectiva del concepto.</li>
                        <li>Dominio de la teoría y aplicación del color.</li>
                        <li>Dirección de arte y coherencia estética.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Editorial/Anuario/Anuario_1.png", full: "Img/Proyectos/Editorial/Anuario/Anuario_01.png", caption: "Mockup de una página del Anuario" },
            { src: "Img/Proyectos/Editorial/Anuario/Anuario_2.png", full: "Img/Proyectos/Editorial/Anuario/Anuario_02.png", caption: "Portada del Anuario" },
        ]
    },
    Revista: {
        title: "REVISTA François Truffaut",
        pdf: "PDFs/Serrulla Nadia_Revista.pdf",
        pdfTitle: "Revista François Truffaut [PDF]",
        subtitle: `
            <div class="modal-project-summary">
                <p>En la clase de Editorial, se nos encargó crear una revista sencilla sobre el autor cineasta <strong>François Truffaut</strong>.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Editorial </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Universitario</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · Illustrator · Indesign</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">1 semana</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Editorial/Revista/R_1.png" alt="Mockup de algunas páginas de la revista">
                <figcaption class="modal-caption">Parte de unas páginas de la revista</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto de diseño editorial consistió en la maquetación y conceptualización de una revista monográﬁca centrada en la figura del cineasta François Truffaut y la estética de la Nouvelle Vague. El principal reto técnico del encargo residía en la escasez de material textual e iconográfico proporcionado en la asignatura, lo que exigió una estrategia de diseño capaz de optimizar recursos limitados sin perder impacto ni rigor informativo.</p>

                <p>Para solventarlo, se apostó por una arquitectura de página basada en el uso expresivo de la tipografía —combinando fuentes serif clásicas con titulares rotundos en sans serif—, un uso deliberado del espacio blanco como elemento estructural para otorgar aire y elegancia, y el tratamiento de imágenes de archivo en alto contraste a un azul imperial para evocar la atmósfera cinematográfica de los años 60.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Maximización de contenido limitado.</li>
                        <li>Narrativa visual adaptada al tema.</li>
                        <li>Gestión eficiente del espacio en blanco.</li>
                        <li>Dirección de arte y tratamiento de imagen.</li>
                        <li>Resolución de limitaciones de producción.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Editorial/Revista/R_2.png", full: "Img/Proyectos/Editorial/Revista/R_02.png", caption: "Portada de la revista." },
        ]
    },
    Lambda: {
        title: "LAMBDA",
        subtitle: `
            <div class="modal-project-summary">
                <p>En una de las asignaturas de comunicación, se nos encargó crear una campaña real para la organización <strong>LAMBDA</strong>.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Campaña de comunicación </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Universitario & Concurso</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · Illustrator · Clip Studio</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">3 semanas</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Campaña/Lambda/L_01.png" alt="Cartel LAMBDA">
                <figcaption class="modal-caption">Pancarta LAMBDA</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto nació en el marco de un concurso oficial convocado por Lambda, la asociación del colectivo LGTB+ dedicada a la defensa de la diversidad sexual, de género y familiar, así como a la lucha por los derechos humanos y la erradicación de la LGTBfobia. El reto planteado exigía crear la campaña de comunicación gráfica para una de sus iniciativas públicas de sensibilización.</p>

                <p>Mi propuesta se estructuró a partir de una dirección gráfica basada en la ilustración digital vibrante y de alto impacto visual, concebida para captar de forma inmediata la atención en el entorno urbano y digital. Sin embargo, este tratamiento estético no restó gravedad al mensaje: se cuidó minuciosamente el tono y la simbología para mantener intacta la esencia reivindicativa, la fuerza de la protesta y la memoria histórica de lucha que caracteriza a la organización.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Conceptualización y estrategia de comunicación social.</li>
                        <li>Diseño del sistema gráfico de campaña.</li>
                        <li>Lógica de ilustración con carga simbólica.</li>
                        <li>Coherencia de marca institucional.</li>
                        <li>Optimización del mensaje para el impacto público.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Campaña/Lambda/L_2.png", full: "Img/Proyectos/Campaña/Lambda/L_02.png", caption: "Cartel LAMBDA." },
            { src: "Img/Proyectos/Campaña/Lambda/L_3.png", full: "Img/Proyectos/Campaña/Lambda/L_03.png", caption: "Camisetas LAMBDA." },
            { src: "Img/Proyectos/Campaña/Lambda/L_4.png", full: "Img/Proyectos/Campaña/Lambda/L_04.png", caption: "Pegatinas LAMBDA." },
            { src: "Img/Proyectos/Campaña/Lambda/L_5.png", full: "Img/Proyectos/Campaña/Lambda/L_05.png", caption: "Chapas LAMBDA." },
            { src: "Img/Proyectos/Campaña/Lambda/L_6.png", full: "Img/Proyectos/Campaña/Lambda/L_06.png", caption: "Marcapáginas LAMBDA." },
        ]
    },
    Nits: {
        title: "NITS DE CINEMA",
        subtitle: `
            <div class="modal-project-summary">
                <p>En la misma asignatura de comunicación, se nos encargó crear una campaña real de la Filmoteca valenciana llamada <strong>Nits de Cinema</strong>.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Editorial </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tipo</span>
                    <span class="fact-value">Universitario</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Herramientas</span>
                    <span class="fact-value">Photoshop · Illustrator · Indesign</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duración</span>
                    <span class="fact-value">1 semana</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Campaña/Nits_imagen derecha.png" alt="Cartel Nits de Cinema">
                <figcaption class="modal-caption">Cartel Nits de Cinema</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>Este proyecto gráfico se desarrolló para La Filmoteca de València (l'Institut Valencià de Cultura), la institución pública de referencia dedicada a la conservación, estudio y difusión del patrimonio cinematográfico y la cultura audiovisual.</p>

                <p>El encargo consistió en la creación de la imagen gráfica para "Nits de Cinema", su icónico ciclo estival de proyecciones nocturnas al aire libre. La propuesta conceptual se articuló en torno al misterio de la noche y la magia del ritual cinéfilo bajo las estrellas. Para transmitir esa atmósfera enigmática, se optó por un lenguaje ilustrativo cargado de simbología, metáforas visuales y una rigurosa construcción mediante elementos geométricos, donde cada forma y figura sintetizaba la esencia, el tono y la trama de los largometrajes que conformaban la cartelera del evento.</p>
                
                <div class="modal-results">
                    <h4>Resultados clave:</h4>
                    <ul>
                        <li>Conceptualización y narrativa metafórica.</li>
                        <li>Sintetización visual de la cartelera.</li>
                        <li>Diseño de sistema de identidad para eventos.</li>
                        <li>Equilibrio entre abstracción y comunicación.</li>
                        <li>Consolidación de la dirección de arte temática.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Campaña/Nits/N_1.png", full: "Img/Proyectos/Campaña/Nits/N_01.png", caption: "Cartel de Nits de Cinema." },
            { src: "Img/Proyectos/Campaña/Nits/N_2.png", full: "Img/Proyectos/Campaña/Nits/N_02.png", caption: "Folleto de Nits de Cinema." },
            { src: "Img/Proyectos/Campaña/Nits/N_3.png", full: "Img/Proyectos/Campaña/Nits/N_03.png", caption: "Tickets de Nits de Cinema." },
            { src: "Img/Proyectos/Campaña/Nits/N_4.png", full: "Img/Proyectos/Campaña/Nits/N_04.png", caption: "Lonas de Nits de Cinema." },
        ]
    }
};

window.addEventListener("DOMContentLoaded", () => {
    initCursor();
    initHeader();
    initReveal();
    initLoading();
    initScrollIndicator();
    initGalleryHover();
    initSpencerOrbit();
    initProjectModal();
    initLightbox();
    initCVAnimation();
});

/*=========================================================
CURSOR PERSONALIZADO
=========================================================*/
function initCursor() {
    const cursor = document.getElementById("cursor");
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function render() {
        currentX += (mouseX - currentX) * CONFIG.cursorSpeed;
        currentY += (mouseY - currentY) * CONFIG.cursorSpeed;
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
        requestAnimationFrame(render);
    }
    render();

    document.body.addEventListener("mouseover", (e) => {
        if (e.target.closest("a, button, .scroll-indicator, .about-image-link, .gallery-row, .spencer-orbit-card a, .modal-card, .modal-featured-media")) {
            cursor.classList.add("cursor-hover");
        }
    });

    document.body.addEventListener("mouseout", (e) => {
        if (e.target.closest("a, button, .scroll-indicator, .about-image-link, .gallery-row, .spencer-orbit-card a, .modal-card, .modal-featured-media")) {
            cursor.classList.remove("cursor-hover");
        }
    });

    window.addEventListener("mousedown", () => cursor.classList.add("cursor-click"));
    window.addEventListener("mouseup", () => cursor.classList.remove("cursor-click"));
}

/*=========================================================
HEADER STICKY
=========================================================*/
function initHeader() {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/*=========================================================
REVEAL ANIMATIONS
=========================================================*/
function initReveal() {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: CONFIG.revealThreshold }
    );

    revealItems.forEach((item) => observer.observe(item));
}

/*=========================================================
PANTALLA DE CARGA
=========================================================*/
function initLoading() {
    const loadingScreen = document.getElementById("loading-screen");
    const loadingTitle = document.getElementById("loading-title");

    if (!loadingScreen) return;

    document.querySelectorAll(".gallery-row a").forEach((element) => {
        element.addEventListener("click", (e) => {
            const destination = element.getAttribute("href");

            if (!destination || destination === "#" || destination.startsWith("javascript")) return;

            e.preventDefault();

            const titleSpan = element.querySelector(".project-title");
            const titleText = titleSpan ? titleSpan.textContent.trim() : "CARGANDO...";

            if (loadingTitle) loadingTitle.textContent = titleText;

            const barFill = loadingScreen.querySelector(".loading-bar-fill");
            if (barFill) {
                barFill.style.animation = 'none';
                barFill.offsetHeight;
                barFill.style.animation = '';
            }

            loadingScreen.classList.remove("hidden");
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                window.location.href = destination;
            }, CONFIG.loadingTime);
        });
    });
}

/*=========================================================
INDICADOR DE SCROLL
=========================================================*/
function initScrollIndicator() {
    const scrollBtn = document.querySelector(".scroll-indicator");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        });
    }
}

/*=========================================================
INTERACCIÓN DE GALERÍA INDEX
=========================================================*/
function initGalleryHover() {
    const galleryRows = document.querySelectorAll(".gallery-row");
    const mainCards = document.querySelectorAll(".main-preview-card");

    if (!galleryRows.length) return;

    const activateCategory = (category) => {
        galleryRows.forEach(row => {
            if (row.dataset.category === category) {
                row.classList.add("active");
            } else {
                row.classList.remove("active");
            }
        });

        mainCards.forEach(card => {
            if (card.id === `preview-${category}`) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    };

    activateCategory("branding");

    galleryRows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            const category = row.dataset.category;
            activateCategory(category);
        });
    });
}

/*=========================================================
ÓRBITA ARRASTRABLE
=========================================================*/
function initSpencerOrbit() {
    if (window.innerWidth <= 768) {
        return;
    }

    const viewport = document.getElementById("orbit-viewport") || document.querySelector(".spencer-orbit-viewport");
    const cards = document.querySelectorAll(".spencer-orbit-card");

    if (!viewport || !cards.length) return;

    const totalCards = cards.length;
    const angleStep = (Math.PI * 2) / totalCards;

    let currentAngle = 0;
    let targetAngle = 0;
    let isDragging = false;
    let startX = 0;
    let dragDistance = 0;
    let clickedProject = null;

    let radiusX = totalCards === 2 ? Math.min(window.innerWidth * 0.15, 180) : Math.min(window.innerWidth * 0.38, 520);
    let radiusY = 45;

    window.addEventListener("resize", () => {
        radiusX = totalCards === 2 ? Math.min(window.innerWidth * 0.15, 180) : Math.min(window.innerWidth * 0.38, 520);
    });

    function render() {
        currentAngle += (targetAngle - currentAngle) * 0.12;

        cards.forEach((card, index) => {
            let angle = currentAngle + (index * angleStep);
            angle = Math.atan2(Math.sin(angle), Math.cos(angle));

            let x, y, rotation, scale;

            if (totalCards === 2) {
                x = Math.cos(angle) * radiusX;
                y = Math.sin(angle) * radiusY;
                rotation = Math.sin(angle) * 12;
                scale = Math.max(0.7, 1 - Math.abs(angle) * 0.22);
            } else {
                x = Math.sin(angle) * radiusX;
                y = (1 - Math.cos(angle)) * radiusY;
                rotation = Math.sin(angle) * 12;
                scale = Math.max(0.7, 1 - Math.abs(angle) * 0.22);
            }
            
            const zIndex = Math.round(1000 - Math.abs(x));
            
            const visibilityThreshold = totalCards === 2 ? Math.PI : Math.PI * 0.8;
            const opacity = Math.abs(angle) > visibilityThreshold ? 0 : 1;

            card.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${scale}) rotate(${rotation}deg)`;
            card.style.zIndex = zIndex;
            card.style.opacity = opacity;

            if (opacity === 0) {
                card.style.pointerEvents = "none";
                card.style.visibility = "hidden";
            } else {
                card.style.pointerEvents = "auto";
                card.style.visibility = "visible";
            }

            if (Math.abs(angle) < angleStep * 0.45) {
                card.classList.add("is-center");
            } else {
                card.classList.remove("is-center");
            }
        });

        requestAnimationFrame(render);
    }

    function snapToNearest() {
        let closestIndex = 0;
        let minDiff = Infinity;

        cards.forEach((_, index) => {
            let angle = targetAngle + (index * angleStep);
            angle = Math.atan2(Math.sin(angle), Math.cos(angle));

            if (Math.abs(angle) < minDiff) {
                minDiff = Math.abs(angle);
                closestIndex = index;
            }
        });

        const diffAngle = Math.atan2(
            Math.sin(-closestIndex * angleStep - targetAngle),
            Math.cos(-closestIndex * angleStep - targetAngle)
        );
        targetAngle += diffAngle;
    }

    viewport.addEventListener("pointerdown", (e) => {
        if (e.button && e.button !== 0) return;
        
        isDragging = true;
        startX = e.clientX;
        dragDistance = 0;
        
        const targetLink = e.target.closest("a");
        clickedProject = targetLink ? targetLink.getAttribute("data-project") : null;

        viewport.classList.add("is-dragging");
        if (viewport.setPointerCapture) {
            viewport.setPointerCapture(e.pointerId);
        }
    });

    viewport.addEventListener("pointermove", (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        dragDistance += Math.abs(deltaX);

        targetAngle += deltaX * 0.0035;
        startX = e.clientX;
    });

    viewport.addEventListener("pointerup", (e) => {
        if (!isDragging) return;
        isDragging = false;
        viewport.classList.remove("is-dragging");

        if (viewport.releasePointerCapture) {
            try { viewport.releasePointerCapture(e.pointerId); } catch(err) {}
        }

        if (dragDistance < 8 && clickedProject) {
            openModal(clickedProject);
        } else {
            snapToNearest();
        }
    });

    cards.forEach((card) => {
        const link = card.querySelector("a");
        if (link) {
            link.addEventListener("click", (e) => e.preventDefault());
        }
    });

    render();
}

/*=========================================================
SISTEMA DE MODAL POPUP
=========================================================*/
function initProjectModal() {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
}

function openModal(projectId) {
    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-title");
    const subtitle = document.getElementById("modal-subtitle");
    const gallery = document.getElementById("modal-gallery");
    const cursor = document.getElementById("cursor");

    if (!modal || !PROJECTS_DATA[projectId]) return;

    const data = PROJECTS_DATA[projectId];

    title.textContent = data.title;
    
    let pdfButtonHTML = "";
    if (data.pdf) {
        const pdfText = data.pdfTitle || "Manual de Identidad [PDF]";
        pdfButtonHTML = `
            <div class="modal-pdf-container">
                <a href="${data.pdf}" target="_blank" rel="noopener noreferrer" class="modal-pdf-btn">
                    <span class="btn-text">${pdfText}</span>
                    <span class="btn-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </span>
                </a>
            </div>
        `;
    }

    subtitle.innerHTML = data.subtitle + pdfButtonHTML;

    gallery.innerHTML = "";

    data.images.forEach((item, index) => {
        const card = document.createElement("figure");
        card.className = "modal-card square-card";

        const imgSrc = typeof item === "string" ? item : item.src;
        const imgFull = typeof item === "object" && item.full ? item.full : imgSrc;
        const imgCaption = typeof item === "object" && item.caption ? item.caption : "";
        
        const isVideo = (typeof item === "object" && item.type === "video") || (imgFull && imgFull.toLowerCase().endsWith(".mp4"));

        if (isVideo) {
            const video = document.createElement("video");
            video.src = imgFull;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.dataset.full = imgFull;
            card.appendChild(video);
        } else {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.dataset.full = imgFull;
            img.alt = `${data.title} - Imagen ${index + 1}`;
            card.appendChild(img);
        }

        if (imgCaption) {
            const captionEl = document.createElement("figcaption");
            captionEl.className = "modal-caption";
            captionEl.textContent = imgCaption;
            card.appendChild(captionEl);
        }

        gallery.appendChild(card);
    });

    if (cursor) {
        cursor.classList.remove("cursor-click", "cursor-hover");
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

/*=========================================================
VISOR FLOTANTE (LIGHTBOX HD)
=========================================================*/
function initLightbox() {
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");
    const modalGallery = document.getElementById("modal-gallery");

    if (!lightbox || !lightboxImg || !lightboxClose || !modalGallery) return;

    modalGallery.addEventListener("click", (event) => {
        const clickedImg = event.target.closest(".modal-card img");
        if (clickedImg) {
            const highResSrc = clickedImg.dataset.full || clickedImg.src;
            lightboxImg.src = highResSrc;
            lightboxImg.alt = clickedImg.alt;
            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");
        }
    });

    const closeLightbox = () => {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        setTimeout(() => {
            lightboxImg.src = "";
        }, 300);
    };

    lightboxClose.addEventListener("click", closeLightbox);
    
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox || event.target === lightboxClose) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
}


function initCVAnimation() {
    const circles = document.querySelectorAll('.circle-item');
    if (!circles.length) return;

    const circleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const circleProgress = item.querySelector('.circle-progress');
                if (circleProgress) {
                    const percent = parseInt(item.getAttribute('data-percent'), 10) || 0;
                    const radius = circleProgress.r.baseVal.value;
                    const circumference = 2 * Math.PI * radius;
                    const offset = circumference - (percent / 100) * circumference;
                    
                    circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
                    circleProgress.style.strokeDashoffset = offset;
                }
                observer.unobserve(item);
            }
        });
    }, { threshold: 0.2 });

    circles.forEach(circle => circleObserver.observe(circle));
}