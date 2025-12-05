import { Mail, Clock, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex flex-col md:flex-row justify-center md:w-1/2 md:shrink-0">
          <div className="space-y-4 border-white md:border-r md:pr-20 py-5">
            <div className="flex items-center gap-1">
              <img className="h-12" src="/nitk.png" alt="" />
              <span className="font-bold text-lg">IDEA Factory</span>
            </div>
            <p className="text-primary-foreground/80 text-sm font-semibold text-justify">Committed to excellence in design, fabrication, and interdisciplinary innovation. Empowering students to transform concepts into impactful technologies.</p>
          </div>

          
          <div className="space-y-4 md:pl-20 md:w-1/2 md:shrink-0 py-5">
            <ul className="space-y-3 text-base font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1.5 shrink-0" />
                4th Floor, CIDS, NITK <br />
                Surathkal, Mangalore <br />
                Karnataka - 575025
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 shrink-0" />
                <a href="mailto:info@nitk.edu.in" className="hover:text-primary-foreground/80 transition">
                  info@nitk.edu.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 shrink-0" />
                <a href="tel:+919972797225" className="hover:text-primary-foreground/80 transition">
                  +91 99727 97225
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
