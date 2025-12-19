'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import MainLayout from '@/components/MainLayout'
import GalleryPage from '@/components/pages/GalleryPage'

export default function Gallery() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <MainLayout>
          <GalleryPage />
        </MainLayout>
      )}
    </>
  )
}
