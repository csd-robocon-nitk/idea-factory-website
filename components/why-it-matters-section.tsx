import { Rocket, TrendingUp } from "lucide-react"

export default function WhyItMattersSection() {
  return (
    <section id="why-it-matters" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">Why Idea Factory Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Innovation begins with curiosity. Whether it's building your first robot, validating a research
              hypothesis, or fabricating a proof-of-concept for a startup—Idea Factory acts as the launchpad. It reduces
              barriers, encourages experimentation, and provides the resources needed to turn imagination into impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket size={24} className="text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Democratizes Innovation</h4>
                <p className="text-muted-foreground">
                  Makes cutting-edge tools accessible to all students, regardless of major or experience level.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} className="text-secondary" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Accelerates Learning</h4>
                <p className="text-muted-foreground">
                  Hands-on experience with real tools translates learning into tangible skills and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
