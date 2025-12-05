"use client"

import { Zap, Wrench, Users, Cpu, Lightbulb, Cog } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Cutting-edge Fabrication Tools",
    description: "Laser cutters, 3D printers, CNC machines, and more for rapid prototyping",
  },
  {
    icon: Users,
    title: "Cross-disciplinary Collaboration",
    description: "Connect with students from all departments and work together on innovative projects",
  },
  {
    icon: Lightbulb,
    title: "Open, Student-centric Environment",
    description: "A welcoming space designed for students to explore, experiment, and create",
  },
  {
    icon: Cpu,
    title: "Electronics & Embedded Systems Lab",
    description: "Soldering stations, PCB prototyping tools, microcontrollers, and sensor kits",
  },
  {
    icon: Wrench,
    title: "Hands-on Support & Mentorship",
    description: "Expert guidance from faculty and industry partners to bring your ideas to life",
  },
  {
    icon: Cog,
    title: "Rapid Prototyping Support",
    description: "From concept to reality—iterate quickly with our comprehensive maker resources",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          <div className="space-y-4 mb-16 min-w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">What is Idea Factory?</h2>
            <p className="text-lg text-justify text-muted-foreground max-w-2xl">
              IDEA factory is a place where young adults can work and interact with other bright minds to generate innovative solutions to solve real-life problems and to make this world a better place for all to live. Young minds will sit together to develop prototypes of the solutions they dream. IDEA factory should facilitate transformation of the cutting edge research done in the research labs to innovation and startups, which are expected to lead to successful ventures in near future.
            </p>
          </div>
          <img className="w-full rounded-lg" src="/image_002.png" alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-border/50 bg-card hover:border-primary/20"
              >
                <div className="space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={30} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
