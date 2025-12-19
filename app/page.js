'use client'

import { useState, useEffect } from 'react'
import SplashScreen from '@/components/SplashScreen'
import MainLayout from '@/components/MainLayout'
import HomePage from '@/components/pages/HomePage'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )}
    </>
  )
}
