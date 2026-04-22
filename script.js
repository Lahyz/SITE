// 1. EASTER EGG (Logo no topo para garantir que carregue)
console.log(
    "%c TZORI SECURITY %c Sistema Protegido v2.0 ",
    "background: #2ed5ff; color: #000; font-weight: bold; padding: 5px; border-radius: 3px 0 0 3px;",
    "background: #000; color: #2ed5ff; padding: 5px; border-radius: 0 3px 3px 0; border: 1px solid #2ed5ff;"
);

// 2. DICIONÁRIO DE TRADUÇÃO
const translations = {
    pt: {
        // Navegação
        nav_home: "Home",
        nav_infra: "Infraestrutura",
        nav_digital: "Sites",
        nav_trafego: "Growth Marketing",
        nav_cyber: "Cibersegurança",
        nav_contact: "Contato",

        // Hero
        hero_bio: "<strong>Infraestrutura, sistemas e segurança digital sem margem para falhas.</strong> A <strong>TZORI</strong> projeta e implementa soluções tecnológicas completas para empresas que precisam de estabilidade, proteção e desempenho real.",

        // Infraestrutura
        tag_infra: "INFRAESTRUTURA & REDES",
        title_infra: "Infraestrutura Tecnológica",
        infra_p: "Projetamos redes corporativas robustas e sistemas de monitoramento que garantem operação contínua, segurança e controle total do ambiente.",
        infra_t1: "Wi-Fi Mesh: Cobertura total sem pontos cegos.",
        infra_t2: "Sistemas de CFTV com acesso remoto e alta definição",
        infra_t3: "Redes estáveis, seguras e preparadas para expansão",
        infra_resultado: "Infraestrutura tecnológica robusta, segura e preparada para o crescimento.",
        btn_infra: "Diagnóstico de Infraestrutura",

        // Sites
        tag_digital: "SITES & APLICAÇÕES",
        title_digital: "Sistemas Digitais que Geram Resultado",
        digital_p: "Desenvolvemos sites e aplicações com foco em performance, usabilidade e conversão alinhados aos objetivos reais do seu negócio.",
        site_t1: "<strong>Performance:</strong> Estrutura otimizada para velocidade e desempenho",
        site_t2: "<strong>UX Design:</strong> Experiência do usuário pensada para conversão",
        resultado_p: "Presença digital profissional que atrai, engaja e converte.",
        btn_digital: "Análise de Performance Grátis",

        // Tráfego (Bento)
        tag_trafego: "Growth Marketing",
        title_trafego: "Performance que escala",
        traf_t1: "Dominamos os algoritmos para converter cliques em faturamento previsível através de estratégias de SEO e Paid Media.",
        btn_trafego: "Escalar meu Negócio",
        traf_stat_roas: "Média de ROAS",
        traf_stat_time: "Tempo de Resposta",
        traf_graph_label: "Crescimento Mensal",

        // Segurança
        tag_cyber: "Security",
        title_cyber: "Cibersegurança",
        cyber_t1: "<strong>Auditoria:</strong> Auditoria completa de segurança.",
        cyber_t2: "<strong>Blindagem:</strong> Segurança total de ativos.",
        cyber_t3: "<strong>Implementação:</strong> Medidas preventivas e corretivas para garantir a segurança contínua do ambiente digital.",
        cyber_resultado: "Ambiente digital seguro, protegido contra ameaças e vulnerabilidades.",
        btn_cyber: "Blindar meu Negócio",

        // Footer
        footer_rights: "Todos os direitos reservados."
    },
    es: {
        // Traduções correspondentes para Espanhol
        nav_home: "Inicio",
        nav_infra: "Infraestructura",
        nav_digital: "Sitios Web",
        nav_trafego: "Growth Marketing",
        nav_cyber: "Ciberseguridad",
        nav_contact: "Contacto",
        hero_bio: "<strong>Infraestructura, sistemas y seguridad digital sin margen de error.</strong> <strong>TZORI</strong> diseña e implementa soluciones tecnológicas para empresas que exigen estabilidad y rendimiento real.",
        tag_infra: "INFRAESTRUCTURA & REDES",
        title_infra: "Infraestructura Tecnológica",
        infra_p: "Diseñamos redes corporativas robustas y sistemas de monitoreo que garantizan operación continua, seguridad y control total.",
        infra_t1: "Wi-Fi Mesh: Cobertura total sin puntos ciegos.",
        infra_t2: "Sistemas de CCTV con acceso remoto y alta definición",
        infra_t3: "Redes estables, seguras y preparadas para la expansión",
        infra_resultado: "Infraestructura tecnológica robusta, segura y preparada para el crecimiento.",
        btn_infra: "Diagnóstico de Infraestructura",
        tag_digital: "SITIOS & APLICACIONES",
        title_digital: "Sistemas Digitales que Generan Resultados",
        digital_p: "Desarrollamos sitios y aplicaciones enfocados en rendimiento, usabilidad y conversión alineados a sus objetivos reales.",
        site_t1: "<strong>Performance:</strong> Estructura optimizada para velocidad y rendimiento",
        site_t2: "<strong>UX Design:</strong> Experiencia de usuario pensada para la conversión",
        resultado_p: "Presencia digital profesional que atrae, involucra y convierte.",
        btn_digital: "Análisis de Rendimiento Gratis",

        tag_trafego: "Growth Marketing",
        title_trafego: "Rendimiento que escala",
        traf_t1: "Dominamos los algoritmos para convertir clics en facturación previsible a través de estrategias de SEO y Paid Media.",
        btn_trafego: "Escalar mi Negocio",
        traf_stat_roas: "Promedio de ROAS",
        traf_stat_time: "Tiempo de Respuesta",
        traf_graph_label: "Crecimiento Mensual",

        tag_cyber: "Security",
        title_cyber: "Ciberseguridad",
        cyber_t1: "<strong>Auditoría:</strong> Auditoría completa de seguridad.",
        cyber_t2: "<strong>Blindaje:</strong> Seguridad total de activos.",
        cyber_t3: "<strong>Implementación:</strong> Medidas preventivas y correctivas para garantizar la seguridad continua del entorno digital.",
        cyber_resultado: "Entorno digital seguro, protegido contra amenazas y vulnerabilidades.",
        btn_cyber: "Blindar mi Negocio",
        footer_rights: "Todos los derechos reservados."
    }
};

// 3. FUNÇÃO DE TRADUÇÃO (Corrigida com innerHTML)
function setLanguage(lang) {
    localStorage.setItem('tzori_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('lang-active');
        if(btn.innerText.toLowerCase() === lang) btn.classList.add('lang-active');
    });
}

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