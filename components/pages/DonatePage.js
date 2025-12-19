'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Smartphone, Copy, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function DonatePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [momoRef, momoInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copiedNumber, setCopiedNumber] = useState('')

  const momoAccounts = [
    {
      provider: 'MTN Mobile Money',
      merchantId: '685791',
      number: '0541756137',
      name: 'RBEEZCARE 2025 Ventures',
      color: 'from-yellow-400 to-yellow-600',
      icon: '📱'
    }
  ]

  const copyToClipboard = (number, provider) => {
    navigator.clipboard.writeText(number.replace(/\s/g, ''))
    setCopiedNumber(provider)
    setTimeout(() => setCopiedNumber(''), 2000)
  }

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
              <Heart className="w-10 h-10 text-white fill-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Make a <span className="text-gradient">Donation</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your generosity helps us continue our mission to make a positive impact in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={momoRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={momoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Support Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Send your donation directly to our MTN Mobile Money account below. Every contribution makes a difference!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-8 mb-16">
              {momoAccounts.map((account, index) => (
                <motion.div
                  key={account.provider}
                  initial={{ opacity: 0, y: 50 }}
                  animate={momoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden hover-lift"
                >
                  <div className={`bg-gradient-to-br ${account.color} p-6 text-center`}>
                    <div className="text-6xl mb-3">{account.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{account.provider}</h3>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">Account Name</p>
                      <p className="text-lg font-semibold text-black">{account.name}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">Merchant ID</p>
                      <p className="text-lg font-semibold text-black">{account.merchantId}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">Merchant Number</p>
                      <p className="text-2xl font-bold text-primary-orange mb-3">{account.number}</p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(account.number, account.provider)}
                      className="w-full px-6 py-3 bg-gradient-orange text-white rounded-full font-semibold shadow-orange hover-lift flex items-center justify-center space-x-2"
                    >
                      {copiedNumber === account.provider ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy Number</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={momoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-gradient-to-br from-primary-orange to-primary-light rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white"
            >
              <Smartphone className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">How to Donate via Mobile Money</h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                  <div className="text-4xl mb-3">1️⃣</div>
                  <h4 className="text-xl font-bold mb-2">Use MTN Mobile Money</h4>
                  <p className="text-white/90">Open your MTN Mobile Money app or dial the USSD code.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                  <div className="text-4xl mb-3">2️⃣</div>
                  <h4 className="text-xl font-bold mb-2">Copy the Number</h4>
                  <p className="text-white/90">Click the &quot;Copy Number&quot; button to copy the account number.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                  <div className="text-4xl mb-3">3️⃣</div>
                  <h4 className="text-xl font-bold mb-2">Send Your Donation</h4>
                  <p className="text-white/90">Use your Mobile Money app to send any amount to the copied number.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
              Why Your Donation Matters
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Direct Impact',
                  description: '100% of your donation goes directly to our programs and beneficiaries.'
                },
                {
                  icon: CheckCircle,
                  title: 'Transparency',
                  description: 'We provide detailed reports on how your contributions are used.'
                },
                {
                  icon: Smartphone,
                  title: 'Easy & Secure',
                  description: 'Donate safely using your preferred mobile money provider.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover-lift"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
