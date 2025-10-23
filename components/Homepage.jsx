/* Multilingual homepage component (TemplateForge)
   This is the same component created earlier in the canvas.
*/
import React, { useEffect, useState } from 'react';

const translations = {
  en: {
    siteName: 'TemplateForge',
    tagline: 'Craft Professional Results in Minutes.',
    subtext: 'Premium templates for work, school, and life — designed to help you save time and look your best.',
    browse: 'Browse Templates',
    newsletter: 'Join Newsletter',
    categoriesTitle: 'Templates built for every goal',
    career: 'Career Templates',
    lifestyle: 'Lifestyle Templates',
    business: 'Business Templates',
    student: 'Student Templates',
    featured: 'Featured Templates',
    joinLine: 'Join 5,000+ creators saving hours every week.',
    starter: 'Get Free Starter Pack'
  },
  es: {
    siteName: 'TemplateForge',
    tagline: 'Crea resultados profesionales en minutos.',
    subtext: 'Plantillas premium para el trabajo, la escuela y la vida — diseñadas para ahorrarte tiempo y lucir profesional.',
    browse: 'Explorar Plantillas',
    newsletter: 'Unirse al Boletín',
    categoriesTitle: 'Plantillas para cada objetivo',
    career: 'Plantillas de Carrera',
    lifestyle: 'Plantillas de Estilo de Vida',
    business: 'Plantillas para Negocios',
    student: 'Plantillas para Estudiantes',
    featured: 'Plantillas Destacadas',
    joinLine: 'Únete a 5.000+ creadores que ahorran horas cada semana.',
    starter: 'Obtener Paquete Inicial Gratis'
  },
  fr: {
    siteName: 'TemplateForge',
    tagline: 'Obtenez des résultats professionnels en quelques minutes.',
    subtext: "Modèles premium pour le travail, l'école et la vie — conçus pour vous faire gagner du temps et être au top.",
    browse: 'Parcourir les Modèles',
    newsletter: "S'abonner",
    categoriesTitle: 'Modèles conçus pour chaque objectif',
    career: 'Modèles Carrière',
    lifestyle: 'Modèles Lifestyle',
    business: 'Modèles Business',
    student: 'Modèles Étudiants',
    featured: 'Modèles en Vedette',
    joinLine: "Rejoignez 5 000+ créateurs qui gagnent des heures chaque semaine.",
    starter: 'Obtenir le Pack de Démarrage'
  },
  de: {
    siteName: 'TemplateForge',
    tagline: 'Professionelle Ergebnisse in Minuten erstellen.',
    subtext: 'Premium-Vorlagen für Arbeit, Schule und Alltag — designed, um Zeit zu sparen und professionell auszusehen.',
    browse: 'Vorlagen Durchsuchen',
    newsletter: 'Newsletter Abonnieren',
    categoriesTitle: 'Vorlagen für jedes Ziel',
    career: 'Karriere-Vorlagen',
    lifestyle: 'Lifestyle-Vorlagen',
    business: 'Business-Vorlagen',
    student: 'Studenten-Vorlagen',
    featured: 'Beliebte Vorlagen',
    joinLine: 'Schließe dich 5.000+ Creators an, die jede Woche Stunden sparen.',
    starter: 'Gratis Starter-Paket'
  },
  pt: {
    siteName: 'TemplateForge',
    tagline: 'Crie resultados profissionais em minutos.',
    subtext: 'Modelos premium para trabalho, escola e vida — projetados para economizar seu tempo e melhorar sua aparência.',
    browse: 'Explorar Modelos',
    newsletter: 'Entrar na Newsletter',
    categoriesTitle: 'Modelos para todos os objetivos',
    career: 'Modelos de Carreira',
    lifestyle: 'Modelos de Estilo de Vida',
    business: 'Modelos de Negócios',
    student: 'Modelos para Estudantes',
    featured: 'Modelos em Destaque',
    joinLine: 'Junte-se a 5.000+ criadores economizando horas toda semana.',
    starter: 'Obter Pacote Inicial Grátis'
  }
};

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' }
];

const sampleProducts = [
  { id: 1, titleKey: 'Modern Resume Template', price: '€12' },
  { id: 2, titleKey: 'Small Business Branding Kit', price: '€29' },
  { id: 3, titleKey: '90-Day Productivity Planner', price: '€19' },
  { id: 4, titleKey: 'Minimalist Study Organizer', price: '€9' }
];

export default function Homepage() {
  const browserLang = typeof navigator !== 'undefined' ? (navigator.language || 'en').slice(0,2) : 'en';
  const [lang, setLang] = useState(translations[browserLang] ? browserLang : 'en');
  const t = translations[lang];

  useEffect(()=>{ document.documentElement.lang = lang }, [lang]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-[#111827] text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold tracking-tight">{t.siteName}</div>
            <div className="hidden sm:block text-sm text-gray-300">{t.tagline}</div>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:underline">Shop</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">About</a>
            </nav>
            <select aria-label="Language" value={lang} onChange={(e)=>setLang(e.target.value)} className="bg-[#111827] text-white text-sm px-2 py-1 border border-gray-700 rounded">
              {LANGS.map(l=> <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
            <a href="#shop" className="ml-2 inline-block bg-[#3B82F6] text-white px-4 py-2 rounded-md font-medium text-sm">{t.browse}</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight text-[#111827]">{t.tagline}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">{t.subtext}</p>
            <div className="mt-8 flex gap-4">
              <a href="#shop" className="inline-block bg-[#3B82F6] text-white px-6 py-3 rounded-md font-semibold">{t.browse}</a>
              <a href="#newsletter" className="inline-block border border-gray-300 px-6 py-3 rounded-md text-sm font-medium">{t.newsletter}</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[320px] relative">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-10 bg-gray-100 rounded mb-4"></div>
                <div className="h-48 bg-gray-50 rounded"></div>
              </div>
              <div className="absolute -right-8 -bottom-6 w-48 bg-white p-4 rounded shadow-md">
                <div className="h-8 bg-gray-100 rounded mb-2"></div>
                <div className="h-20 bg-gray-50 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#111827]">{t.categoriesTitle}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card icon="💼" title={t.career} desc="Resumes, cover letters, LinkedIn kits" />
            <Card icon="🧘‍♀️" title={t.lifestyle} desc="Planners, journals, trackers" />
            <Card icon="💡" title={t.business} desc="Invoices, pitch decks, branding kits" />
            <Card icon="🎓" title={t.student} desc="Study planners, note systems, calendars" />
          </div>
        </section>

        <section className="mt-16" id="shop">
          <h3 className="text-2xl font-bold text-[#111827]">{t.featured}</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleProducts.map(p => (
              <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-36 bg-gray-50 rounded mb-4"></div>
                <div className="font-semibold">{p.titleKey}</div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-gray-600">{p.price}</div>
                  <form action="/api/create-checkout-session" method="POST">
                    <input type="hidden" name="productId" value={p.id} />
                    <button className="bg-[#3B82F6] text-white px-3 py-1 rounded text-sm" type="submit">Add to Cart</button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-[#111827] text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between" id="newsletter">
          <div>
            <h4 className="text-xl font-bold">{t.joinLine}</h4>
            <p className="mt-1 text-sm text-gray-300">{t.subtext}</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <input placeholder="you@example.com" className="px-4 py-2 rounded text-gray-900" />
            <button className="bg-[#60A5FA] px-4 py-2 rounded font-medium">{t.starter}</button>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <div className="font-extrabold text-xl">{t.siteName}</div>
            <div className="text-sm text-gray-500 mt-1">Craft your success — one template at a time.</div>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} TemplateForge</div>
        </div>
      </footer>
    </div>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col gap-3">
      <div className="text-3xl">{icon}</div>
      <div className="font-semibold text-lg">{title}</div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  );
}
