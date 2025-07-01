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

const orbitConfigs = [
  { radius: 90, size: 200, rotate: 360, duration: 25 },
  { radius: 140, size: 300, rotate: -360, duration: 35 },
  { radius: 190, size: 400, rotate: 360, duration: 45 },
];

export const Skills = () => {
  const orbits = [icons.slice(0, 5), icons.slice(5, 10), icons.slice(10, 15)];

  return (
    <Layout>
      <div className="relative z-20 mt-32 p-1 flex items-center justify-center min-h-[600px] text-white">

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
                    }}
                  >
                    <Icon
                      size={28}
                      title={label}
                      className="text-white opacity-80 hover:scale-125 transition-transform"
                    />
                    <span className="block text-xs mt-1">{label}</span>
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
