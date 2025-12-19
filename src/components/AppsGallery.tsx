import { apps } from '@/data/apps'

export default function AppsGallery() {
  return (
    <section id="apps" className="py-32 bg-white">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="heading-display text-4xl md:text-5xl mb-6">
            Apps
          </h2>
          <div className="divider mb-6"></div>
          <p className="text-body text-lg max-w-xl mx-auto">
            Tools for human optimization and expanded consciousness.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.id}
              className="card-minimal p-10 text-center"
            >
              <h3 className="heading-display text-3xl mb-4">
                {app.name}
              </h3>

              <p className="text-body mb-8">
                {app.description}
              </p>

              <div className="flex items-center justify-center gap-6">
                <span className="text-sm text-primary-blue font-medium uppercase tracking-wider">
                  {app.status === 'live' ? '● Live' : 'Coming Soon'}
                </span>

                {app.url && (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Launch →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {apps.length === 1 && (
          <p className="text-center text-stone-400 mt-12 text-sm">
            More apps coming soon.
          </p>
        )}
      </div>
    </section>
  )
}
