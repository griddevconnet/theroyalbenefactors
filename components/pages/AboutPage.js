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
      name: 'Grace Adjei Frimpong',
      position: 'President',
      image: '/images/Grace%20Adjei%20Frimpong.jpeg',
      bio: 'Kwame Nkrumah University of Science and Technology — Hospitality and Tourism Management',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Rebecca Adwoa Kankam',
      position: 'Vice President',
      image: '/images/Rebecca%20Adwoa%20Kankam.jpeg',
      bio: 'University of Cape Coast — Nutrition and Dietetics',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Nora Baiden Mensah',
      position: 'Main Organizer',
      image: '/images/Nora%20Baiden%20Mensah.jpeg',
      bio: 'University of Cape Coast — Food and Nutrition',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Adjei Frimpong Kwabena',
      position: 'Deputy Organizer',
      image: '/images/Adjei%20Frimpong%20Kwabena.jpeg',
      bio: 'AMUSTED (Main Campus) — BSc. Agriculture in Business',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Nathaniel Agyei Fosu Marfo',
      position: 'Secretary',
      image: '/images/Nathaniel%20Agyei%20Fosu%20Marfo.jpeg',
      bio: 'Kwame Nkrumah University of Science and Technology — Mathematics',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Precious Ama Agyemang',
      position: 'Main Counselor',
      image: '/images/Precious%20Ama%20Agyemang.jpeg',
      bio: 'University of Professional Studies, Accra — BSc in Information Technology',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Angela Gyaamah',
      position: 'Assist Counselor',
      image: '/images/Angela%20Gyaamah.jpeg',
      bio: 'Tepa Nursing and Midwifery Training College — Midwifery',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Dressler Osei Bempah',
      position: 'Financial Secretary (Main)',
      image: '/images/Dressler%20Osei%20Bempah.jpeg',
      bio: 'Garden City University — BSc Midwifery',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Sarah Adongo',
      position: 'Financial Secretary (Assistant)',
      image: '/images/Sarah%20Adongo.jpeg',
      bio: 'Kwame Nkrumah University of Science and Technology — BSc. Agribusiness',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Esther Yaa Asieduwaa Boafo',
      position: 'Location Manager',
      image: '/images/Esther%20Yaa%20Asieduwaa%20Boafo.jpeg',
      bio: 'College of Health Yamfo — Community Mental Health',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Gyamfuah Owusu Ansah',
      position: 'Patron',
      image: '/images/Gyamfuah%20Owusu%20Ansah.jpeg',
      bio: 'United Kingdom',
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
                The History of <span className="text-gradient">Royal Benefactors</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p className="font-semibold text-black">Helping the Needy As We Can</p>
                <p className="font-semibold text-black">The Beginning: A Young Heart&apos;s Vision</p>
                <p>
                  Royal Benefactors was born from the compassionate heart of a 16-year-old girl who refused to look away from the suffering around her. Growing up, she had always felt drawn to helping children in need, carrying a dream that one day she would create something meaningful to serve her community. But like many young dreamers, she wasn&apos;t sure where to begin.
                </p>
                <p className="font-semibold text-black">A Moment of Clarity</p>
                <p>
                  The turning point came through a simple but profound realization. Even with loving parents and a home to shelter her, life sometimes felt difficult. This thought led her to a powerful question: if things could be hard for someone with family and a roof overhead, what about those who had neither? Where did homeless people sleep when the rains came? How did they find their next meal, day after day?
                </p>
                <p>
                  These questions wouldn&apos;t leave her alone. They demanded action.
                </p>
                <p className="font-semibold text-black">Taking the First Steps</p>
                <p>
                  She knew her parents would support her vision if they could, but she also understood that creating real change required more than good intentions. So she turned to her closest friend, sharing her heart and her dream. He believed in her vision and became the first investor in what would become Royal Benefactors.
                </p>
                <p className="font-semibold text-black">A Movement Begins</p>
                <p>
                  Word spread among friends, and what started as one person&apos;s dream began to grow into a shared mission. Friends came forward, offering their support and resources. As the circle widened, more and more people joined, drawn together by a common desire to make a difference in the world.
                </p>
                <p className="font-semibold text-black">Unity in Purpose</p>
                <p>
                  The strength of Royal Benefactors has always been in its unity. Young people who could have simply gone about their own lives chose instead to stand together for those who had no one standing with them. This collective spirit, this determination to be the change they wanted to see, became the foundation&apos;s greatest asset.
                </p>
                <p className="font-semibold text-black">Making It Official</p>
                <p>
                  Through their shared commitment and growing momentum, the group made their mission official, establishing Royal Benefactors as a formal association. The name itself reflects their vision: to be benefactors, givers of good, approaching their work with the dignity and commitment that every person in need deserves.
                </p>
                <p className="font-semibold text-black">The Mission Continues</p>
                <p>
                  Today, Royal Benefactors stands as proof that age is no barrier to making a real difference in the world. What began with one teenager&apos;s refusal to accept suffering as inevitable has grown into an organization dedicated to helping the needy in whatever ways possible, one person, one family, one community at a time.
                </p>
                <p>
                  The foundation&apos;s work continues, driven by that same question that started it all: If we can help, how can we not?
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
                src="/images/about%203.jpeg"
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
