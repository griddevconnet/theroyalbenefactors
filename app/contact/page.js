'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import MainLayout from '@/components/MainLayout'
import ContactPage from '@/components/pages/ContactPage'

export default function Contact() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <MainLayout>
          <ContactPage />
        </MainLayout>
      )}
    </>
  )
}
