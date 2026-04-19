import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ru";

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.contact": "Contact",
  "nav.tagline": "Workforce Solutions",
  "nav.request": "Request Workers",

  // Footer
  "footer.desc": "International manpower supply company providing skilled and unskilled workers from India to companies across Russia and globally. 2000+ workers successfully deployed.",
  "footer.quickLinks": "Quick Links",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
  "footer.role": "Director",

  // Hero
  "hero.badge": "India → Russia · Global Manpower",
  "hero.title1": "Reliable Workforce",
  "hero.title2": "Solutions from",
  "hero.titleHighlight": "India",
  "hero.subtitle": "Sav Group supplies skilled and general workers to companies across Russia and globally. Trusted by major Russian businesses with 2000+ workers successfully deployed.",
  "hero.cta1": "Request Workers",
  "hero.cta2": "Contact Us",
  "hero.stat1": "Workers Deployed",
  "hero.stat2": "Russian Clients",
  "hero.stat3": "Support",

  // About section (home)
  "about.eyebrow": "About Sav Group",
  "about.title": "Your Trusted International Manpower Partner",
  "about.p1pre": "Sav Group is an international manpower supply company specializing in providing skilled and unskilled workers from India to companies across Russia and worldwide. With years of dedicated experience in cross-border recruitment, we have placed over",
  "about.p1strong": "2000 Indian workers",
  "about.p1post": "in major Russian construction, logistics and manufacturing firms.",
  "about.p2": "Our reputation is built on three pillars: reliability, discipline, and cost-effectiveness. We handle every step — from sourcing and screening to visa, medicals, and on-site deployment — so you can focus on your operations.",
  "about.badge": "Indian workers placed in Russian companies",
  "about.check1": "Government-compliant recruitment",
  "about.check2": "Pre-screened skilled workers",
  "about.check3": "End-to-end documentation",
  "about.check4": "Free replacement guarantee",

  // Services
  "services.eyebrow": "Our Services",
  "services.title": "Complete Workforce Solutions",
  "services.subtitle": "From recruitment to deployment, we manage everything.",
  "svc.1.t": "Worker Recruitment",
  "svc.1.d": "Sourcing skilled and general workers across India matched to your exact specifications.",
  "svc.2.t": "Visa & Work Permits",
  "svc.2.d": "Complete handling of work permits and visa processing for international deployment.",
  "svc.3.t": "Medical & Legal",
  "svc.3.d": "Full medical screening and legal documentation per destination country requirements.",
  "svc.4.t": "Translation Support",
  "svc.4.d": "Document translation and on-ground language assistance for smooth integration.",
  "svc.5.t": "Documentation",
  "svc.5.d": "End-to-end paperwork: contracts, attestations, certifications and approvals.",
  "svc.6.t": "Onboarding & Management",
  "svc.6.d": "Worker orientation, deployment logistics, and ongoing workforce management.",

  // Workers
  "workers.eyebrow": "Workforce",
  "workers.title": "Workers We Provide",
  "workers.desc.pre": "From skilled tradespeople to general labour, our network covers every category. We provide",
  "workers.desc.strong": "any type of worker",
  "workers.desc.post": "based on your specific requirements.",
  "w.drivers": "Drivers",
  "w.welders": "Welders",
  "w.labourers": "Labourers",
  "w.loaders": "Loaders",
  "w.fitters": "Fitters",
  "w.machine": "Machine Operators",
  "w.packers": "Packers",
  "w.carpenters": "Carpenters",
  "w.more": "And More",

  // Why
  "why.eyebrow": "Why Sav Group",
  "why.title": "A Partner You Can Rely On",
  "why.1.t": "Lower Labor Costs",
  "why.1.d": "Significantly more cost-effective than local Russian workforce without compromising quality.",
  "why.2.t": "Long-Hour Capable",
  "why.2.d": "Workers comfortable with 10–12 hour shifts and demanding industrial schedules.",
  "why.3.t": "Fast Deployment",
  "why.3.d": "Streamlined processing — workers on your site in weeks, not months.",
  "why.4.t": "Replacement Guarantee",
  "why.4.d": "Free replacement of any worker who does not meet performance standards.",
  "why.5.t": "Transparent Process",
  "why.5.d": "Clear pricing, regular updates, and complete visibility from request to deployment.",

  // Testimonials
  "tst.eyebrow": "Testimonials",
  "tst.title": "Trusted by Russian Companies",
  "tst.1.role": "Project Manager",
  "tst.1.co": "Construction Company, Moscow",
  "tst.1.text": "Sav Group provided reliable workers for our construction project. Very satisfied with their discipline and work ethic. The team is professional from first contact to deployment.",
  "tst.2.role": "Operations Director",
  "tst.2.co": "Logistics Firm, St. Petersburg",
  "tst.2.text": "We needed 50 loaders on short notice and Sav Group delivered within three weeks. Documentation was handled flawlessly. Highly recommended.",
  "tst.3.role": "CEO",
  "tst.3.co": "Industrial Manufacturing, Kazan",
  "tst.3.text": "Working with Sav Group for over two years. Their welders and fitters are skilled and dependable. A true partner for our workforce needs.",
  "tst.4.role": "HR Head",
  "tst.4.co": "Warehouse & Distribution, Yekaterinburg",
  "tst.4.text": "Cost-effective and transparent. The replacement guarantee gives us peace of mind. Indian workers we received are hardworking and respectful.",
  "tst.5.role": "Site Engineer",
  "tst.5.co": "Infrastructure Group, Novosibirsk",
  "tst.5.text": "Excellent communication. Sav Group understood our exact requirement for machine operators and shortlisted perfect candidates. Onboarding was smooth.",
  "tst.6.role": "Procurement Manager",
  "tst.6.co": "Heavy Industries, Samara",
  "tst.6.text": "Reliable manpower partner. Their workers handle long shifts well and integrate quickly into our operations. Will continue working with Sav Group.",

  // Process
  "proc.eyebrow": "How It Works",
  "proc.title": "Simple 4-Step Process",
  "proc.1.t": "Submit Requirement",
  "proc.1.d": "Share your worker count, skill type, location and timeline.",
  "proc.2.t": "Candidate Shortlist",
  "proc.2.d": "We screen and present pre-qualified candidates within days.",
  "proc.3.t": "Documentation & Approvals",
  "proc.3.d": "Visas, medicals, and contracts handled end-to-end by our team.",
  "proc.4.t": "Deployment",
  "proc.4.d": "Workers arrive at your site, ready to perform from day one.",

  // CTA
  "cta.title": "Ready to Strengthen Your Workforce?",
  "cta.subtitle": "Tell us your requirement and our team will respond within 24 hours with a tailored proposal.",
  "cta.whatsapp": "WhatsApp: +7 922 875 6002",

  // About page
  "ap.eyebrow": "About Us",
  "ap.title": "Building International Workforces, One Project at a Time",
  "ap.subtitle": "Sav Group connects Russia's leading companies with India's most capable workers.",
  "ap.story.title": "Our Story",
  "ap.story.p1": "Founded with a clear mission — to bridge India's enormous skilled labor pool with Russia's industrial demand — Sav Group has grown into a trusted partner for major construction firms, logistics operators and manufacturers.",
  "ap.story.p2pre": "Today, more than",
  "ap.story.p2strong": "2000 Indian workers",
  "ap.story.p2post": "are actively employed at Russian companies through our placements. Every worker is screened, documented, and prepared for the realities of international deployment before leaving India.",
  "ap.story.p3": "We don't just supply workers — we manage the entire lifecycle, from first requirement to ongoing on-ground support.",
  "ap.check1": "Government-licensed operations",
  "ap.check2": "Multi-stage worker screening",
  "ap.check3": "Full visa & legal handling",
  "ap.check4": "Replacement guarantee",
  "ap.values.eyebrow": "Core Values",
  "ap.values.title": "What Drives Us",
  "ap.val.1.t": "Reliability",
  "ap.val.1.d": "Consistent results, on-time deployment, and workers who deliver from day one.",
  "ap.val.2.t": "Discipline",
  "ap.val.2.d": "Workers selected for work ethic, punctuality and respect for site protocols.",
  "ap.val.3.t": "Cost-Effectiveness",
  "ap.val.3.d": "Premium results at significantly lower cost than local labor markets.",
  "ap.cta.title": "Let's Discuss Your Workforce Needs",
  "ap.cta.btn": "Get in Touch",

  // Services page
  "sp.eyebrow": "What We Do",
  "sp.title": "Complete Manpower Services, Start to Finish",
  "sp.subtitle": "We manage every step — so you receive ready-to-work professionals, on time.",
  "sp.svc.1.t": "Recruitment of Workers from India",
  "sp.svc.1.d": "Wide network across Indian states. Pre-screened candidates matched to your skill, language and location requirements.",
  "sp.svc.2.t": "Work Permits & Visa Processing",
  "sp.svc.2.d": "Full handling of Russian and other international work permits, employment visas, and arrival documentation.",
  "sp.svc.3.t": "Medical & Legal Documentation",
  "sp.svc.3.d": "Pre-departure medicals, certifications, attestations and all legal paperwork required by destination authorities.",
  "sp.svc.4.t": "Translation & Documentation Support",
  "sp.svc.4.d": "Certified translation of contracts, IDs, certificates. Russian-English language assistance for arriving workers.",
  "sp.svc.5.t": "Compliance & Approvals",
  "sp.svc.5.d": "Government compliance, emigration clearance, contract drafting reviewed by experienced legal counsel.",
  "sp.svc.6.t": "Onboarding & Worker Management",
  "sp.svc.6.d": "Orientation, accommodation coordination, deployment logistics and ongoing on-ground support.",
  "sp.workers.eyebrow": "Workforce Categories",
  "sp.workers.title": "Workers We Provide",
  "sp.workers.subtitle": "We provide any type of worker based on your requirements.",
  "sp.cta.title": "Need a Specific Worker Profile?",
  "sp.cta.subtitle": "Tell us what you need — we'll deliver.",

  // Contact page
  "cp.eyebrow": "Get in Touch",
  "cp.title": "Request Workers",
  "cp.subtitle": "Tell us your requirement and our team will respond within 24 hours.",
  "cp.direct": "Direct Contact",
  "cp.directDesc": "Reach out by phone, WhatsApp, or email — whichever works best for you.",
  "cp.person": "Contact Person",
  "cp.phone": "Phone",
  "cp.whatsapp": "WhatsApp",
  "cp.email": "Email",
  "cp.ops": "Operations",
  "cp.ops.value": "India · Russia",
  "cp.form.title": "Send a Request",
  "cp.form.note": "All fields are required. We respond within 24 hours.",
  "cp.f.name": "Your Name",
  "cp.f.name.ph": "Full name",
  "cp.f.company": "Company",
  "cp.f.company.ph": "Company name",
  "cp.f.email": "Email",
  "cp.f.email.ph": "you@company.com",
  "cp.f.phone": "Phone",
  "cp.f.phone.ph": "+7 ...",
  "cp.f.req": "Requirement",
  "cp.f.req.ph": "Tell us how many workers, type, location, duration...",
  "cp.f.submit": "Submit Request",
  "cp.f.sending": "Sending...",
  "cp.f.success": "Request received. Our team will contact you within 24 hours.",
  "cp.f.err.name": "Name is required",
  "cp.f.err.company": "Company is required",
  "cp.f.err.email": "Valid email required",
  "cp.f.err.phone": "Phone is required",
  "cp.f.err.req": "Please describe your requirement",

  // 404
  "nf.title": "Page not found",
  "nf.desc": "The page you're looking for doesn't exist or has been moved.",
  "nf.btn": "Go home",
};

const ru: Dict = {
  // Nav
  "nav.home": "Главная",
  "nav.about": "О нас",
  "nav.services": "Услуги",
  "nav.contact": "Контакты",
  "nav.tagline": "Кадровые решения",
  "nav.request": "Запросить рабочих",

  // Footer
  "footer.desc": "Международная компания по подбору персонала, предоставляющая квалифицированных и неквалифицированных рабочих из Индии компаниям в России и по всему миру. Более 2000 рабочих успешно трудоустроены.",
  "footer.quickLinks": "Быстрые ссылки",
  "footer.contact": "Контакты",
  "footer.rights": "Все права защищены.",
  "footer.role": "Директор",

  // Hero
  "hero.badge": "Индия → Россия · Международный персонал",
  "hero.title1": "Надёжные кадровые",
  "hero.title2": "решения из",
  "hero.titleHighlight": "Индии",
  "hero.subtitle": "Sav Group поставляет квалифицированных и общих рабочих компаниям в России и по всему миру. Нам доверяют ведущие российские предприятия — более 2000 успешно размещённых рабочих.",
  "hero.cta1": "Запросить рабочих",
  "hero.cta2": "Связаться с нами",
  "hero.stat1": "Размещено рабочих",
  "hero.stat2": "Российских клиентов",
  "hero.stat3": "Поддержка",

  // About home
  "about.eyebrow": "О Sav Group",
  "about.title": "Ваш надёжный международный кадровый партнёр",
  "about.p1pre": "Sav Group — международная компания по поставке рабочей силы, специализирующаяся на предоставлении квалифицированных и неквалифицированных рабочих из Индии компаниям в России и по всему миру. За годы работы в международном рекрутинге мы трудоустроили более",
  "about.p1strong": "2000 индийских рабочих",
  "about.p1post": "в крупнейших российских строительных, логистических и производственных компаниях.",
  "about.p2": "Наша репутация строится на трёх принципах: надёжность, дисциплина и экономическая эффективность. Мы берём на себя весь процесс — от подбора и проверки до виз, медосмотров и размещения на объекте — чтобы вы могли сосредоточиться на своей работе.",
  "about.badge": "индийских рабочих в российских компаниях",
  "about.check1": "Лицензированный рекрутинг",
  "about.check2": "Предварительно отобранные специалисты",
  "about.check3": "Полное оформление документов",
  "about.check4": "Бесплатная гарантия замены",

  // Services
  "services.eyebrow": "Наши услуги",
  "services.title": "Полный комплекс кадровых решений",
  "services.subtitle": "От подбора до размещения — мы управляем всем процессом.",
  "svc.1.t": "Подбор рабочих",
  "svc.1.d": "Поиск квалифицированных и общих рабочих по всей Индии в соответствии с вашими требованиями.",
  "svc.2.t": "Визы и разрешения на работу",
  "svc.2.d": "Полное оформление разрешений на работу и виз для международного трудоустройства.",
  "svc.3.t": "Медицина и юридические услуги",
  "svc.3.d": "Полный медосмотр и юридическое оформление в соответствии с требованиями страны назначения.",
  "svc.4.t": "Поддержка перевода",
  "svc.4.d": "Перевод документов и языковая поддержка на месте для плавной интеграции.",
  "svc.5.t": "Документация",
  "svc.5.d": "Все документы под ключ: контракты, аттестации, сертификаты и согласования.",
  "svc.6.t": "Адаптация и управление",
  "svc.6.d": "Ориентация рабочих, логистика размещения и постоянное управление персоналом.",

  // Workers
  "workers.eyebrow": "Персонал",
  "workers.title": "Кого мы предоставляем",
  "workers.desc.pre": "От квалифицированных специалистов до общих рабочих — наша сеть охватывает все категории. Мы предоставляем",
  "workers.desc.strong": "любых рабочих",
  "workers.desc.post": "под ваши конкретные задачи.",
  "w.drivers": "Водители",
  "w.welders": "Сварщики",
  "w.labourers": "Разнорабочие",
  "w.loaders": "Грузчики",
  "w.fitters": "Слесари",
  "w.machine": "Операторы станков",
  "w.packers": "Упаковщики",
  "w.carpenters": "Плотники",
  "w.more": "И другие",

  // Why
  "why.eyebrow": "Почему Sav Group",
  "why.title": "Партнёр, на которого можно положиться",
  "why.1.t": "Низкие затраты на труд",
  "why.1.d": "Значительно дешевле местной рабочей силы в России без потери качества.",
  "why.2.t": "Готовность к долгим сменам",
  "why.2.d": "Рабочие готовы к сменам по 10–12 часов и интенсивному производственному графику.",
  "why.3.t": "Быстрое размещение",
  "why.3.d": "Оптимизированный процесс — рабочие на вашем объекте за недели, а не месяцы.",
  "why.4.t": "Гарантия замены",
  "why.4.d": "Бесплатная замена любого рабочего, не соответствующего стандартам.",
  "why.5.t": "Прозрачный процесс",
  "why.5.d": "Чёткие цены, регулярные обновления и полная прозрачность от заявки до размещения.",

  // Testimonials
  "tst.eyebrow": "Отзывы",
  "tst.title": "Нам доверяют российские компании",
  "tst.1.role": "Руководитель проекта",
  "tst.1.co": "Строительная компания, Москва",
  "tst.1.text": "Sav Group предоставила надёжных рабочих для нашего строительного проекта. Очень довольны их дисциплиной и трудовой этикой. Команда профессиональна с первого контакта до размещения.",
  "tst.2.role": "Операционный директор",
  "tst.2.co": "Логистическая компания, Санкт-Петербург",
  "tst.2.text": "Нам срочно потребовалось 50 грузчиков, и Sav Group выполнила задачу за три недели. Документы оформлены безупречно. Настоятельно рекомендую.",
  "tst.3.role": "Генеральный директор",
  "tst.3.co": "Промышленное производство, Казань",
  "tst.3.text": "Работаем с Sav Group более двух лет. Их сварщики и слесари квалифицированы и надёжны. Настоящий партнёр в кадровых вопросах.",
  "tst.4.role": "Руководитель HR",
  "tst.4.co": "Склад и дистрибуция, Екатеринбург",
  "tst.4.text": "Экономично и прозрачно. Гарантия замены даёт спокойствие. Полученные индийские рабочие трудолюбивы и уважительны.",
  "tst.5.role": "Инженер на объекте",
  "tst.5.co": "Инфраструктурная группа, Новосибирск",
  "tst.5.text": "Отличная коммуникация. Sav Group поняла наши точные требования к операторам станков и подобрала идеальных кандидатов. Адаптация прошла гладко.",
  "tst.6.role": "Менеджер по закупкам",
  "tst.6.co": "Тяжёлая промышленность, Самара",
  "tst.6.text": "Надёжный кадровый партнёр. Их рабочие хорошо переносят долгие смены и быстро интегрируются. Продолжим сотрудничество с Sav Group.",

  // Process
  "proc.eyebrow": "Как это работает",
  "proc.title": "Простой процесс из 4 шагов",
  "proc.1.t": "Заявка с требованиями",
  "proc.1.d": "Сообщите количество рабочих, специальность, локацию и сроки.",
  "proc.2.t": "Подбор кандидатов",
  "proc.2.d": "Мы отбираем и представляем подходящих кандидатов в течение нескольких дней.",
  "proc.3.t": "Документы и согласования",
  "proc.3.d": "Визы, медосмотры и контракты — всё под ключ силами нашей команды.",
  "proc.4.t": "Размещение",
  "proc.4.d": "Рабочие прибывают на ваш объект, готовые к работе с первого дня.",

  // CTA
  "cta.title": "Готовы усилить свой персонал?",
  "cta.subtitle": "Расскажите о ваших потребностях, и наша команда ответит в течение 24 часов с индивидуальным предложением.",
  "cta.whatsapp": "WhatsApp: +7 922 875 6002",

  // About page
  "ap.eyebrow": "О нас",
  "ap.title": "Создаём международные команды — проект за проектом",
  "ap.subtitle": "Sav Group соединяет ведущие российские компании с лучшими рабочими Индии.",
  "ap.story.title": "Наша история",
  "ap.story.p1": "С момента основания у нас была чёткая миссия — соединить огромный квалифицированный трудовой ресурс Индии с промышленным спросом России. Сегодня Sav Group — надёжный партнёр крупных строительных, логистических и производственных компаний.",
  "ap.story.p2pre": "Сегодня более",
  "ap.story.p2strong": "2000 индийских рабочих",
  "ap.story.p2post": "трудятся в российских компаниях через наши размещения. Каждый рабочий проходит проверку, оформление документов и подготовку к международной работе ещё до выезда из Индии.",
  "ap.story.p3": "Мы не просто поставляем рабочих — мы управляем всем циклом, от первой заявки до постоянной поддержки на месте.",
  "ap.check1": "Лицензированная деятельность",
  "ap.check2": "Многоэтапная проверка рабочих",
  "ap.check3": "Полное визовое и юридическое сопровождение",
  "ap.check4": "Гарантия замены",
  "ap.values.eyebrow": "Ценности",
  "ap.values.title": "Что нами движет",
  "ap.val.1.t": "Надёжность",
  "ap.val.1.d": "Стабильные результаты, своевременное размещение и рабочие, готовые к работе с первого дня.",
  "ap.val.2.t": "Дисциплина",
  "ap.val.2.d": "Рабочие отбираются по трудовой этике, пунктуальности и уважению к правилам объекта.",
  "ap.val.3.t": "Экономическая эффективность",
  "ap.val.3.d": "Премиальные результаты при значительно более низкой стоимости, чем на местном рынке труда.",
  "ap.cta.title": "Обсудим ваши кадровые потребности",
  "ap.cta.btn": "Связаться",

  // Services page
  "sp.eyebrow": "Что мы делаем",
  "sp.title": "Полный спектр кадровых услуг — от начала до конца",
  "sp.subtitle": "Мы управляем каждым шагом — вы получаете готовых к работе специалистов вовремя.",
  "sp.svc.1.t": "Подбор рабочих из Индии",
  "sp.svc.1.d": "Широкая сеть по штатам Индии. Предварительно отобранные кандидаты под ваши требования по навыкам, языку и локации.",
  "sp.svc.2.t": "Разрешения на работу и визы",
  "sp.svc.2.d": "Полное оформление российских и международных разрешений на работу, рабочих виз и документов по прибытии.",
  "sp.svc.3.t": "Медицинские и юридические документы",
  "sp.svc.3.d": "Медосмотры перед выездом, сертификаты, аттестации и все юридические документы, требуемые принимающей стороной.",
  "sp.svc.4.t": "Перевод и документооборот",
  "sp.svc.4.d": "Заверенный перевод контрактов, удостоверений, сертификатов. Языковая поддержка на русском и английском.",
  "sp.svc.5.t": "Соответствие и согласования",
  "sp.svc.5.d": "Государственное соответствие, эмиграционные разрешения, юридическая проверка контрактов.",
  "sp.svc.6.t": "Адаптация и управление рабочими",
  "sp.svc.6.d": "Ориентация, координация проживания, логистика размещения и постоянная поддержка на месте.",
  "sp.workers.eyebrow": "Категории персонала",
  "sp.workers.title": "Кого мы предоставляем",
  "sp.workers.subtitle": "Мы предоставляем любых рабочих под ваши требования.",
  "sp.cta.title": "Нужен конкретный специалист?",
  "sp.cta.subtitle": "Расскажите, что нужно — мы предоставим.",

  // Contact page
  "cp.eyebrow": "Свяжитесь с нами",
  "cp.title": "Запросить рабочих",
  "cp.subtitle": "Расскажите о ваших потребностях, и наша команда ответит в течение 24 часов.",
  "cp.direct": "Прямой контакт",
  "cp.directDesc": "Свяжитесь по телефону, WhatsApp или email — как вам удобнее.",
  "cp.person": "Контактное лицо",
  "cp.phone": "Телефон",
  "cp.whatsapp": "WhatsApp",
  "cp.email": "Email",
  "cp.ops": "География работы",
  "cp.ops.value": "Индия · Россия",
  "cp.form.title": "Отправить заявку",
  "cp.form.note": "Все поля обязательны. Мы отвечаем в течение 24 часов.",
  "cp.f.name": "Ваше имя",
  "cp.f.name.ph": "Полное имя",
  "cp.f.company": "Компания",
  "cp.f.company.ph": "Название компании",
  "cp.f.email": "Email",
  "cp.f.email.ph": "you@company.com",
  "cp.f.phone": "Телефон",
  "cp.f.phone.ph": "+7 ...",
  "cp.f.req": "Требования",
  "cp.f.req.ph": "Сколько рабочих, специальность, локация, длительность...",
  "cp.f.submit": "Отправить заявку",
  "cp.f.sending": "Отправка...",
  "cp.f.success": "Заявка получена. Наша команда свяжется с вами в течение 24 часов.",
  "cp.f.err.name": "Введите имя",
  "cp.f.err.company": "Укажите компанию",
  "cp.f.err.email": "Введите корректный email",
  "cp.f.err.phone": "Введите телефон",
  "cp.f.err.req": "Опишите ваши требования",

  // 404
  "nf.title": "Страница не найдена",
  "nf.desc": "Запрашиваемая страница не существует или была перемещена.",
  "nf.btn": "На главную",
};

const dicts = { en, ru };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof en) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "ru") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: keyof typeof en) => dicts[lang][k] ?? en[k] ?? String(k);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
