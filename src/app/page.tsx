'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import AppsGallery from '@/components/AppsGallery'
import About from '@/components/About'
import Team from '@/components/Team'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <>
      <Hero />
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <AppsGallery selectedCategory={selectedCategory} />
      <About />
      <Team />
    </>
  )
}
