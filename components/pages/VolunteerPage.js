'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Heart, Clock, Award } from 'lucide-react'

export default function VolunteerPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    {
      icon: Heart,
      title: 'Make a Difference',
      description: 'Directly impact lives and contribute to positive change in communities.'
    },
    {
      icon: Users,
      title: 'Build Connections',
      description: 'Meet like-minded people and build lasting friendships while serving.'
    },
    {
      icon: Award,
      title: 'Gain Experience',
      description: 'Develop new skills and gain valuable experience for your career.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose volunteer opportunities that fit your availability and lifestyle.'
    }
  ]

  return (
    <div className="overflow-hidden">
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-neutral-gray to-black pt-32 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Become a <span className="text-gradient">Volunteer</span>
            </h1>
            <p className="text-xl text-gray-300">
              Join our team of dedicated volunteers and help us create lasting positive change in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why <span className="text-gradient">Volunteer</span> With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with Royal Benefactors is more than just giving your time—it's about being part of a movement for positive change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={formRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
                Volunteer Application Form
              </h2>

              <div className="w-full overflow-hidden rounded-2xl">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdTlJqQ6jg_VtlFgooqXoZo1PVPSw2FG1MLfVeGAs_Xu04YYA/viewform?embedded=true" 
                  width="100%" 
                  height="1400" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  className="w-full"
                  title="Volunteer Application Form"
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  step: '1',
                  title: 'Application Review',
                  description: 'We review your application and match you with suitable opportunities.'
                },
                {
                  step: '2',
                  title: 'Orientation',
                  description: 'Attend a brief orientation session to learn about our programs.'
                },
                {
                  step: '3',
                  title: 'Start Volunteering',
                  description: 'Begin making a difference in your chosen area of interest!'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
