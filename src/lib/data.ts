import houseOne from "@/assets/images/house-1.png";
import houseTwo from "@/assets/images/house-2.png";
import houseThree from "@/assets/images/house-3.png";
import houseFour from "@/assets/images/house-4.png";
import houseFive from "@/assets/images/house-5.png";
import serviceOne from "@/assets/images/service-1.png";
import serviceTwo from "@/assets/images/service-2.png";
import serviceThree from "@/assets/images/service-3.png";
import serviceFour from "@/assets/images/service-4.png";
import serviceFive from "@/assets/images/service-5.png";
import serviceSix from "@/assets/images/service-6.png";
import serviceSeven from "@/assets/images/service-7.png";
import serviceEight from "@/assets/images/service-8.png";
import serviceNine from "@/assets/images/service-9.png";
import serviceTen from "@/assets/images/service-10.png";

import OneIcon from "@/components/icons/OneIcon.vue";
import TwoIcon from "@/components/icons/TwoIcon.vue";
import ThreeIcon from "@/components/icons/ThreeIcon.vue";
import FourIcon from "@/components/icons/FourIcon.vue";
import FiveIcon from "@/components/icons/FiveIcon.vue";

export const menuNavLinks = [
    { name: { en: "About company", cz: "O společnosti" }, path: "/about" },
    { name: { en: "Services", cz: "Servis" }, path: "/services" },
    { name: { en: "Portfolio", cz: "Portfolio" }, path: "/portfolio" },
    { name: { en: "Contacts", cz: "Kontaky" }, path: "/contacts" },
];

export const heroCardText = {
    title: {
        en: "Build homes and commercial facilities with quality assurance",
        cz: "Stavět domy a komerční zařízení s zabezpečením kvality",
    },
    description: {
        en: "We build durable and environmentally friendly buildings, control quality at every stage and offer flexible, modern solutions for comfortable accommodation.",
        cz: "Stavíme odolné a ekologicky šetrné budovy, kontrolujeme kvalitu v každé fázi a nabízíme flexibilní, moderní řešení pro komfortní ubytování",
    },
};

export const featuresText = {
    title: { en: "Unique features of VANTERA", cz: "Jedinečné vlastnosti VANTERA" },
    features: [
        {
            title: { en: "Integrated approach", cz: "Integrovaný přístup" },
            description: {
                en: 'We carry out all the stages of construction, from design to delivery "key"',
                cz: 'Realizujeme všechny fáze výstavby, od návrhu až po předání "na klíč"',
            },
        },
        {
            title: { en: "Modern technologies", cz: "Moderní technologie" },
            description: {
                en: "We reduce the time and costs through innovative methods",
                cz: "Snižujeme čas a náklady díky inovativním metodám",
            },
        },
        {
            title: { en: "Durability", cz: "Odolnost" },
            description: {
                en: "We use cutting-edge materials to make buildings work for decades",
                cz: "Používáme špičkové materiály, aby budovy vydržely desítky let",
            },
        },
        {
            title: { en: "Style and reliability", cz: "Styl a spolehlivost" },
            description: {
                en: "Thoughtfulness in everything from foundation to finishing",
                cz: "Důslednost ve všem, od základů až po finální úpravy",
            },
        },
        {
            title: { en: "Quality assurance", cz: "Záruka kvality" },
            description: {
                en: "We provide warranty for operation and maintenance",
                cz: "Poskytujeme záruku na provoz a údržbu",
            },
        },
        {
            title: { en: "Professional team", cz: "Profesionální tým" },
            description: {
                en: "Engineers, architects and builders with many years of experience and high standards",
                cz: "Inženýři, architekti a stavitelé s mnohaletými zkušenostmi a vysokými standardy",
            },
        },
    ],
};

export const questionText = {
    title: {
        en: "Do you have more question?",
        cz: "Máte více otázek?",
    },
    description: {
        en: "We understand that every client has unique needs, so we offer customized solutions for each project.",
        cz: "Chápeme, že každý klient má jedinečné potřeby, a proto pro každý projekt nabízíme řešení na míru.",
    },
};

export const faqText = {
    title: {
        en: "Have you encountered such problems?",
        cz: "Setkali jste se s takovými problémy?",
    },
    items: [
        {
            question: {
                en: "Don't know where to start building or which project to choose?",
                cz: "Nejste si jisti, kde začít stavět nebo který projekt si vybrat?",
            },
            answer: {
                en: "VANTERA solution: We offer personal consultation, help to define the concept, design a house or commercial premises, taking into account the needs and budget of the client.",
                cz: "Řešení od VANETRA: Nabízíme osobní konzultace, pomůžeme definovat koncept, navrhnout dům nebo komerční prostory s ohledem na potřeby a rozpočet klienta.",
            },
        },
        {
            question: {
                en: "Are you afraid of unexpected additional costs not included in the estimate?",
                cz: "Bojíte se neočekávaných dodatečných nákladů, které nejsou zahrnuty v rozpočtu?",
            },
            answer: {
                en: "VANTERA solution: We work transparently, providing detailed estimates with fixed cost of works, excluding hidden payments.",
                cz: "Řešení od VANETRA: Pracujeme transparentně, poskytujeme podrobné rozpočty s pevnými náklady na práce a vylučujeme skryté poplatky.",
            },
        },
        {
            question: {
                en: "Worried about poor construction and cheap materials?",
                cz: "Máte obavy z nekvalitní stavby a levných materiálů?",
            },
            answer: {
                en: "VANTERA solution: We use only certified materials and proven technologies, which guarantees the reliability and durability of the facilities.",
                cz: "Řešení od VANETRA: Používáme pouze certifikované materiály a osvědčené technologie, které zaručují spolehlivost a dlouhou životnost objektů.ution: We use only certified materials and proven technologies, which guarantees the reliability and durability of the facilities.",
            },
        },
        {
            question: {
                en: "Contractors are not meeting deadlines?",
                cz: "Jak spočítat náklady na výstavbu?",
            },
            answer: {
                en: "VANTERA solution: We work on a clear schedule and ensure that deadlines are met through professional organization of processes.",
                cz: "Řešení od VANETRA: Pracujeme podle jasného harmonogramu a zajišťujeme dodržení termínů prostřednictvím profesionální organizace procesů.",
            },
        },
        {
            question: {
                en: "Problems with finding contractors and coordinating work?",
                cz: "Máte problémy s nalezením dodavatelů a koordinací prací?",
            },
            answer: {
                en: "VANTERA solution: We take over the complete work cycle - from design to turnkey delivery, ensuring a single quality control.",
                cz: "Řešení od VANETRA: Přebíráme celý pracovní cyklus – od návrhu po předání na klíč, čímž zajišťujeme jednotnou kontrolu kvality.",
            },
        },
        {
            question: {
                en: "Contractors underestimate the importance of good interior planning and communications?",
                cz: "Dodavatelé podceňují důležitost dobrého plánování interiérů a komunikací?",
            },
            answer: {
                en: "VANTERA solution: Our architects and designers develop ergonomic and functional solutions that make the most efficient use of space.",
                cz: "Řešení od VANETRA: Naši architekti a designéři vyvíjejí ergonomická a funkční řešení, která umožňují co nejefektivnější využití prostoru.",
            },
        },
        {
            question: {
                en: "Low energy efficiency and high utility costs?",
                cz: "Nízká energetická účinnost a vysoké náklady na provoz?",
            },
            answer: {
                en: "VANTERA solution: We build energy efficient homes with heat insulation, «smart» technologies and alternative energy sources, reducing utility costs.",
                cz: "Řešení od VANETRA: Stavíme energeticky úsporné domy s tepelnou izolací, „chytrými“ technologiemi a alternativními zdroji energie, což snižuje náklady na provoz.",
            },
        },
        {
            question: {
                en: "Lack of guarantees and support after construction?",
                cz: "Chybějící záruky a podpora po dokončení stavby?",
            },
            answer: {
                en: "VANTERA solution: We provide warranty for completed work and offer service after completion of construction.",
                cz: "Řešení od VANETRA: We provide warranty for completed work and offer service after completion of construction.",
            },
        },
    ],
};

export const projectsText = {
    title: {
        en: "Our projects",
        cz: "Naše projekty",
    },
    fallbackText: {
        en: "Create quality projects - we will show you soon! Our first work will appear here in the near future.",
        cz: "Vytvořte kvalitní projekty - brzy vám ukážeme! Naše první práce se zde objeví v blízké budoucnosti.",
    },
    projects: [
        {
            title: {
                en: "The name of some project",
                cz: "Název nějakého projektu",
            },
            period: {
                en: "2019",
                cz: "2019",
            },
            description: {
                en: "Description of the project. The main features and characteristics of the object.",
                cz: "Popis projektu. Hlavní rysy a charakteristiky objektu.",
            },
            image: houseOne,
        },
        {
            title: {
                en: "The name of some project",
                cz: "Název nějakého projektu",
            },
            period: {
                en: "2019",
                cz: "2019",
            },
            description: {
                en: "Description of the project. The main features and characteristics of the object.",
                cz: "Popis projektu. Hlavní rysy a charakteristiky objektu.",
            },
            image: houseTwo,
        },
        {
            title: {
                en: "The name of some project",
                cz: "Název nějakého projektu",
            },
            period: {
                en: "2019",
                cz: "2019",
            },
            description: {
                en: "Description of the project. The main features and characteristics of the object.",
                cz: "Popis projektu. Hlavní rysy a charakteristiky objektu.",
            },
            image: houseThree,
        },
        {
            title: {
                en: "The name of some project",
                cz: "Název nějakého projektu",
            },
            period: {
                en: "2019",
                cz: "2019",
            },
            description: {
                en: "Description of the project. The main features and characteristics of the object.",
                cz: "Popis projektu. Hlavní rysy a charakteristiky objektu.",
            },
            image: houseFour,
        },
        {
            title: {
                en: "The name of some project",
                cz: "Název nějakého projektu",
            },
            period: {
                en: "2019",
                cz: "2019",
            },
            description: {
                en: "Description of the project. The main features and characteristics of the object.",
                cz: "Popis projektu. Hlavní rysy a charakteristiky objektu.",
            },
            image: houseFive,
        },
    ],
};

export const contactText = {
    title: {
        en: "Got some ideas for a project? Drop us a line will be glad to here from you",
        cz: "Máte nějaké nápady na projekt? Napište nám, rádi si je vyslechneme!",
    },
    serviceOptions: {
        en: [
            "General construction and reconstruction",
            "Earthworks and preparatory work",
            "Foundation work",
            "Erection of walls and ceilings",
            "Roof works",
            "Engineering communications",
            "Interior decoration",
            "Landscape design and landscaping",
            "Design and consulting",
            "Knowledge work",
        ],
        cz: [
            "Obecná výstavba a rekonstrukce",
            "Zemní práce a přípravné práce",
            "Základové práce",
            "Výstavba stěn a stropů",
            "Střešní práce",
            "Inženýrské sítě",
            "Interiérové dekorace",
            "Krajinný design a terénní úpravy",
            "Návrh a poradenství",
            "Odborné práce",
        ],
    },
    contactPhone: "+420 775 515 551",
    contactEmail: "info@vantera.cz",
    contactAddress: "Na Folimance 2155/15, 120 00 Praha, Vinohrady",
    workingHours: [
        { en: "Mon–Fri: 8:00–15:30", cz: "Po–Pá: 8:00–15:30" },
        { en: "Sat-Sun: Closed", cz: "So-Ne: Zavřeno" },
    ],
};

export const formErrors = {
    nameBlank: {
        en: "Please enter your name",
        cz: "Zadejte prosím své jméno",
    },
    nameInvalid: {
        en: "Please enter a valid name",
        cz: "Zadejte prosím platné jméno",
    },
    emailBlank: {
        en: "Please enter your email",
        cz: "Zadejte prosím svůj email",
    },
    emailInvalid: {
        en: "Please enter a valid email",
        cz: "Zadejte prosím platný email",
    },
    phoneBlank: {
        en: "Please enter your phone number",
        cz: "Zadejte prosím své telefonní číslo",
    },
    phoneInvalid: {
        en: "Please enter a valid phone number",
        cz: "Zadejte prosím platné telefonní číslo",
    },
    serviceNotSelected: {
        en: "Please select a service",
        cz: "Vyberte prosím službu",
    },
};

export const successText = {
    title: {
        en: "We have received your request",
        cz: "Obdrželi jsme vaši žádost",
    },
    description: {
        en: "Our manager will be coming soon, thank you for waiting",
        cz: "Náš manažer přijde brzy, děkuji za čekání",
    },
};

export const aboutHeroCardText = {
    title: {
        en: "About company",
        cz: "Vytváříme spolehlivost: kvalitu, inovace, odolnost",
    },
    description: {
        en: "We build durable and environmentally friendly buildings, control quality at every stage and offer flexible, modern solutions for comfortable accommodation.",
        cz: "V srdci každé budovy se skrývá příběh – příběh vize, odhodlání a dovednosti. Naším cílem je spojit preciznost, inovace a odolnost do jednoho pevného celku.",
    },
    appendix: {
        en: "We create modern and reliable facilities using proven materials and personalized approach. We work honestly, transparently and offer solutions that will last for years.",
        cz: "Vytváříme moderní a spolehlivé objekty s využitím osvědčených materiálů a individuálního přístupu. Pracujeme poctivě, transparentně a nabízíme řešení, která vydrží po mnoho let",
    },
};

export const aboutMissionText = {
    title: {
        en: "Mission and values",
        cz: "Mise a hodnoty",
    },
    description: {
        en: "Our mission is not just to build buildings, but to create functional and inspiring spaces that will last for generations.",
        cz: "Naší misí není jen stavět budovy, ale vytvářet funkční a inspirativní prostory, které vydrží po generace.",
    },
    values: [
        {
            title: { en: "Individual approach", cz: "Individuální přístup" },
            description: {
                en: "We take into account all the wishes of our customers",
                cz: "Zohledňujeme všechna přání našich zákazníků",
            },
        },
        {
            title: { en: "Innovations", cz: "Inovace" },
            description: {
                en: "Implement modern construction techniques",
                cz: "Zavádíme moderní stavební technologie",
            },
        },
        {
            title: { en: "Honesty", cz: "Poctivost" },
            description: {
                en: "Transparent pricing, no hidden payments",
                cz: "Transparentní ceny, žádné skryté poplatky",
            },
        },
        {
            title: { en: "Quality", cz: "Kvalita" },
            description: { en: "Control at every stage", cz: "Kontrola v každé fázi" },
        },
        {
            title: { en: "Eco-friendliness", cz: "Ekologická udržitelnost" },
            description: {
                en: "Use energy-efficient technologies",
                cz: "Využíváme energeticky úsporné technologie",
            },
        },
    ],
};

export const aboutProcessText = {
    title: {
        en: "How we work",
        cz: "Jak pracujeme",
    },
    description: {
        en: "Each project is carried out with the utmost care, attention to detail and using the latest technologies. We work with quality materials and emphasize the long-term value of buildings",
        cz: "Každý projekt realizujeme s maximální péčí, důrazem na detaily a využitím nejnovějších technologií. Pracujeme s kvalitními materiály a klademe důraz na dlouhodobou hodnotu budov.",
    },
    stages: [
        {
            icon: OneIcon,
            title: { en: "Consultation with client", cz: "Konzultace s klientem" },
            description: {
                en: "We evaluate the project, assess wishes",
                cz: "Vyhodnotíme projekt a zohledníme přání zákazníka",
            },
        },
        {
            icon: TwoIcon,
            title: { en: "Project design process", cz: "Proces návrhu projektu" },
            description: {
                en: "Develop architectural solutions",
                cz: "Vypracujeme architektonická řešení",
            },
        },
        {
            icon: ThreeIcon,
            title: { en: "Harmonization and costing", cz: "Schválení a kalkulace nákladů" },
            description: {
                en: "Approve details and cost",
                cz: "Odsouhlasíme detaily a stanovíme cenu.",
            },
        },
        {
            icon: FourIcon,
            title: { en: "Full construction process", cz: "Kompletní stavební proces" },
            description: {
                en: "Perform all stages of the work under the supervision of specialists",
                cz: "Realizujeme všechny fáze prací pod dohledem specialistů",
            },
        },
        {
            icon: FiveIcon,
            title: { en: "Guarantee and maintenance", cz: "Záruka a údržba" },
            description: {
                en: "Provide support after delivery",
                cz: "Poskytujeme podporu i po předání stavby",
            },
        },
    ],
};

export const servicesHeroCardText = {
    title: {
        en: "Complete construction cycle: from project to finished object",
        cz: "Kompletní stavební cyklus: od projektu po hotový objekt",
    },
    description: [
        {
            en: "Quality, proven technologies and materials",
            cz: "Kvalita, osvědčené technologie a materiály",
        },
        {
            en: 'Integrated approach and "turn-key" work',
            cz: 'Komplexní přístup a práce "na klíč"',
        },
        { en: "Customized solutions for your needs", cz: "Řešení přizpůsobená vašim potřebám" },
    ],
};

export const servicesServicesText = {
    title: {
        en: "Our services",
        cz: "Naše služby",
    },
    services: [
        {
            image: serviceOne,
            title: {
                en: "General construction and reconstruction",
                cz: "Obecná výstavba a rekonstrukce",
            },
            description: [
                {
                    en: "Construction of private houses, commercial real estate",
                    cz: "Výstavba rodinných domů, komerčních nemovitostí",
                },
                {
                    en: "Major repairs and reconstruction",
                    cz: "Generální opravy a rekonstrukce",
                },
                {
                    en: 'Design projects "turnkey"',
                    cz: 'Projekty "na klíč"',
                },
            ],
        },
        {
            image: serviceTwo,
            title: {
                en: "Excavation and preparatory work",
                cz: "Výkopové a přípravné práce",
            },
            description: [
                {
                    en: "Geodesic marking, coalmines, soil strengthening",
                    cz: "Geodetické zaměřování, výkopy, zpevnění půdy",
                },
                {
                    en: "Drainage and waterproofing works",
                    cz: "Drenáže a hydroizolace",
                },
                {
                    en: "Foundation preparation",
                    cz: "Příprava základů",
                },
            ],
        },
        {
            image: serviceThree,
            title: {
                en: "Foundation work",
                cz: "Základové práce",
            },
            description: [
                {
                    en: "Monolithic foundations, reinforcement",
                    cz: "Monolitické základy, výztuže",
                },
                {
                    en: "Waterproofing and insulation",
                    cz: "Hydroizolace a zateplení",
                },
            ],
        },
        {
            image: serviceFour,
            title: {
                en: "Erection of walls and ceilings",
                cz: "Zděné konstrukce a stropy",
            },
            description: [
                {
                    en: "Construction of brick, gas concrete, foam block",
                    cz: "Výstavba z cihel, pórobetonu, pěnového betonu",
                },
                {
                    en: "Monolithic and framing structures",
                    cz: "Monolitické a rámové konstrukce",
                },
                {
                    en: "Facade cladding, insulation",
                    cz: "Fasádní obklady, izolace",
                },
            ],
        },
        {
            image: serviceFive,
            title: {
                en: "Roof works",
                cz: "Střešní práce",
            },
            description: [
                {
                    en: "Roofing installation and repair",
                    cz: "Montáž a oprava střech",
                },
                {
                    en: "Waterproofing, insulation, drainage systems",
                    cz: "Hydroizolace, zateplení, okapové systémy",
                },
            ],
        },
        {
            image: serviceSix,
            title: {
                en: "Engineering communications",
                cz: "Inženýrské sítě",
            },
            description: [
                {
                    en: "Water supply, sewerage, heating",
                    cz: "Vodovod, kanalizace, vytápění",
                },
                {
                    en: "Electrical and ventilation",
                    cz: "Elektroinstalace, větrání",
                },
            ],
        },
        {
            image: serviceSeven,
            title: {
                en: "Interior decoration",
                cz: "Interiérové úpravy",
            },
            description: [
                {
                    en: "Plastering, painting, tile and laminate laying",
                    cz: "Omítky, malby, pokládka dlažby a laminátu",
                },
                {
                    en: "Plasterboard, decorative solutions",
                    cz: "Sádrokartonové a dekorativní řešení",
                },
            ],
        },
        {
            image: serviceEight,
            title: {
                en: "Landscape design and improvement",
                cz: "Krajinářský design a zlepšení prostředí",
            },
            description: [
                {
                    en: "Paving stones, fences, gazebos, terraces",
                    cz: "Zámková dlažba, ploty, altány, terasy",
                },
            ],
        },
        {
            image: serviceNine,
            title: {
                en: "Design and consulting",
                cz: "Design a poradenství",
            },
            description: [
                {
                    en: "Plastering, painting, tile and laminate laying",
                    cz: "Omítky, malování, dlaždice a laminátové pokládání",
                },
                {
                    en: "Plasterboard, decorative solutions",
                    cz: "Sádrokarton, dekorativní řešení",
                },
            ],
        },
        {
            image: serviceTen,
            title: {
                en: "Specialized works",
                cz: "Specializované práce",
            },
            description: [
                {
                    en: "Dismantling, removal of construction waste",
                    cz: "Demontáž, odvoz stavebního odpadu",
                },
                {
                    en: "Rehabilitation of buildings after accidents",
                    cz: "Sanace budov po haváriích",
                },
                {
                    en: "Building energy efficient houses",
                    cz: "Výstavba energeticky úsporných domů",
                },
            ],
        },
    ],
};

export const servicesAdvantagesText = {
    title: {
        en: "Why choose us?",
        cz: "Proč si vybrat nás?",
    },
    advantages: [
        {
            icon: OneIcon,
            description: {
                en: "Guarantee for all works",
                cz: "Záruka na všechny práce",
            },
        },
        {
            icon: TwoIcon,
            description: {
                en: "Use of modern technologies",
                cz: "Použití moderních technologií",
            },
        },
        {
            icon: ThreeIcon,
            description: {
                en: "Timeliness and transparent pricing",
                cz: "Dodržování termínů a transparentní ceny",
            },
        },
    ],
};

export const portfolioHeroCardText = {
    title: {
        en: "Quality, reliability, style - in every project",
        cz: "Kvalita, spolehlivost, styl – v každém projekt",
    },
    description: {
        en: 'Concept "Premium in every detail" We create projects that combine aesthetics, durability and comfort. Each house or object is designed to the smallest detail - from the foundation to the finish.',
        cz: 'Koncept "Prémiová kvalita v každém detailu". Vytváříme projekty, které spojují estetiku, odolnost a komfort. Každý dům či objekt je navržen do nejmenšího detailu – od základů až po finální úpravy.',
    },
    appendix: {
        en: "Each project is a reflection of our philosophy: detail, technology and professionalism in one solution.",
        cz: "Každý projekt je odrazem naší filozofie: detail, technologie a profesionalita v jednom řešení.",
    },
};

export const footerText = {
    title: {
        en: "Transparency and honesty",
        cz: "Transparentnost a poctivost",
    },
    description: {
        en: "We build durable and environmentally friendly buildings, control quality at every stage and offer flexible, modern solutions for comfortable accommodation.",
        cz: "Stavíme odolné a ekologicky šetrné budovy, kontrolujeme kvalitu v každé fázi a nabízíme flexibilní, moderní řešení pro pohodlné bydlení.",
    },
};
