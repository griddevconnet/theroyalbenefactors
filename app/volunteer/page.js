'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import MainLayout from '@/components/MainLayout'
import VolunteerPage from '@/components/pages/VolunteerPage'

export default function Volunteer() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <MainLayout>
          <VolunteerPage />
        </MainLayout>
      )}
    </>
  )
}
