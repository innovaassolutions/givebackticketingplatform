'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MeshGradient } from '@paper-design/shaders-react';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen text-foreground flex flex-col relative overflow-hidden">
      {/* Header with Navigation */}
      <header className="relative z-50 p-6">
        {/* Desktop Navigation - Individual Glass Buttons */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          <Link
            href="/event/lady-gaga-kl"
            className="relative px-6 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 text-base font-medium group"
          >
            <div className="absolute inset-0 rounded-full bg-white/0 border border-transparent backdrop-blur-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/0 group-hover:shadow-black/10"></div>
            <span className="relative z-10">Tickets</span>
          </Link>
          <Link
            href="/artist"
            className="relative px-6 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 text-base font-medium group"
          >
            <div className="absolute inset-0 rounded-full bg-white/0 border border-transparent backdrop-blur-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/0 group-hover:shadow-black/10"></div>
            <span className="relative z-10">Artist</span>
          </Link>
          <Link
            href="/charity"
            className="relative px-6 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 text-base font-medium group"
          >
            <div className="absolute inset-0 rounded-full bg-white/0 border border-transparent backdrop-blur-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/0 group-hover:shadow-black/10"></div>
            <span className="relative z-10">Charity</span>
          </Link>
          <Link
            href="/pitch"
            className="relative px-6 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 text-base font-medium group"
          >
            <div className="absolute inset-0 rounded-full bg-white/0 border border-transparent backdrop-blur-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/0 group-hover:shadow-black/10"></div>
            <span className="relative z-10">Investors</span>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Hamburger Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
                opacity: { duration: 0.2 }
              }}
              className="absolute right-4 top-4 bottom-4 w-80 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl shadow-black/20"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Glass panel inner glow */}
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              <div className="relative p-8 pt-20 h-full">
                <nav className="space-y-1">
                  <Link
                    href="/event/lady-gaga-kl"
                    className="group block p-4 rounded-2xl text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>Book Tickets</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                  <Link
                    href="/artist"
                    className="group block p-4 rounded-2xl text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>Artist</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                  <Link
                    href="/charity"
                    className="group block p-4 rounded-2xl text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>Charity</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                  <Link
                    href="/pitch"
                    className="group block p-4 rounded-2xl text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>Investors</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                </nav>

                {/* Bottom accent line */}
                <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shader Background */}
      <div className="fixed inset-0 z-0" style={{ width: '100vw', height: '100vh' }}>
        <MeshGradient
          height="100vh"
          colors={["#e0eaff", "#241d9a", "#f75092", "#9f50d3"]}
          distortion={0.8}
          swirl={0.1}
          grainMixer={0}
          grainOverlay={0}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content Area */}
        <main className="flex-1 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            {/* New Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
                ✨ New Give Back Experience
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4">
                Fair Tickets.
                <span className="block font-normal bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: '"Luxurious Script", cursive' }}>
                  Real Impact.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Experience ticketing reimagined, where fairness is standard, generosity is built in.
              Every event becomes a chance to make a difference.
              </p>
            </motion.div>

          </div>
        </main>

        {/* Bottom Right Badge */}
        <div className="absolute bottom-8 right-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 left-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-white/50 text-sm"
          >
            © 2025 Give Back Ticketing Platform
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
