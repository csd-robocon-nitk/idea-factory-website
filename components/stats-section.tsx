import { ArrowRight } from "lucide-react"


export default function StatsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore IDEA Factory @ NITK Surathkal</h2>
          <p className="text-xl text-muted-foreground">Discover the tools, spaces, and environments that fuel innovation</p>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-medium flex items-center gap-2 duration-150 cursor-pointer py-2 px-10 rounded-full"
          >
            Explore Facilities
            <ArrowRight size={25} className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
