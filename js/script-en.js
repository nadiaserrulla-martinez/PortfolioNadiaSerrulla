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
                <p>Brand strategy that evolves the static collection of a retro museum into a <strong>cultural experience</strong> lively and interactive. The project starts from the old Recreation Museum to create a new name and a visual language that <strong>It connects arcade nostalgia with modern gaming</strong>.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Rol</span>
                    <span class="fact-value">Branding · Applications · Visual Identity </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">Branding</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Illustrator · Photoshop · Indesign </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">3 weeks</span>
                </div>
            </div>

           <figure class="modal-featured-media">
    <img src="Img/Proyectos/Branding/BITbyBIT/BIT_01.png" alt="Negative logo">
    <figcaption class="modal-caption">Negative logo.</figcaption>
</figure>

<div class="modal-project-details">
    <p>Bit by Bit is the <strong>rebranding of the Museo del Recreativo</strong>, a proposal created to evolve the <strong>historical preservation of video games</strong> into a living, interactive experience. The project updates the institution's identity to <strong>bridge the nostalgia of traditional arcades with contemporary gaming trends</strong>. Through playful naming that speaks to technological language and a new brand architecture, the proposal integrates tournaments, current-generation consoles, and dynamic exhibitions that combine <strong>the past and present of the industry</strong>.</p>
    
    <p>To drive this transformation, I led the rebranding strategy and the comprehensive design of the <strong>new brand experience</strong>. This ranges from the <strong>conceptualization of the naming and visual identity</strong> to the development of the <strong>graphic system for physical exhibitions, interactive spaces, and the museum's communication materials</strong>.</p>

    <p>Beyond the visual redesign, this work demonstrates my ability to reposition a cultural entity, transforming a static collection of objects into a dynamic entertainment space capable of engaging an intergenerational audience.</p>
    
    <div class="modal-results">
        <h4>Key results:</h4>
        <ul>
            <li>Brand strategy and naming development (Bit by Bit).</li>
            <li>Visual identity system and adaptive graphic language.</li>
            <li>Conceptualization of the visitor experience and interactive areas.</li>
            <li>Signage and graphic materials for the exhibition space.</li>
            <li>Promotional assets for communication campaigns and events.</li>
        </ul>
    </div>
</div>
                    </ul>
                </div>
            </div>
        `,
        images: [
     { src: "Img/Proyectos/Branding/BITbyBIT/BIT_03.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_03.png", caption: "BIT by BIT merchandise." },
{ src: "Img/Proyectos/Branding/BITbyBIT/BIT_04.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_04.png", caption: "BIT by BIT brochure." },
{ src: "Img/Proyectos/Branding/BITbyBIT/BIT_05.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_05.png", caption: "BIT by BIT billboard." },
{ src: "Img/Proyectos/Branding/BITbyBIT/BIT_06.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_06.png", caption: "BIT by BIT website homepage." },
{ src: "Img/Proyectos/Branding/BITbyBIT/BIT_07.png", full: "Img/Proyectos/Branding/BITbyBIT/BIT_07.png", caption: "Machine section on the BIT by BIT website." },
        ]
    },
    Lyngard: {
      title: "LYNGÅRD",
        pdf: "PDFs/Manual_Identidad_Lyngard.pdf",
        pdfTitle: "Brand Guidelines - Lyngård [PDF]",
        subtitle: `
            <div class="modal-project-summary">
                <p>A creative ecosystem that evolves a <strong>psychological horror video game</strong> into a solid brand. It originates from a playable pixel art demo (programmed by me) that explores guilt and escapism on a fictional Norwegian island in 1998.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Art Direction · Branding · Crowdfunding campaign</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">Personal project / Bachelor's Thesis</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Illustrator · Photoshop · Clip Studio </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">6 months</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Branding/Lyngard/Lyngard_13.png" alt="Lyngård game environment in pixel art">
                <figcaption class="modal-caption">Outdoor setting in pixel art and lighting integration in GDevelop for the playable demo.</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>To make this universe viable, <strong>I directed the entire visual identity and communication of the project</strong>. This ranges from creating the logo and typographic system to designing the graphic materials required to orchestrate a crowdfunding campaign.</p>
                
                <p>Beyond the interactive proof of concept, this work demonstrates my ability to provide a product with a professional graphic package and design its fundraising strategy.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Brand identity manual.</li>
                        <li>Custom typographic system.</li>
                        <li>Crowdfunding campaign design.</li>
                        <li>Graphic assets and promotional material.</li>
                        <li>Backer reward creation.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
           { src: "Img/Proyectos/Branding/Lyngard/Lyngard_0.png", full: "Img/Proyectos/Branding/Lyngard/L_0.png", caption: "Untextured logo." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_01.png", full: "Img/Proyectos/Branding/Lyngard/L_01.png", caption: "Isotype." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_1.png", full: "Img/Proyectos/Branding/Lyngard/L_1.png", caption: "Main image for the Kickstarter crowdfunding campaign." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_11.png", full: "Img/Proyectos/Branding/Lyngard/L_11.png", caption: "Thank you letter for backers." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_2.png", full: "Img/Proyectos/Branding/Lyngard/L_2.png", caption: "Kickstarter icon: Early tier rewards [Early Bird]." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_3.png", full: "Img/Proyectos/Branding/Lyngard/L_3.png", caption: "Kickstarter icon: Collector's rewards [Collector's Edition]." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_4.png", full: "Img/Proyectos/Branding/Lyngard/L_4.png", caption: "Kickstarter icon: Exclusive in-game rewards [Mind Master]." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_10.png", full: "Img/Proyectos/Branding/Lyngard/L_10.png", caption: "Kickstarter reward: Keychain." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_5.png", full: "Img/Proyectos/Branding/Lyngard/L_5.png", caption: "Kickstarter reward: Digital version of the game [Steam Key]." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_6.png", full: "Img/Proyectos/Branding/Lyngard/L_6.png", caption: "Kickstarter reward: Physical version of the game [Cassette USB drive]." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_7.png", full: "Img/Proyectos/Branding/Lyngard/L_7.png", caption: "Kickstarter reward: Game soundtrack vinyl record." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_8.png", full: "Img/Proyectos/Branding/Lyngard/L_8.png", caption: "Kickstarter reward: Game soundtrack CD." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_9.png", full: "Img/Proyectos/Branding/Lyngard/L_9.png", caption: "Kickstarter reward: Map of Lyngård highlighting key locations." },
{ src: "Img/Proyectos/Branding/Lyngard/Lyngard_14.png", full: "Img/Proyectos/Branding/Lyngard/L_14.png", caption: "Overview of all graphic assets as displayed on Kickstarter." }
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
     
        ]
    },
    LEO: {
       title: "LEO",
        subtitle: `
            <div class="modal-project-summary">
                <p>Redesign of the iconic <strong>Thai beer LEO</strong> to elevate its brand perception and connect with new generations. The proposal transforms the iconic leopard spots into a <strong>dynamic and flexible graphic system</strong>: a variable color code on the label that brings modernity and clearly differentiates each beer variety.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Visual Identity · Flexible branding</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">Visual identity redesign</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Illustrator · Photoshop </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">1 month</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Branding/LEO/LEO_01.png" alt="Redesigned LEO logo">
                <figcaption class="modal-caption">Redesigned LEO logo</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>To articulate this proposal, I led the <strong>complete redesign of the visual identity</strong> and the brand's packaging system. This ranges from the <strong>logo update</strong> and typographic treatment to the <strong>development of the modular graphic system</strong> of leopard spots and color coding for the different varieties.</p>
                
                <p>Beyond the aesthetic renewal, this work demonstrates my ability to reposition a consumer product through professional packaging, revaluing the brand and adapting it to the demands of a young audience.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Visual identity and logo redesign.</li>
                        <li>Adaptable modular graphic system (leopard pattern).</li>
                        <li>Range architecture and color coding by variety.</li>
                        <li>Packaging design for bottles, cans, and multipacks.</li>
                        <li>Graphic assets and promotional material for point of sale.</li>
                    </ul>
                    </ul>
                </div>
            </div>
        `,
        images: [
           { src: "Img/Proyectos/Branding/LEO/LEO_5.png", full: "Img/Proyectos/Branding/LEO/LEO_05.png", caption: "LEO beer mockup with its variants." },
{ src: "Img/Proyectos/Branding/LEO/LEO_2.png", full: "Img/Proyectos/Branding/LEO/LEO_02.png", caption: "LEO Beer label: Lager." },
{ src: "Img/Proyectos/Branding/LEO/LEO_3.png", full: "Img/Proyectos/Branding/LEO/LEO_03.png", caption: "LEO Beer label: Lager Pilsen." },
{ src: "Img/Proyectos/Branding/LEO/LEO_4.png", full: "Img/Proyectos/Branding/LEO/LEO_04.png", caption: "LEO label: Stout." }
        ]
    },
    NIUBO: {
       title: "NIUBÓ",
        subtitle: `
            <div class="modal-project-summary">
                <p>Niubó is a <strong>comprehensive application</strong> designed to revolutionize animal management and care, creating a direct bridge connecting pet owners, veterinary clinics, and animal shelters.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">UX/UI · Visual Identity</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">Animal management app</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Figma · Illustrator </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">2 weeks</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/UX/NIUBO/niubo_1.png" alt="Welcome to Niubó">
                <figcaption class="modal-caption">Welcome to NIUBÓ</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>The platform is structured around two main profiles aimed at covering both individual needs and those of the professional and non-profit sectors: on one hand, a profile focused on veterinary centers and shelters, and on the other, one designed for pet owners and volunteers.</p>
                
                <p>For individual users, the application functions as a personal assistant for animal welfare, enabling comprehensive, centralized tracking of key aspects such as vaccination schedules, feeding routines, weight control, and the convenience of quickly booking appointments. For shelters and veterinary clinics, the tool provides key administrative and logistical support that enables them to efficiently organize, monitor, and optimize the status and management of all animals under their care.</p>

                <p>Additionally, the app stands out for its strong social commitment thanks to a specific feature designed for volunteers. Should a user with this profile encounter a lost, abandoned, or injured animal, the application immediately provides the exact location of the nearest available shelters and veterinary centers, facilitating a fast, coordinated, and effective response to rescue the animal when it needs it most.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Development of a comprehensive app for managing pets, veterinary clinics, and animal shelters.</li>
                        <li>Structuring of distinct profiles for professional centers/shelters and individuals/volunteers.</li>
                        <li>Personal tracking system for daily pet care (vaccinations, feeding, weight, and appointment booking).</li>
                        <li>Logistical management and monitoring platform for animals under the care of shelters and vets.</li>
                        <li>Geolocated emergency feature enabling volunteers to instantly locate available shelters and centers for lost or injured animals.</li>
                        <li>Community platform aimed at learning about and caring for pets or newly rescued animals.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/UX/NIUBO/niubo_02.png", full: "Img/Proyectos/UX/NIUBO/niubo_02.png", caption: "NIUBÓ App splash screen" },
            { src: "Img/Proyectos/UX/NIUBO/niubo_03.png", full: "Img/Proyectos/UX/NIUBO/niubo_03.png", caption: "App registration" },
            { src: "Img/Proyectos/UX/NIUBO/niubo_04.png", full: "Img/Proyectos/UX/NIUBO/niubo_04.png", caption: "Main app screen" },
            { src: "Img/Proyectos/UX/NIUBO/niubo_05.png", full: "Img/Proyectos/UX/NIUBO/niubo_05.png", caption: "NIUBÓ Community" }
        ]
    },
   Mareabrumosa: {
        title: "Marea Brumosa",
        subtitle: `
            <div class="modal-project-summary">
                <p>Marea Brumosa is the title of this <strong>overlay</strong>, inspired by how night stars lie in a hazy reflection within ocean fog.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Overlay </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">Free theme</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Photoshop · After Effects </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">2 weeks</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Overlay/marea/marea_0.png" alt="Background">
                <figcaption class="modal-caption">Overlay background</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>This project marked a very special milestone as my first overlay, allowing me to understand firsthand how design can make a strong impact within a sector closely linked to the gaming industry, such as streaming.</p>
                
                <p>Developing this piece was a highly engaging process that synergistically connected multiple creative disciplines. The proposal seamlessly blends illustration art, solid graphic design fundamentals, and the dynamism of motion graphics, giving the livestream a unique, immersive visual atmosphere full of personality.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Conceptualization and design of "Marea Brumosa", my first streaming overlay project.</li>
                        <li>Exploration of design opportunities within the gaming industry and live streaming.</li>
                        <li>Multidisciplinary fusion of illustration art, graphic design, and motion graphics.</li>
                        <li>Creation of a visual atmosphere based on the narrative of ocean fog and night stars.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Overlay/marea/marea_01.png", full: "Img/Proyectos/Overlay/marea/marea_1.png", type: "image", caption: "Marea Brumosa Overlay Image" },
            { src: "Img/Proyectos/Overlay/marea/marea_01.png", full: "video/marea_0.mp4", type: "video", caption: "Marea Brumosa Overlay Video" }
        ]
    },
    AC: {
     title: "Animal Crossing: New Horizons",
        subtitle: `
            <div class="modal-project-summary">
                <p>This loading screen overlay was created for streaming the video game <strong>Animal Crossing: New Horizons</strong>, featuring iconic elements from the game such as the beach, seashells, etc.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Loading screen overlay </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">Video game themed</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Photoshop · After Effects </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">1 week</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Overlay/AC/AC_01.png" alt="Background">
                <figcaption class="modal-caption">Overlay background</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>This project represented a step forward in my technical evolution, focusing on the design of a themed loading screen inspired by Animal Crossing. This work allowed me to delve deeper into design's capacity to enhance user experience and directly connect with a game's community through its most iconic elements.</p>
                
                <p>Developing this piece was a highly enriching technical process in which I paid special attention to illustration, integrated element design, and detailed animation. My main goal was to reflect the game's characteristic essence and charm, taking care of every aspect to provide the transition with an authentic, cozy visual atmosphere faithful to the original universe.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Comprehensive conceptualization and development of a loading screen overlay inspired by Animal Crossing.</li>
                        <li>Thorough focus on custom illustration and key element animation to translate the game's aesthetic into the streaming environment.</li>
                        <li>Reflection of the game's narrative and visual essence, prioritizing an interface that felt familiar and appealing to its community.</li>
                        <li>Design optimization ensuring the piece fulfilled a practical function without sacrificing artistic quality and creative detail.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Overlay/AC/AC_01.png", full: "video/AC.mp4", caption: "Animal Crossing: New Horizons Overlay Video" },
        ]
    },
    BG3: {
      title: "Baldur's Gate 3",
        subtitle: `
            <div class="modal-project-summary">
                <p>This project is conceived as a comprehensive atmospheric piece for <strong>Baldur's Gate 3</strong>. The design is inspired by the game's dark and epic aesthetic, merging iconic elements from its narrative to transport the viewer directly into the heart of the adventure.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Overlay </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">Video game themed</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Photoshop · After Effects </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">1.5 weeks</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Overlay/BG3/BG3_2.png" alt="Background">
                <figcaption class="modal-caption">Loading screen overlay background</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>This project marked a very special milestone as my first overlay, allowing me to understand firsthand how design can make a strong impact within a sector closely linked to the gaming industry, such as streaming.</p>
                
                <p>To date, this project represents my most ambitious and accomplished work. Dealing with a universe as vast and visually rich as Baldur's Gate 3 has allowed me to take my illustration and visual storytelling skills to a higher level, achieving an aesthetic fidelity that respects and honors the original essence of Larian Studios' title.</p>

                <p>Developing this piece was a complex exercise in balance. On one hand, I designed the main overlay for active gameplay sessions; on the other, I created a break screen that serves as an immersive pause space. The proposal stands out for the depth of its illustrations, created from scratch to evoke the game's fantasy setting, and for technical integration where the animation of graphic elements reinforces the magical and perilous atmosphere that defines the user's experience in the game. It is, without a doubt, the piece where I have best managed to balance functional design with the artistic standards deserving of a title of this magnitude.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Comprehensive conceptualization and design of "Baldur's Gate 3 Overlay", including the active streaming version and the break screen.</li>
                        <li>Achievement of high visual and aesthetic fidelity to the original video game, making it the project with the highest technical quality to date.</li>
                        <li>Advanced mastery of digital illustration applied to creating complex, atmospheric settings.</li>
                        <li>Optimization of visual storytelling to ensure an immersive experience, during both high-action moments and break transitions.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Overlay/BG3/BG3_02.png", full: "Img/Proyectos/Overlay/BG3/BG3_2.png", caption: "Baldur's Gate 3 loading screen overlay" },
            { src: "Img/Proyectos/Overlay/BG3/BG3_03.png", full: "Img/Proyectos/Overlay/BG3/BG3_3.png", caption: "Baldur's Gate 3 overlay" },
            { src: "Img/Proyectos/Overlay/BG3/BG3_04.png", full: "Img/Proyectos/Overlay/BG3/BG3_4.png", caption: "Baldur's Gate 3 overlay variations (with or without camera)" },
        ]
    },
   PICAPICA: {
        title: "PICA PICA Festival",
        subtitle: `
            <div class="modal-project-summary">
                <p>PICA PICA Festival is a <strong>university project</strong> that reflected one of the degree assignments I enjoyed so much. The design is inspired by the friendly, illustrative aesthetic of the atmosphere we wanted to convey: community.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Poster design </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">University project</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Photoshop · Illustrator </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">2 weeks</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/carteleria/Cartel_PICAPICA_imagen_derecha.png" alt="Background">
                <figcaption class="modal-caption">PICA PICA background</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>This project was born in an academic environment, where we were challenged to create a festival from scratch focused on engaging people in communicative activities and workshops. That is how we came up with the PICA PICA festival, a dynamic concept where each attendee could "sample" from every workshop and learn mutually in a fluid, enriching way.</p>

                <p>The entire visual development was created using an entirely illustrative approach, as it was the ideal medium to catch the audience's attention right from the start, while also reflecting the wide diversity of vegetation and the variety of people gathering at the event.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Comprehensive conceptualization and design of "Baldur's Gate 3 Overlay", including the active streaming version and the break screen.</li>
                        <li>Achievement of high visual and aesthetic fidelity to the original video game, making it the project with the highest technical quality to date.</li>
                        <li>Advanced mastery of digital illustration applied to creating complex, atmospheric settings.</li>
                        <li>Optimization of visual storytelling to ensure an immersive experience, during both high-action moments and break transitions.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Carteleria/Cartel_PICAPICA_imagen_derecha.png", full: "Img/Proyectos/Carteleria/cartel PICA PICA.png", caption: "PICA PICA Festival Image" },
        ]
    },
    Anuario: {
        title: "YEARBOOK 2023/2024",
        pdf: "PDFs/Anuario_Nadia Serrulla.pdf",
        pdfTitle: "Yearbook 2023/2024 [PDF]",
        subtitle: `
            <div class="modal-project-summary">
                <p>During my second year of university, we were tasked with creating the <strong>university yearbook</strong> as the final project for the Editorial Design course.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Editorial Design </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">University project</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Photoshop · Illustrator · InDesign</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">2.5 weeks</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Editorial/Anuario/Anuario_imagen_derecha.png" alt="Background">
                <figcaption class="modal-caption">Detail of a Yearbook page</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>This editorial project was born with the goal of designing a corporate and visual yearbook whose central concept reflected the elegance and sophistication of a high-end fashion showcase. To build that premium atmosphere, every graphic decision was meticulously curated: a calligraphic-style typeface—bringing a signature of distinction and delicacy typical of haute couture—was combined with a clean, modern sans-serif to structure legible text blocks.</p>

                <p>The core differentiator of the project was its color palette, articulated around international trends from the Pantone Color Institute by integrating the bold Viva Magenta (Pantone Color of the Year 2023) alongside the soft and inviting Peach Fuzz (Pantone Color of the Year 2024).</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Technical mastery in editorial layout design.</li>
                        <li>Dynamic grid structuring.</li>
                        <li>Effective translation of the underlying concept.</li>
                        <li>Mastery of color theory and practical application.</li>
                        <li>Art direction and overall aesthetic consistency.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Editorial/Anuario/Anuario_1.png", full: "Img/Proyectos/Editorial/Anuario/Anuario_01.png", caption: "Yearbook page mockup" },
            { src: "Img/Proyectos/Editorial/Anuario/Anuario_2.png", full: "Img/Proyectos/Editorial/Anuario/Anuario_02.png", caption: "Yearbook cover" },
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
                <p>In one of my communication courses, we were tasked with creating a real campaign for the organization <strong>LAMBDA</strong>.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Communication Campaign </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">University project & Contest</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Photoshop · Illustrator · Clip Studio</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">3 weeks</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Campaña/Lambda/L_01.png" alt="LAMBDA Poster">
                <figcaption class="modal-caption">LAMBDA Banner</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>This project was developed within the framework of an official contest hosted by Lambda, an LGBTQ+ association dedicated to advocating for sexual, gender, and family diversity, as well as fighting for human rights and eradicating LGBTQphobia. The challenge required creating a graphic communication campaign for one of their public awareness initiatives.</p>

                <p>My proposal was built around an art direction based on vibrant, high-impact digital illustration, designed to immediately capture attention in both urban and digital environments. However, this aesthetic approach did not diminish the weight of the message: tone and symbolism were meticulously crafted to preserve the activist essence, the power of protest, and the historical memory of struggle that defines the organization.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Conceptualization and social communication strategy.</li>
                        <li>Design of the campaign graphic system.</li>
                        <li>Illustration approach with symbolic meaning.</li>
                        <li>Institutional brand consistency.</li>
                        <li>Optimization of the message for public impact.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Campaña/Lambda/L_2.png", full: "Img/Proyectos/Campaña/Lambda/L_02.png", caption: "LAMBDA Poster." },
            { src: "Img/Proyectos/Campaña/Lambda/L_3.png", full: "Img/Proyectos/Campaña/Lambda/L_03.png", caption: "LAMBDA T-shirts." },
            { src: "Img/Proyectos/Campaña/Lambda/L_4.png", full: "Img/Proyectos/Campaña/Lambda/L_04.png", caption: "LAMBDA Stickers." },
            { src: "Img/Proyectos/Campaña/Lambda/L_5.png", full: "Img/Proyectos/Campaña/Lambda/L_05.png", caption: "LAMBDA Pins." },
            { src: "Img/Proyectos/Campaña/Lambda/L_6.png", full: "Img/Proyectos/Campaña/Lambda/L_06.png", caption: "LAMBDA Bookmarks." },
        ]
    },
    Nits: {
        title: "NITS DE CINEMA",
        subtitle: `
            <div class="modal-project-summary">
                <p>In the same communication course, we were tasked with creating a real campaign for the Valencian Filmoteca called <strong>Nits de Cinema</strong>.</p>
            </div>

            <div class="modal-quick-facts">
                <div class="fact-col">
                    <span class="fact-label">Role</span>
                    <span class="fact-value">Editorial Design </span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Type</span>
                    <span class="fact-value">University project</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Tools</span>
                    <span class="fact-value">Photoshop · Illustrator · InDesign</span>
                </div>
                <div class="fact-col">
                    <span class="fact-label">Duration</span>
                    <span class="fact-value">1 week</span>
                </div>
            </div>

            <figure class="modal-featured-media">
                <img src="Img/Proyectos/Campaña/Nits_imagen derecha.png" alt="Nits de Cinema Poster">
                <figcaption class="modal-caption">Nits de Cinema Poster</figcaption>
            </figure>

            <div class="modal-project-details">
                <p>This graphic design project was developed for La Filmoteca de València (l'Institut Valencià de Cultura), the leading public institution dedicated to the preservation, study, and dissemination of cinematographic heritage and audiovisual culture.</p>

                <p>The assignment consisted of creating the graphic identity for "Nits de Cinema," their iconic summer series of outdoor nighttime screenings. The conceptual proposal was built around the mystery of the night and the magic of the cinephile ritual under the stars. To convey this enigmatic atmosphere, an illustrative approach was chosen—rich in symbolism, visual metaphors, and precise geometric construction—where each shape and figure synthesized the essence, tone, and plot of the feature films featured on the event's lineup.</p>
                
                <div class="modal-results">
                    <h4>Key results:</h4>
                    <ul>
                        <li>Conceptualization and metaphorical narrative.</li>
                        <li>Visual synthesis of the film lineup.</li>
                        <li>Event identity system design.</li>
                        <li>Balance between abstraction and effective communication.</li>
                        <li>Consolidation of thematic art direction.</li>
                    </ul>
                </div>
            </div>
        `,
        images: [
            { src: "Img/Proyectos/Campaña/Nits/N_1.png", full: "Img/Proyectos/Campaña/Nits/N_01.png", caption: "Nits de Cinema Poster." },
            { src: "Img/Proyectos/Campaña/Nits/N_2.png", full: "Img/Proyectos/Campaña/Nits/N_02.png", caption: "Nits de Cinema Brochure." },
            { src: "Img/Proyectos/Campaña/Nits/N_3.png", full: "Img/Proyectos/Campaña/Nits/N_03.png", caption: "Nits de Cinema Tickets." },
            { src: "Img/Proyectos/Campaña/Nits/N_4.png", full: "Img/Proyectos/Campaña/Nits/N_04.png", caption: "Nits de Cinema Banners." },
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

/*=========================================================
ANIMACIÓN CV: CÍRCULOS DE HABILIDADES
=========================================================*/
function initCVAnimation() {
    const circles = document.querySelectorAll('.circle-item');
    if (!circles.length) return;

    const circleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const circleProgress = item.querySelector('.circle-progress');
                if (circleProgress) {
                    const percent = parseInt(item.getAttribute('data-percent'), 10);
                    const circumference = 283;
                    const offset = circumference - (percent / 100) * circumference;
                    
                    circleProgress.style.strokeDashoffset = offset;
                    item.classList.add('animado');
                }
                observer.unobserve(item);
            }
        });
    }, {
        threshold: 0.3 
    });

    circles.forEach(circle => {
        circleObserver.observe(circle);
    });
}