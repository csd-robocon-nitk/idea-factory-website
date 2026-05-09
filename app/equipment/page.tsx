import Header from "@/components/header"
import Footer from "@/components/footer"
import StructuredBrowserBack from "@/components/structured-browser-back"
import { Badge } from "@/components/ui/badge"
import { equipment } from "@/lib/equipment"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <StructuredBrowserBack href="/facilities" />
      <Header />
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Equipment</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Bookable machines</h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Browse available fabrication equipment and open a machine page to see specifications before placing an order.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {equipment.map((item) => (
            <Link
              key={item.id}
              href={`/equipment/${item.id}`}
              className="group flex min-h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">ID {item.id}</p>
                    <h2 className="mt-1 text-xl font-semibold leading-tight">{item.name}</h2>
                  </div>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <p className="flex-1 text-sm leading-6 text-muted-foreground">{item.shortDescription}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View specifications <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
