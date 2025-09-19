'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/concert-hero.jpg)' }}
        />

        {/* Dynamic Concert Lighting Effect */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 150 + 75}px`,
                height: `${Math.random() * 150 + 75}px`,
                background: `radial-gradient(circle, ${
                  ['#026cdf', '#33b8aa', '#ff6b9d', '#ffd93d', '#6bcf7f', '#ff4757'][Math.floor(Math.random() * 6)]
                }30 0%, transparent 70%)`
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [0.7, 1.3, 0.7],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Spotlight Effects */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `10%`,
                width: '200px',
                height: '400px',
                background: `linear-gradient(180deg, ${
                  ['#026cdf', '#33b8aa', '#ffd93d'][i]
                }40 0%, transparent 100%)`
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                rotateZ: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6
                           bg-gradient-to-r from-white via-brand-400 to-primary
                           bg-clip-text text-transparent drop-shadow-lg">
              Fair Tickets.
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8
                           bg-gradient-to-r from-primary via-brand-400 to-white
                           bg-clip-text text-transparent drop-shadow-lg">
              Real Impact.
            </h2>
            <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-6 mb-8">
              <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
                A modern ticketing platform where every purchase supports the causes you care about.
                Experience transparent pricing and meaningful impact.
              </p>
            </div>
          </motion.div>

          {/* Role Switcher Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Artist Portal Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/artist"
                className="group relative px-8 py-4 bg-primary text-white rounded-xl
                           font-semibold text-lg transition-all duration-300
                           hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25
                           min-w-[200px] block"
              >
                <span className="relative z-10">Artist Portal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-brand-400
                                opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Fan Demo Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/event/lady-gaga-kl"
                className="group relative px-8 py-4 bg-brand-500 text-white rounded-xl
                           font-semibold text-lg transition-all duration-300
                           hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25
                           min-w-[200px] block"
              >
                <span className="relative z-10">Fan Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-primary-light
                                opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Charity Dashboard Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/charity"
                className="group relative px-8 py-4 border-2 border-brand-400 text-brand-400 rounded-xl
                           font-semibold text-lg transition-all duration-300
                           hover:bg-brand-400 hover:text-background hover:shadow-lg hover:shadow-brand-400/25
                           min-w-[200px] block"
              >
                <span className="relative z-10">Charity Dashboard</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-gray-400 text-lg"
          >
            Choose your experience to explore the platform
          </motion.p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="backdrop-blur-sm bg-black/30 rounded-lg mx-6 py-4"
        >
          <p className="text-white/90 font-medium">&copy; 2025 Give Back Ticketing Platform. Powered by transparency and impact.</p>
        </motion.div>
      </footer>
      </div>
    </div>
  );
}
