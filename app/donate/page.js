'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import MainLayout from '@/components/MainLayout'
import DonatePage from '@/components/pages/DonatePage'

export default function Donate() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <MainLayout>
          <DonatePage />
        </MainLayout>
      )}
    </>
  )
}
