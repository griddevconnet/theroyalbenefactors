'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between max-w-full">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 md:space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange p-1 overflow-hidden flex-shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/logo-modified.png"
                    alt="Royal Benefactors Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h1 className={`text-base md:text-xl lg:text-2xl font-bold truncate ${scrolled ? 'text-black' : 'text-white'}`}>
                  Royal Benefactors
                </h1>
                <p className={`text-xs truncate ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                  Making a Difference
                </p>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.slice(0, -1).map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer font-medium transition-colors ${
                    scrolled ? 'text-black hover:text-primary-orange' : 'text-white hover:text-primary-light'
                  }`}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-orange text-white rounded-full font-medium shadow-orange hover-lift"
              >
                Donate Now
              </motion.button>
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`} />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <span className="block py-2 text-black hover:text-primary-orange font-medium transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
