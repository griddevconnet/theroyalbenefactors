'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, Play, Image as ImageIcon, Video } from 'lucide-react'
import Link from 'next/link'

export default function GalleryPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    {
      type: 'image',
      src: '/images/about.jpeg',
      title: 'Food Distribution Drive',
      description: 'Providing meals to 500+ families in need',
      category: 'food'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Education Program Launch',
      description: 'Opening new learning centers for children',
      category: 'education'
    },
    {
      type: 'image',
      src: '/images/about%202.jpeg',
      title: 'Medical Camp',
      description: 'Free health checkups for 1000+ people',
      category: 'healthcare'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      title: 'School Supplies Donation',
      description: 'Distributing books and materials to students',
      category: 'education'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Community Center Opening',
      description: 'New facility serving 5000+ residents',
      category: 'community'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
      title: 'Volunteer Training',
      description: 'Empowering our volunteers with skills',
      category: 'community'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
      title: 'Clean Water Initiative',
      description: 'Installing water purification systems',
      category: 'community'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Annual Fundraiser Gala',
      description: 'Celebrating our impact together',
      category: 'events'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&q=80',
      title: 'Clothing Drive',
      description: 'Collecting and distributing warm clothes',
      category: 'community'
    },
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'food', label: 'Food Security' },
    { id: 'community', label: 'Community' },
    { id: 'events', label: 'Events' },
  ]

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <div className="overflow-hidden">
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-neutral-gray to-black pt-32 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300">
              Witness the impact of our work through photos and videos from our various initiatives and events.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-gradient-orange text-white shadow-orange'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedMedia(item)}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  
                  {item.type === 'video' && (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  )}

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Video className="w-5 h-5 text-white" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-orange transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full"
            >
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src={selectedMedia.src}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                />
              )}
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h3>
                <p className="text-gray-400">{selectedMedia.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every photo and video represents lives changed and communities transformed. Join us in creating more moments worth celebrating.
            </p>
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-orange text-white rounded-full font-semibold shadow-orange hover-lift"
              >
                Support Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
