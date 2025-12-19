'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import MainLayout from '@/components/MainLayout'
import AboutPage from '@/components/pages/AboutPage'

export default function About() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <MainLayout>
          <AboutPage />
        </MainLayout>
      )}
    </>
  )
}
