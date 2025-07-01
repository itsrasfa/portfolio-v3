'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiFolder, FiBriefcase, FiTool, FiMail } from 'react-icons/fi';

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: FiHome, label: 'Home' },
    { href: '/projects', icon: FiFolder, label: 'Projetos' },
    { href: '/experience', icon: FiBriefcase, label: 'Experiência' },
    { href: '/skills', icon: FiTool, label: 'Skills' },
    { href: '/contact', icon: FiMail, label: 'Contato' },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-40 -translate-x-1/2 w-full max-w-fit px-4">
      <nav className="w-full">
        <ul className="flex items-center gap-1 rounded-full bg-[#433C54]/30 px-2 py-1 shadow-md backdrop-blur-md border border-white/5 text-white">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors duration-300
                    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50
                    ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-[#A2A2A2] hover:text-white hover:bg-white/5'
                    }
                  `}
                  title={label}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 sm:mr-1" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
