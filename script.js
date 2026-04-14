const translations = {
    pt: {
        nav_home: "Home",
        nav_infra: "Infraestrutura",
        nav_digital: "Desenvolvimento",
        nav_growth: "Growth & Cyber",
        nav_contato: "Contato",
        hero_h1: 'Soluções inteligentes para um mundo <span class="highlight">conectado</span>.',
        hero_bio: 'Na TZORI, projetamos o futuro da segurança e conectividade. Combinamos engenharia de infraestrutura física com inteligência digital avançada para proteger seu património e escalar seu negócio. Do cablagem estruturada ao código de alta performance, entregamos soluções robustas para um mundo sem fronteiras.',
        tag_infra: "Infraestrutura",
        infra_h2: "Segurança e Conectividade Física",
        infra_p: "Protegemos seu património com o que há de mais moderno em hardware e redes.",
        infra_li1: "✔ Monitorização por câmaras com acesso remoto.",
        infra_li2: "✔ Projetos de Wi-Fi Mesh para cobertura total.",
        infra_li3: "✔ Fechaduras biométricas e eletrónicas.",
        btn_orcamento: "Solicitar Orçamento",
        tag_digital: "Desenvolvimento",
        digital_h2: "Sites e Aplicações Mobile",
        digital_p: "Construímos a sua presença digital com foco em performance, design e conversão.",
        digital_li1: "✔ Landing Pages e Sites Institucionais.",
        digital_li2: "✔ Aplicações customizadas (iOS e Android).",
        digital_li3: "✔ Design UI/UX moderno e responsivo.",
        btn_desenvolver: "Desenvolver Projeto",
        tag_growth: "Growth & Security",
        growth_h2: "Tráfego Pago e Cibersegurança",
        growth_p: "Escalamos o seu faturamento e protegemos a sua operação contra ameaças digitais.",
        growth_li1: "✔ Gestão de anúncios no Google e Meta Ads.",
        growth_li2: "✔ Blindagem de contas e auditoria de sistemas.",
        growth_li3: "✔ Estratégias de escala baseadas em dados.",
        btn_consultoria: "Consultoria Digital",
        footer_text: "Tecnologia & Cibersegurança"
    },
    es: {
        nav_home: "Inicio",
        nav_infra: "Infraestructura",
        nav_digital: "Desarrollo",
        nav_growth: "Growth & Cyber",
        nav_contato: "Contacto",
        hero_h1: 'Soluciones inteligentes para un mundo <span class="highlight">conectado</span>.',
        hero_bio: 'En TZORI, diseñamos el futuro de la seguridad y la conectividad. Combinamos ingeniería de infraestructura física con inteligencia digital avanzada para proteger su patrimonio y escalar su negocio. Desde el cableado estructurado hasta el código de alto rendimiento, entregamos soluciones robustas para un mundo sin fronteras.',
        tag_infra: "Infraestructura",
        infra_h2: "Seguridad y Conectividad Física",
        infra_p: "Protegemos su patrimonio con lo último en hardware y redes.",
        infra_li1: "✔ Monitoreo por cámaras con acceso remoto.",
        infra_li2: "✔ Proyectos de Wi-Fi Mesh para cobertura total.",
        infra_li3: "✔ Cerraduras biométricas y electrónicas.",
        btn_orcamento: "Solicitar Presupuesto",
        tag_digital: "Desarrollo",
        digital_h2: "Sitios y Aplicaciones Móviles",
        digital_p: "Construimos su presencia digital con enfoque en rendimiento, diseño y conversión.",
        digital_li1: "✔ Landing Pages y Sitios Institucionales.",
        digital_li2: "✔ Aplicaciones personalizadas (iOS e Android).",
        digital_li3: "✔ Diseño UI/UX moderno y responsivo.",
        btn_desenvolver: "Desarrollar Proyecto",
        tag_growth: "Growth & Security",
        growth_h2: "Tráfico Pago y Ciberseguridad",
        growth_p: "Escalamos su facturación y protegemos su operación contra amenazas digitales.",
        growth_li1: "✔ Gestión de anuncios en Google y Meta Ads.",
        growth_li2: "✔ Blindaje de cuentas y auditoría de sistemas.",
        growth_li3: "✔ Estrategias de escala basadas en datos.",
        btn_consultoria: "Consultoría Digital",
        footer_text: "Tecnología y Ciberseguridad"
    }
};

// --- MANTENHA AS FUNÇÕES ABAIXO ---
function setLanguage(lang) {
    localStorage.setItem('tzori_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

window.onload = () => {
    const savedLang = localStorage.getItem('tzori_lang') || 'pt';
    setLanguage(savedLang);
};

// ... (Restante do código de slide e parallax)

// --- EFEITO PARALLAX ---
const bg = document.querySelector('.circuit-bg');
let ticking = false;

window.addEventListener('mousemove', (e) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            bg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            ticking = false;
        });
        ticking = true;
    }
});

// --- SCROLL SUAVE ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// --- GALERIA ---
function changeSlide(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const slides = container.querySelectorAll('.slide');
    let activeIndex = 0;

    slides.forEach((s, i) => {
        if (s.classList.contains('active')) {
            activeIndex = i;
            s.classList.remove('active');
        }
    });

    let nextIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[nextIndex].classList.add('active');
}

// --- INICIALIZAÇÃO ---
window.onload = () => {
    const savedLang = localStorage.getItem('tzori_lang') || 'pt';
    setLanguage(savedLang);
};