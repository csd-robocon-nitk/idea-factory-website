import Footer from "@/components/footer"
import Header from "@/components/header"

let faculty = [
    {
        image: "/images/team/B Ravi.jpeg",
        name: "Prof. B Ravi",
        designation: "Director, NITK Surathkal",
        linkedin: "https://www.linkedin.com/in/prof-b-ravi/",
    },
    {
        image: "/images/team/Uday Bhat.jpg",
        name: "Prof. Udaya Bhat K",
        designation: "Dean R&C",
        linkedin: "https://www.linkedin.com/in/udaya-bhat-k-55996a71/",
    },
    {
        image: "/images/team/PU.png",
        name: "Dr. Pruthviraj Umesh",
        designation: "PIC Transdisplinary (R&D)",
        linkedin: "https://www.linkedin.com/in/dr-pruthviraj-u/",
    },
]

let students = [
    {
        image: "/images/team/likith.jpeg",
        name: "Likith M",
        designation: "Building Information Modeling"
    },
    {
        image: "/images/team/hariharan.jpg",
        name: "Hariharan",
        designation: "Web Development"
    },
]

export default function TeamPage () {
    return (
        <main>
            <Header />
            <div className="min-h-screen max-w-4xl mx-auto mt-36 px-5">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Our Team</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-stretch mb-16">
                    {faculty.map(i => (
                        <div className="shadow-[0_0_2px_2px] shadow-gray-200 rounded-lg flex flex-col items-center py-10 px-5" key={i.name}>
                            <img src={i.image} alt="" className="h-32 w-32 rounded-full mb-5"/>
                            <h1 className="text-xl font-bold text-center">{i.name}</h1>
                            <h2 className="text-lg font-medium mb-5 text-center">{i.designation}</h2>
                            <a href={i.linkedin} target="_blank">
                                <img src="/linkedin_white.png" alt="" className="invert w-7 h-7 rounded" />
                            </a>
                        </div>
                    ))}
                </div>

                <h2 className="text-1xl md:text-2xl font-bold mb-5">Student Contributors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch mb-10">
                    {students.map(i => (
                        <div className="shadow-[0_0_2px_2px] shadow-gray-200 rounded-lg flex items-center py-5 px-5 gap-5" key={i.name}>
                            <img src={i.image} alt="" className="h-28 w-28 rounded-full"/>
                            <div>
                                <h1 className="text-lg font-bold">{i.name}</h1>
                                <h2 className="text-base font-medium mb-5">{i.designation}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}