import Header from "@/components/header"
import Footer from "@/components/footer"
import StructuredBrowserBack from "@/components/structured-browser-back"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"
import Link from "next/link"

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-background">
      <StructuredBrowserBack href="/facilities" />
      <Header />
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-36 sm:px-6 lg:px-8">
        <div className="flex size-16 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Building2 className="size-9" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground">Infrastructure</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Page under development.
        </p>
        <Button asChild className="mt-8 w-fit">
          <Link href="/facilities">Back to facilities</Link>
        </Button>
      </section>
      <Footer />
    </main>
  )
}
