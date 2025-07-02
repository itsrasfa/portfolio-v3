import Link from 'next/link';
import { ExternalLink, Github, Sparkle } from 'lucide-react';
import { Layout } from './Layout';

const featuredProjects = [
  {
    name: 'Film Locations',
    link: 'https://film-locations-kappa.vercel.app',
    github: 'https://github.com/itsrasfa/film-locations',
    description:
      'Aplicação web desenvolvida com Next.js que exibe locações reais onde filmes e séries famosas foram gravados ao redor do mundo.',
    features: [
      'Dados gerenciados via CMS (Hygraph)',
      'Mapa interativo com MapLibre GL',
      'Filtro por gêneros cinematográficos',
      'Favoritar locações com gerenciamento de estado via React Context',
    ],
    technologies: [
      'React',
      'Next.js',
      'Hygraph',
      'MapLibre GL',
      'Tailwind',
      'Context API',
    ],
  },
  {
    name: 'Crypto Analytics Dashboard',
    link: 'https://crypto-analytics-dashboard.vercel.app',
    github: 'https://github.com/itsrasfa/crypto-analytics-dashboard',
    description:
      'Dashboard desenvolvida com Next.js que usa APIs públicas para mostrar dados de criptomoedas em tempo real.',
    features: [
      'Gráficos interativos com Recharts',
      'Filtro por período (ex: 24h, 7d, 30d)',
      'Troca de moeda entre (BRL/USD) e idioma (PT/EN)',
      'Design responsivo para todos os dispositivos',
    ],
    technologies: [
      'React',
      'Next.js',
      'Recharts',
      'CoinGecko API',
      'Open Exchange Rates API',
      'Zustand',
      'Tailwind',
    ],
  },
];

export const Projects = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Layout>
        <section className="relative z-10 mx-auto max-w-7xl px-5 pt-25 pb-24 md:pt-30 flex flex-col gap-8">
          <div>
            <h1 className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#8ab6ff] via-[#aecbff] to-[#dde9ff] bg-clip-text text-transparent pb-2">
              Projetos em Destaque
            </h1>
            <h2 className="text-center text-white/70">
              Confira meus projetos mais recentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.name}
                className={`group justify-between flex flex-col overflow-hidden rounded-2xl bg-white/5 shadow-md backdrop-blur-lg hover:shadow-xl px-6 py-8 opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">{project.name}</h2>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition"
                    >
                      <Github size={22} />
                    </Link>
                  )}
                </div>

                <p className="text-[#d1d1d1]/90 leading-relaxed mt-2">
                  {project.description}
                </p>

                <ul className="mt-3 flex flex-col gap-2 text-sm">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Sparkle
                        size={16}
                        fill="#8ab6ff"
                        strokeWidth={1}
                        color="#8ab6ff"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white/80 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition"
                  >
                    <ExternalLink size={16} />
                    Visualizar aplicação online
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </main>
  );
};
