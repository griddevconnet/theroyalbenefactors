'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center p-1 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/logo-modified.png"
                      alt="Royal Benefactors Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Royal Benefactors</h3>
                  <p className="text-sm text-gray-400">Making a Difference</p>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Dedicated to creating positive change and supporting communities in need.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-400 hover:text-primary-orange transition-colors text-sm"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Kumasi, Ashanti Region, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-orange flex-shrink-0" />
                <span className="text-gray-400 text-sm">+233 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-orange flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@royalbenefactors.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-neutral-gray flex items-center justify-center hover:bg-gradient-orange transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full px-6 py-3 bg-gradient-orange text-white rounded-full font-medium shadow-orange hover-lift"
              >
                Donate Now
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Royal Benefactors. All rights reserved. Made with ❤️ for a better world.
          </p>
        </div>
      </div>
    </footer>
  )
}
