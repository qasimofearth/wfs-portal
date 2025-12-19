import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-stone-950 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.svg"
            alt="WFS"
            width={48}
            height={48}
            className="mb-6 opacity-60"
          />

          <p className="heading-display text-primary-gold text-lg mb-2">
            Wisdom Frontiers Society
          </p>

          <p className="text-mono text-xs text-stone-600 tracking-wider">
            © {currentYear} · Exploring infinite frontiers
          </p>
        </div>
      </div>
    </footer>
  )
}
