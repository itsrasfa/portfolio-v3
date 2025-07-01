'use client';
import { useCallback } from 'react';
import Particles, { ParticlesProps } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

type InitType = NonNullable<ParticlesProps['init']>;
type Engine = Parameters<InitType>[0];

export const SpaceBackground = () => {
  const particlesInit = useCallback<InitType>(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="absolute inset-0 z-10">
      <Particles
        className="h-full w-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: { color: '#000000' },
          particles: {
            number: { value: 200, density: { enable: true, area: 1200 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: { min: 0.1, max: 0.6 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: { min: 0.5, max: 2.2 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.05,
              direction: 'none',
              outModes: 'out',
            },
            links: { enable: false },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: { value: 120 },
                  size: { value: { min: 0.4, max: 1.8 } },
                },
              },
            },
            {
              maxWidth: 1200,
              options: {
                particles: { number: { value: 160 } },
              },
            },
          ],
        }}
      />
    </div>
  );
};
