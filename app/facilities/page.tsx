import Header from "@/components/header"
import Footer from "@/components/footer"
import StructuredBrowserBack from "@/components/structured-browser-back"
import { ArrowRight, Boxes, Building2 } from "lucide-react"
import Link from "next/link"

const facilities = [
  {
    title: "Equipment",
    href: "/equipment",
    icon: Boxes,
    description:
      "3D printers, laser cutters, fabrication machines, and other bookable tools for prototypes and student projects.",
    items: "3D printers, laser cutters, scanners, CNC tools",
  },
  {
    title: "Infrastructure",
    href: "/infrastructure",
    icon: Building2,
    description:
      "Shared creation spaces and lab stations for workshops, electronics work, machining, and project reviews.",
    items: "Seminar hall, soldering station, machining station",
  },
]

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <StructuredBrowserBack href="/" />
      <Header />
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Facilities</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Explore Idea Factory resources</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the resource type you need, then place a request for the specific machine or space.
          </p>
        </div>

        <div className="grid gap-6">
          {facilities.map((facility) => {
            const Icon = facility.icon

            return (
              <Link
                key={facility.href}
                href={facility.href}
                className="group grid min-h-64 gap-6 rounded-lg border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:grid-cols-[1fr_auto] md:items-center md:p-10"
              >
                <div className="flex flex-col gap-5">
                  <span className="flex size-14 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="size-7" />
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold">{facility.title}</h2>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">{facility.description}</p>
                  </div>
                  <p className="text-sm font-medium text-foreground">{facility.items}</p>
                </div>
                <span className="flex size-12 items-center justify-center rounded-md border text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>
      <Footer />
    </main>
  )
}
