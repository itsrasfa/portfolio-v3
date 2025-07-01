import { Sparkle } from 'lucide-react';
import { Layout } from './Layout';

const jobs = [
  {
    company: 'Zuckt Labs',
    role: 'Desenvolvedora Front-end',
    period: '2024 - 2025 (1 ano e 6 meses)',
    summary:
      'Manutenção e evolução do sistema Arcke, principal produto da empresa, focado em gestão de ordens de serviço e contratos. Correção de bugs, refatorações, implementação de novas funcionalidades, e garantia de estabilidade e performance em produção. Também desenvolvi o front-end do OrçamentoBom, um sistema para gestão de orçamentos, cadastro de clientes e produtos, com funcionalidades para geração e download de PDFs.',
  },
  {
    company: 'ArloesiTech',
    role: 'Desenvolvedora Front-end',
    period: '2022 - 2024 (1 ano e 7 meses)',
    summary:
      'Atuei no desenvolvimento de sistema escolar com módulos para matrícula de alunos, processamento de pagamentos, gerenciamento de notas e frequência, cadastro de alunos e controle de perfis com diferentes níveis de permissão. Também contribuí em sistema de rastreamento de cacau, com cadastro de produtores, leitura de QR codes para identificação de lotes, emissão e controle logístico, além de dashboards para monitoramento da produção. Tecnologias: React, TypeScript, Next.js, Styled Components, React Query e Zustand, seguindo boas práticas e metodologias ágeis.',
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
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Layout>
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-40 flex justify-center">
          <ol className="relative border-s-2 rounded border-[#8ab6ff]/20 w-full max-w-xl">
            {jobs.map((job, i) => (
              <li key={i} className="my-5 ms-4">
                <Sparkle
                  size={16}
                  fill="#8ab6ff"
                  strokeWidth={1}
                  color="#8ab6ff"
                  className="mt-1.5 -start-[9px] absolute"
                />
                <time className="mb-1 pt-2 block text-sm font-normal leading-none text-gray-400">
                  {job.period}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {job.company} - {job.role}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-400">
                  {job.summary}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </Layout>
    </main>
  );
};
