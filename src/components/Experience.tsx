'use client';
import { Sparkle } from 'lucide-react';
import { Layout } from './Layout';
import { useState } from 'react';

const experiences = [
  {
    company: 'Zuckt Labs',
    role: 'Desenvolvedora Front-end',
    period: '2024 - 2025 (1 ano e 6 meses)',
    summary: `Atuei no desenvolvimento completo do front-end do OrçamentoBom, uma plataforma digital voltada para a criação e gestão de orçamentos de serviços e produtos. A aplicação permite que usuários cadastrem clientes, serviços e produtos, e compartilhem orçamentos via PDF, proporcionando uma gestão eficiente e profissional dos processos comerciais.

    Além disso, contribui para o sistema Arcke, um software de gestão de ordens de serviço, PMOC e contratos para técnicos e empresas terceirizadoras de serviços. Minhas responsabilidades incluíram o desenvolvimento de novas funcionalidades, manutenção do sistema e outras atividades relacionadas, garantindo a eficiência e qualidade dos serviços prestados aos clientes da empresa.`,
  },
  {
    company: 'ArloesiTech',
    role: 'Desenvolvedora Front-end',
    period: '2022 - 2024 (1 ano e 7 meses)',
    summary: `Atuei no desenvolvimento de um sistema escolar com módulos para matrícula, processamento de pagamentos, gerenciamento de notas e frequência, cadastro de alunos e controle de perfis com diferentes níveis de permissão.
      
      Também contribuí no sistema de rastreamento de cacau, com cadastro de produtores, leitura de QR codes para identificação de lotes, emissão e controle logístico, além de dashboards para monitoramento da produção. Tecnologias: React, TypeScript, Next.js, Styled Components, React Query e Zustand, seguindo boas práticas e metodologias ágeis.`,
  },
  {
    company: 'Freelancer',
    role: 'Desenvolvedora Front-end',
    period: 'Desde 2021',
    summary:
      'Criação de landing pages, sites institucionais e pequenas aplicações web utilizando React, Next.js e Tailwind, focando em design responsivo e boa experiência do usuário.',
  },
];

export const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Layout>
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-40 flex justify-center">
          <ol className="relative border-s-2 rounded border-[#8ab6ff]/20 w-full max-w-xl">
            {experiences.map((job, i) => {
              const paragraphs = job.summary
                .split('\n')
                .filter(Boolean)
                .map((p) => p.trim());

              const isExpanded = expanded === i;
              const shouldTruncate = paragraphs.length > 1 && !isExpanded;

              return (
                <li
                  key={i}
                  className="my-5 ms-4 opacity-0 animate-fade-up"
                  style={{
                    animationDelay: `${i * 150}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <Sparkle
                    size={16}
                    fill="#8ab6ff"
                    strokeWidth={1}
                    color="#8ab6ff"
                    className="mt-1.5 -start-[25px] absolute"
                  />
                  <time className="mb-1 pt-2 block text-sm font-normal leading-none text-gray-400">
                    {job.period}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    {job.company} - {job.role}
                  </h3>

                  {shouldTruncate ? (
                    <p className="mb-4 text-base font-normal text-gray-400">
                      {paragraphs[0]}...
                    </p>
                  ) : (
                    paragraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="mb-4 text-base font-normal text-gray-400"
                      >
                        {paragraph}
                      </p>
                    ))
                  )}

                  {paragraphs.length > 1 && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className="text-sm text-[#8ab6ff] hover:underline transition cursor-pointer"
                    >
                      {isExpanded ? 'Mostrar menos' : 'Ler mais'}
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      </Layout>
    </main>
  );
};
