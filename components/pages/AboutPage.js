'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Target, Eye, Linkedin, Twitter, Mail } from 'lucide-react'

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, ensuring the highest quality of service and impact.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We operate with transparency and honesty, building trust with our donors and communities.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We envision a world where everyone has access to basic needs and opportunities to thrive.',
    },
  ]

  const executives = [
    {
      name: '*********',
      position: '*********',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: '*********',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: '*********',
      position: '*********',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      bio: '*********',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: '*********',
      position: '*********',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      bio: '*********',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: '*********',
      position: '*********',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      bio: '*********',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: '*********',
      position: '*********',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
      bio: '*********',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: '*********',
      position: '*********',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: '*********',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
  ]

  return (
    <div className="overflow-hidden">
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-neutral-gray to-black pt-32 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We are a community of passionate individuals dedicated to making a lasting difference in the lives of those who need it most.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2010, Royal Benefactors began with a simple mission: to create meaningful change in communities that needed it most. What started as a small group of volunteers has grown into a thriving organization touching thousands of lives.
                </p>
                <p>
                  Over the years, we&apos;ve expanded our reach and deepened our impact, always staying true to our core values of compassion, integrity, and excellence. We believe that every person deserves access to basic necessities and opportunities to thrive.
                </p>
                <p>
                  Today, we work across multiple sectors including education, healthcare, food security, and community development, partnering with local organizations and volunteers to create sustainable solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our approach to creating positive change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover-lift text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-2xl flex items-center justify-center shadow-orange"
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Executive Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dedicated leaders driving our mission forward with passion and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-neutral-gray rounded-2xl overflow-hidden shadow-2xl hover-lift"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{exec.name}</h3>
                  <p className="text-primary-orange font-medium mb-3">{exec.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{exec.bio}</p>
                  
                  <div className="flex space-x-3">
                    <motion.a
                      href={exec.social.linkedin}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-orange transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={exec.social.twitter}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-orange transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={exec.social.email}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-orange transition-colors"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-orange">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;re always looking for passionate individuals to join our mission. Whether as a volunteer, partner, or team member, there&apos;s a place for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-orange rounded-full font-semibold shadow-2xl hover-lift"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
