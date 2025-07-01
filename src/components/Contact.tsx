'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Layout } from '@/components/Layout';

export const Contact = () => {
  const email = 'dev.rafaela.work@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <section className="relative z-10 text-center mx-auto max-w-7xl px-5 pt-30 pb-24 md:pt-40 flex flex-col gap-12 text-white">
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#8ab6ff] via-[#aecbff] to-[#dde9ff] bg-clip-text text-transparent">
            Vamos trabalhar juntos
          </h1>
          <h2 className="text-center text-white/70">Entre em contato</h2>
        </div>
        <div className="mx-auto max-w-md">
          <button
            onClick={copyEmail}
            aria-label="Copiar email"
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-white/5 px-6 py-3 font-medium shadow-md transition hover:bg-white/10 cursor-pointer"
          >
            {copied ? (
              <>
                <FiCheck className="h-6 w-6 text-green-400" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <FiCopy className="h-6 w-6" />
                <span>{email}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link
            href="https://github.com/itsrasfa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <FaGithub className="h-6 w-6" />
            <span>Github</span>
          </Link>

          <Link
            href="https://linkedin.com/in/itsrasfa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <FaLinkedin className="h-6 w-6" />
            <span>Linkedin</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
