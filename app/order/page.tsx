import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { equipment, getEquipment } from "@/lib/equipment"
import { ClipboardCheck } from "lucide-react"
import { placeOrder } from "./actions"

type OrderPageProps = {
  searchParams?: Promise<{
    equipment?: string
  }>
}

export default async function OrderPage({ searchParams }: OrderPageProps) {
  const resolvedSearchParams = await searchParams
  const selectedEquipment = getEquipment(resolvedSearchParams?.equipment || "") || equipment[0]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-3xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Order request</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">Request equipment usage</h1>
          <p className="mt-4 text-muted-foreground">
            Submit the details for review. You will receive a confirmation email with pending approval status.
          </p>
        </div>

        <form action={placeOrder} className="rounded-lg border bg-card p-6 shadow-sm">
          <input type="hidden" name="equipment" value={selectedEquipment.id} />

          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="equipment-display">Equipment</Label>
              <select
                id="equipment-display"
                disabled
                value={selectedEquipment.id}
                className="border-input bg-muted h-9 w-full rounded-md border px-3 text-sm text-muted-foreground shadow-xs"
              >
                <option value={selectedEquipment.id}>
                  {selectedEquipment.id} - {selectedEquipment.name}
                </option>
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="purpose">Purpose of your usage</Label>
              <Textarea
                id="purpose"
                name="purpose"
                placeholder="Briefly describe the project, part, or prototype."
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="estimatedPrintTime">Estimated print time</Label>
              <Input id="estimatedPrintTime" name="estimatedPrintTime" placeholder="Example: 4 hours" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="facultyInCharge">Faculty in charge</Label>
              <Input id="facultyInCharge" name="facultyInCharge" placeholder="Faculty name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="driveLink">Drive link of the part to be printed</Label>
              <Input id="driveLink" name="driveLink" type="url" placeholder="https://drive.google.com/..." required />
            </div>

            <Button type="submit" size="lg" className="mt-2 w-full sm:w-fit">
              <ClipboardCheck className="size-5" />
              Place order
            </Button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  )
}
