import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a
        href="#main-content"
        className="fixed left-1/2 z-50 -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus:translate-y-3 focus:opacity-100 focus:outline-none"
      >
        <span className="inline-flex items-center rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-background shadow-elevated">
          Skip to main content
        </span>
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
