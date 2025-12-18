'use client'

import { categories } from '@/data/categories'

interface CategoriesProps {
  selectedCategory: string | null
  onSelectCategory: (id: string | null) => void
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-20 bg-void-950">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            <span className="text-gold-500">Explore</span> the Frontiers
          </h2>
          <p className="section-subheading mx-auto">
            Choose your path of discovery. Each category holds unique tools for growth and understanding.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {/* All filter */}
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gold-500 text-void-950 shadow-lg shadow-gold-500/30'
                : 'bg-void-900/50 text-cream-300 border border-gold-500/20 hover:border-gold-500/40 hover:bg-void-900'
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gold-500 text-void-950 shadow-lg shadow-gold-500/30'
                  : 'bg-void-900/50 text-cream-300 border border-gold-500/20 hover:border-gold-500/40 hover:bg-void-900'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
