import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import { redirect } from "next/navigation"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-screen flex items-center pt-28 md:pt-10 pb-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">IDEA Factory @ NITK Surathkal</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
                <span className="text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-primary to-secondary">IDEA</span>
                <br />
                Invention Design Engineering Application
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                A collaborative space where young innovators transform cutting-edge research into impactful solutions for society and the nation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 duration-150 cursor-pointer"
              >
                Explore Facilities
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 hover:text-black bg-transparent duration-150 cursor-pointer" onClick={() => redirect("/team")}>
                Meet our Team
              </Button>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-primary/10">
            <img
              src="/image_001.png"
              alt="Idea Factory facility with makers using tools"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
