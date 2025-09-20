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
      {/* Header with Hamburger Menu */}
      <header className="relative z-50 p-6">
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Hamburger Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 top-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 pt-20">
                <nav className="space-y-6">
                  <Link
                    href="/event/lady-gaga-kl"
                    className="block text-xl font-semibold text-white hover:text-brand-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Tickets
                  </Link>
                  <Link
                    href="/artist"
                    className="block text-xl font-semibold text-white hover:text-brand-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Artist
                  </Link>
                  <Link
                    href="/charity"
                    className="block text-xl font-semibold text-white hover:text-brand-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Charity
                  </Link>
                  <Link
                    href="/pitch"
                    className="block text-xl font-semibold text-white hover:text-brand-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investors
                  </Link>
                </nav>
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
