'use client'

import { categories } from '@/data/categories'

interface CategoriesProps {
  selectedCategory: string | null
  onSelectCategory: (id: string | null) => void
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-16 bg-void-950 border-y border-neon-blue/10">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-4">
          {/* All filter */}
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 uppercase tracking-wider text-sm ${
              selectedCategory === null
                ? 'bg-neon-blue text-void-950 shadow-neon'
                : 'bg-void-900/60 text-void-300 border border-neon-blue/20 hover:border-neon-blue/50 hover:text-neon-blue'
            }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 uppercase tracking-wider text-sm ${
                selectedCategory === category.id
                  ? 'bg-neon-blue text-void-950 shadow-neon'
                  : 'bg-void-900/60 text-void-300 border border-neon-blue/20 hover:border-neon-blue/50 hover:text-neon-blue'
              }`}
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
