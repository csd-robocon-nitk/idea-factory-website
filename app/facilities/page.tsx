import Header from "@/components/header"
import Footer from "@/components/footer"
import StructuredBrowserBack from "@/components/structured-browser-back"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const facilities = [
  {
    title: "Equipment",
    href: "/equipment",
    image: "/facilities-equipment-cluster.svg",
    line: "3D printers, laser cutters, and fabrication machines",
  },
  {
    title: "Infrastructure",
    href: "/infrastructure",
    image: "/facilities-infrastructure-spaces.svg",
    line: "Seminar hall, soldering station, and machining station",
  },
]

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <StructuredBrowserBack href="/" />
      <Header />
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-44 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Facilities</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Explore Idea Factory resources</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the resource type you need, then place a request for the specific machine or space.
          </p>
        </div>

        <div className="grid gap-6">
          {facilities.map((facility) => (
            <Link
              key={facility.href}
              href={facility.href}
              className="group flex flex-col sm:flex-row gap-4 overflow-hidden rounded-lg border bg-card p-5 shadow-sm transition hover:-translate-y-1 duration-200 hover:border-primary/40 hover:shadow-sm md:grid-cols-[minmax(260px,0.85fr)_1fr_auto] md:items-center md:p-7"
            >
              <div className="flex aspect-[16/9] w-full sm:max-w-60 items-center justify-center rounded-md bg-white">
                <img src={facility.image} alt="" className="h-full w-full object-contain" />
              </div>

              <div className="min-w-0 grow">
                <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl lg:text-3xl">{facility.title}</h2>
                <p className="mt-2 text-base leading-7 text-muted-foreground sm:text-lg">{facility.line}</p>
              </div>

              <span className="hidden sm:flex size-12 items-center justify-center rounded-md border text-primary transition group-hover:bg-primary group-hover:text-primary-foreground duration-200">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
