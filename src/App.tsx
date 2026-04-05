import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import ForTeachers from './sections/ForTeachers'
import CTA from './sections/CTA'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ForTeachers />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
