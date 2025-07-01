import { SquareArrowOutUpRight } from 'lucide-react';
import { Layout } from './Layout';

export const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Layout>
        <div
          className="absolute bottom-0 left-1/2 z-10 h-full w-full -translate-x-1/2 transform overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
          }}
        >
          <div
            className="absolute bottom-[120px] left-1/2 h-[100px] w-[700px] max-sm:w-[300px] max-sm:h-[60px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[60px] max-sm:blur-[30px]"
            style={{ transform: 'translateX(60px)' }}
          />

          <div className="absolute bottom-[180px] left-[15%] h-[140px] w-[500px] max-sm:w-[200px] max-sm:h-[60px] bg-[radial-gradient(50%_50%_at_50%_50%,#296dff_0%,rgba(0,0,0,0)_100%)] blur-[80px] max-sm:blur-[30px] opacity-70" />

          <div className="absolute bottom-[90px] right-[10%] h-[120px] w-[450px] max-sm:w-[180px] max-sm:h-[50px] bg-[radial-gradient(50%_50%_at_50%_50%,#ff2bd9_0%,rgba(0,0,0,0)_100%)] blur-[70px] max-sm:blur-[30px] opacity-60" />

          <div className="absolute bottom-[250px] left-[40%] h-[90px] w-[400px] max-sm:hidden bg-[radial-gradient(50%_50%_at_50%_50%,#fda4ff_0%,rgba(0,0,0,0)_100%)] blur-[60px] opacity-40" />

          <div className="absolute bottom-[300px] left-[5%] h-[100px] w-[350px] max-sm:hidden bg-[radial-gradient(50%_50%_at_50%_50%,#93c5fd_0%,rgba(0,0,0,0)_100%)] blur-[50px] opacity-50" />
        </div>

        <div className="relative z-30 flex h-full flex-col items-center justify-center text-center text-white px-6">
          <h1 className="mx-auto max-w-[900px] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 mb-4 leading-snug">
            Desenvolvedora focada em criar{' '}
            <span
              style={{ fontFamily: 'var(--font-playfair-display)' }}
              className="bg-gradient-to-r from-[#8ab6ff] via-[#aecbff] to-[#dde9ff] bg-clip-text text-transparent font-semibold italic shadow-lg"
            >
              experiências digitais
            </span>{' '}
            envolventes e funcionais
          </h1>

          <p className="mb-8 text-gray-200 italic">
            Rafaela, Front-end Developer
          </p>
          <button className="flex items-center gap-3 cursor-pointer font-medium px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white shadow-md backdrop-blur-md transition hover:bg-transparent hover:shadow-lg">
            Download CV
            <SquareArrowOutUpRight size={17} />
          </button>
        </div>
      </Layout>
    </div>
  );
};
