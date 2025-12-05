import { Card } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="p-8 border-border/50 bg-card">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target size={28} className="text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To cultivate a culture of innovation by enabling every student—regardless of discipline—to create,
                  prototype, and iterate using world-class tools and collaborative spaces.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-border/50 bg-card">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye size={28} className="text-secondary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading campus innovation hub that transforms ideas into real-world solutions, fostering
                  creativity, entrepreneurship, and impactful engineering.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
