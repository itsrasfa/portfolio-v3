import { ReactNode } from 'react';
import { Header } from './Header';
import { SpaceBackground } from './SpaceBackground';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <SpaceBackground />
      {children}
    </>
  );
};
