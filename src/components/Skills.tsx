'use client';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAntdesign,
  SiRadixui,
  SiFramer,
  SiReactquery,
  SiPostman,
  SiBeekeeperstudio,
  SiStyledcomponents,
  SiGraphql,
  SiFigma,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaGitAlt } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const icons = [
  { Icon: SiJavascript, label: 'JavaScript' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiReact, label: 'React' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS' },
  { Icon: SiAntdesign, label: 'Ant Design' },
  { Icon: SiRadixui, label: 'Radix UI' },
  { Icon: SiFramer, label: 'Framer Motion' },
  { Icon: SiPostman, label: 'Postman' },
  { Icon: SiReactquery, label: 'React Query' },
  { Icon: SiBeekeeperstudio, label: 'Beekeeper' },
  { Icon: VscVscode, label: 'VS Code' },
  { Icon: SiStyledcomponents, label: 'Styled Components' },
  { Icon: SiFigma, label: 'Figma' },
  { Icon: SiGraphql, label: 'GraphQL' },
  { Icon: FaGitAlt, label: 'Git' },
];

export const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orbitConfigs = [
    {
      radius: windowWidth > 1024 ? 90 : windowWidth > 640 ? 75 : 65,
      size: windowWidth > 1024 ? 200 : windowWidth > 640 ? 180 : 150,
      rotate: 360,
      duration: 25,
    },
    {
      radius: windowWidth > 1024 ? 140 : windowWidth > 640 ? 120 : 100,
      size: windowWidth > 1024 ? 300 : windowWidth > 640 ? 260 : 220,
      rotate: -360,
      duration: 35,
    },
    {
      radius: windowWidth > 1024 ? 190 : windowWidth > 640 ? 160 : 140,
      size: windowWidth > 1024 ? 400 : windowWidth > 640 ? 350 : 280,
      rotate: 360,
      duration: 45,
    },
  ];
  const orbits = [icons.slice(0, 5), icons.slice(5, 10), icons.slice(10, 15)];

  return (
    <Layout>
      <h2 className="text-center flex justify-center items-center gap-2 text-white/70 relative z-20 mt-32 px-18">
        <Sparkles
          size={16}
          fill="#8ab6ff"
          strokeWidth={1}
          color="#8ab6ff"
        />{' '}
        Principais ferramentas e tecnologias do meu dia a dia
      </h2>
      <div className="relative z-20 p-1 flex items-center justify-center min-h-[400px] md:min-h-[500px] text-white">
        {orbitConfigs.map(({ size }, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full border border-white/15 z-20"
            style={{ width: size, height: size }}
          />
        ))}

        {orbits.map((orbitIcons, index) => {
          const { radius, size, rotate, duration } = orbitConfigs[index];

          return (
            <motion.div
              key={`orbit-${index}`}
              className="absolute z-20"
              animate={{ rotate }}
              transition={{ repeat: Infinity, duration, ease: 'linear' }}
              style={{
                width: size,
                height: size,
                top: '50%',
                left: '50%',
                translateX: '-50%',
                translateY: '-50%',
              }}
            >
              {orbitIcons.map(({ Icon, label }, i) => {
                const angle = (360 / orbitIcons.length) * i;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <div
                    key={`${label}-${i}`}
                    className="absolute text-center"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      width: windowWidth < 640 ? 50 : 70,
                    }}
                  >
                    <Icon
                      size={windowWidth < 640 ? 20 : 28}
                      title={label}
                      className="text-white opacity-80 hover:scale-125 transition-transform"
                    />
                    <span className="block text-[10px] sm:text-xs mt-1">
                      {label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </Layout>
  );
};
