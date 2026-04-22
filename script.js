// 1. EASTER EGG (Logo no topo para garantir que carregue)
console.log(
    "%c TZORI SECURITY %c Sistema Protegido v2.0 ",
    "background: #2ed5ff; color: #000; font-weight: bold; padding: 5px; border-radius: 3px 0 0 3px;",
    "background: #000; color: #2ed5ff; padding: 5px; border-radius: 0 3px 3px 0; border: 1px solid #2ed5ff;"
);

// 2. DICIONÁRIO DE TRADUÇÃO
const translations = {
    pt: {
        nav_home: "Home",
        nav_infra: "Smart Infra",
        nav_digital: "SEO Systems",
        nav_trafego: "Business Growth",
        nav_cyber: "Cyber Security",
        btn_contato: "Fale Conosco",
        hero_bio: "<strong>Infraestrutura, sistemas e segurança digital sem margem para falhas.</strong> A <strong>TZORI</strong> projeta e implementa soluções tecnológicas completas para empresas que precisam de estabilidade, proteção e desempenho real.",
        
        // Especialidades
        tag_servicos: "SOLUÇÕES",
        title_servicos: "Especialidades TZORI",
        desc_grid_infra: "Automação e redes Mesh.",
        desc_grid_digital: "Sites para o topo do Google.",
        desc_grid_trafego: "BI e Gestão de faturamento.",
        desc_grid_cyber: "Blindagem e auditoria crítica.",

        // Seção Infra
        tag_infra: "INFRAESTRUTURA & REDES",
        title_infra: "Infraestrutura Tecnológica",
        infra_p: "Projetamos redes corporativas robustas e sistemas de monitoramento que garantem operação contínua.",
        infra_t1: "Wi-Fi Mesh: Cobertura total sem pontos cegos.",
        infra_t2: "Sistemas de CFTV com acesso remoto",
        infra_t3: "Redes estáveis e preparadas para expansão",
        btn_infra: "Diagnóstico de Infraestrutura",

        // Seção Digital
        tag_digital: "SITES & APLICAÇÕES",
        title_digital: "Sistemas Digitais que Geram Resultado",
        digital_p: "Desenvolvemos sites com foco em performance, usabilidade e conversão.",
        site_t1: "Performance otimizada para velocidade",
        site_t2: "UX Design focado em conversão",
        btn_digital: "Análise de Performance Grátis",

        // Seção Growth
        tag_trafego: "Growth Marketing",
        title_trafego: "Performance que escala",
        traf_t1: "Dominamos algoritmos para converter cliques em faturamento previsível.",
        btn_trafego: "Escalar meu Negócio",
        traf_stat_roas: "Média de ROAS",
        traf_stat_time: "Tempo de Resposta",

        // Seção Cyber
        tag_cyber: "Security",
        title_cyber: "Cibersegurança",
        cyber_t1: "Auditoria completa de segurança",
        cyber_t2: "Blindagem total de ativos",
        cyber_t3: "Medidas preventivas contra ataques",
        btn_cyber: "Blindar meu Negócio",

        // Por que nos contratar
        tag_why: "POR QUE A TZORI?",
        title_why: "Engenharia que gera autoridade e lucro",
        why_1_title: "Infraestrutura de Elite",
        why_1_desc: "Redes Mesh e automação blindada que eliminam quedas.",
        why_1_ben: "Benefício: Estabilidade total.",
        why_2_title: "Sistemas Focados em SEO",
        why_2_desc: "Ferramentas de guerra otimizadas para o Google.",
        why_2_ben: "Benefício: Vendas orgânicas.",
        why_3_title: "Decisões Baseadas em Dados (BI)",
        why_3_desc: "Gestão de tráfego que escala seu ROI com transparência.",
        why_3_ben: "Benefício: Escala previsível.",
        why_4_title: "Cyber Security Nativa",
        why_4_desc: "Segurança bancária em todos os projetos digitais.",
        why_4_ben: "Benefício: Blindagem contra ataques.",
        
        footer_rights: "Todos os direitos reservados."
    },
    es: {
        nav_home: "Inicio",
        nav_infra: "Smart Infra",
        nav_digital: "SEO Systems",
        nav_trafego: "Business Growth",
        nav_cyber: "Cyber Security",
        btn_contato: "Contacto",
        hero_bio: "<strong>Infraestructura, sistemas y seguridad digital sin margen de error.</strong> <strong>TZORI</strong> diseña e implementa soluciones tecnológicas para empresas que exigen estabilidad y rendimiento real.",
        
        // Especialidades
        tag_servicos: "SOLUCIONES",
        title_servicos: "Especialidades TZORI",
        desc_grid_infra: "Automatización y redes Mesh.",
        desc_grid_digital: "Sitios para el top de Google.",
        desc_grid_trafego: "BI y Gestión de facturación.",
        desc_grid_cyber: "Blindaje y auditoría crítica.",

        // Seção Infra
        tag_infra: "INFRAESTRUCTURA & REDES",
        title_infra: "Infraestructura Tecnológica",
        infra_p: "Diseñamos redes corporativas robustas y sistemas de monitoreo que garantizan operación continua.",
        infra_t1: "Wi-Fi Mesh: Cobertura total sin puntos ciegos.",
        infra_t2: "Sistemas de CCTV con acceso remoto",
        infra_t3: "Redes estables y preparadas para expansión",
        btn_infra: "Diagnóstico de Infraestructura",

        // Seção Digital
        tag_digital: "SITIOS & APLICACIONES",
        title_digital: "Sistemas Digitales que Generan Resultados",
        digital_p: "Desarrollamos sitios enfocados en rendimiento, usabilidad y conversión.",
        site_t1: "Rendimiento optimizado para velocidad",
        site_t2: "UX Design enfocado en conversión",
        btn_digital: "Análisis de Rendimiento Gratis",

        // Seção Growth
        tag_trafego: "Growth Marketing",
        title_trafego: "Rendimiento que escala",
        traf_t1: "Dominamos algoritmos para convertir clics en facturación previsible.",
        btn_trafego: "Escalar mi Negocio",
        traf_stat_roas: "Promedio de ROAS",
        traf_stat_time: "Tiempo de Respuesta",

        // Seção Cyber
        tag_cyber: "Security",
        title_cyber: "Ciberseguridad",
        cyber_t1: "Auditoría completa de seguridad",
        cyber_t2: "Blindaje total de activos",
        cyber_t3: "Medidas preventivas contra ataques",
        btn_cyber: "Blindar mi Negocio",

        // Por que nos contratar
        tag_why: "¿POR QUÉ TZORI?",
        title_why: "Ingeniería que genera autoridad y ganancias",
        why_1_title: "Infraestructura de Élite",
        why_1_desc: "Redes Mesh y automatización blindada que eliminan caídas.",
        why_1_ben: "Beneficio: Estabilidad total.",
        why_2_title: "Sistemas Enfocados en SEO",
        why_2_desc: "Herramientas de guerra optimizadas para Google.",
        why_2_ben: "Beneficio: Ventas orgánicas.",
        why_3_title: "Decisiones Basadas en Datos (BI)",
        why_3_desc: "Gestión de tráfico que escala su ROI con transparencia.",
        why_3_ben: "Beneficio: Escala previsible.",
        why_4_title: "Ciberseguridad Nativa",
        why_4_desc: "Seguridad bancaria en todos los proyectos digitales.",
        why_4_ben: "Beneficio: Blindaje contra ataques.",

        footer_rights: "Todos los derechos reservados."
    }
};

// Função para aplicar a tradução
function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    // Opcional: salvar preferência
    localStorage.setItem("preferredLang", lang);
}

// Inicializar com idioma salvo ou padrão
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("preferredLang") || "pt";
    setLanguage(savedLang);
});

// 4. O FUNDO LEGAL (PONTOS DINÂMICOS)
const canvas = document.getElementById('circuitCanvas');
const ctx = canvas.getContext('2d');
let w, h, particles;

function initCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 2,
            speedY: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = h;
        ctx.fillStyle = `rgba(46, 213, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

// 5. INICIALIZAÇÃO AO CARREGAR A PÁGINA
window.addEventListener('load', () => {
    initCanvas();
    animate();
    const savedLang = localStorage.getItem('tzori_lang') || 'pt';
    setLanguage(savedLang);

    // Efeito de revelação (Scroll)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('appear');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.nicho-section').forEach(s => observer.observe(s));
});

window.addEventListener('resize', initCanvas);