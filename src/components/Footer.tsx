import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-stone-900 text-stone-400">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.svg"
            alt="WFS"
            width={48}
            height={48}
            className="mb-6 opacity-60"
          />

          <p className="heading-display text-white text-lg mb-4">
            Wisdom Frontiers Society
          </p>

          <p className="text-sm">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
