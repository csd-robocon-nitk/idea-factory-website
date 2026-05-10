import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

type OrderSuccessPageProps = {
  searchParams?: Promise<{
    order?: string
  }>
}

export default async function OrderSuccessPage({ searchParams }: OrderSuccessPageProps) {
  const resolvedSearchParams = await searchParams
  const orderId = resolvedSearchParams?.order || "XYZ"

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-4 py-36 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex size-16 items-center justify-center rounded-md bg-green-100 text-green-600">
          <CheckCircle2 className="size-9" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground">Order #{orderId} placed successfully</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your request has been submitted and is pending approval.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/equipment">Back to equipment</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/facilities">Facilities</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
