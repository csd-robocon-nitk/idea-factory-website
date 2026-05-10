import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { equipment, getEquipment } from "@/lib/equipment"
import { ArrowLeft, ClipboardList } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

type EquipmentDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return equipment.map((item) => ({ id: item.id }))
}

export default async function EquipmentDetailPage({ params }: EquipmentDetailPageProps) {
  const { id } = await params
  const item = getEquipment(id)

  if (!item) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/equipment">
            <ArrowLeft className="size-4" />
            Back to equipment
          </Link>
        </Button>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
            <img src={item.image} alt={item.name} className="aspect-[16/10] w-full object-contain" />
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{item.category}</Badge>
              <span className="text-sm font-semibold text-muted-foreground">Equipment ID {item.id}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{item.name}</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{item.description}</p>

            <Button asChild size="lg" className="mt-8">
              <Link href={`/order?equipment=${item.id}`}>
                <ClipboardList className="size-5" />
                Put in an order
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Specifications</h2>
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            {item.specifications.map((spec) => (
              <div key={spec.label} className="rounded-md border bg-background p-4">
                <dt className="text-sm font-medium text-muted-foreground">{spec.label}</dt>
                <dd className="mt-1 text-base font-semibold text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <Footer />
    </main>
  )
}
