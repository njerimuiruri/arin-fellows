"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Users, Calendar, MapPin, DollarSign, BookOpen, ArrowRight, Globe, Award } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function SummerSchoolPage() {
    const [activeSection, setActiveSection] = useState(0)

    const outputs = [
        {
            title: "Summer School program",
            description: "Comprehensive program overview and schedule",
            icon: <Calendar className="w-6 h-6" />,
            externalUrl: "https://www.arin-africa.org/wp-content/uploads/2021/08/ARIN-ASH-Summer-School-2021-AGENDA.pdf",
        },
        {
            title: "Facilitators Padlet",
            description: "Interactive collaboration platform for facilitators",
            icon: <Users className="w-6 h-6" />,
            externalUrl: "https://padlet.com/jonyango3/arin-ash-summer-school-ew9iatbpnx2q4xot",
        },
        {
            title: "Participants Portfolio",
            description: "Showcase of participant projects and achievements",
            icon: <BookOpen className="w-6 h-6" />,
            externalUrl: "https://www.arin-africa.org/wp-content/uploads/2021/08/Portfolio-of-Summer-School-Participants.pdf",
        },
    ]

    const deliveryMethods = [
        "Roundtable discussions and lectures",
        "Joint lectures every morning delivered by different international scholars",
        "Case study course sessions delivered by different international scholars",
        "Workshop groups in the afternoon to discuss the research projects contributing to Decoloniality of Sustainability Research of each participant addressed to small groups of 10 to 15 participants",
    ]

    const handleLinkClick = (externalUrl) => {
        window.open(externalUrl, "_blank")
    }

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
                <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-teal-400/20"></div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
                        </div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <Button
                                variant="ghost"
                                className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2"
                            >
                                ← Back to Home
                            </Button>

                            <div className="mb-8">
                                <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        Decolonizing Sustainability
                                    </span>
                                    <span className="block text-4xl lg:text-5xl text-cyan-300 mt-2">Research Summer School</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12">
                                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                                    Exploring methods for informing policy decisions and wider political debates to enable learning,
                                    enrich knowledge, enhance practice and nurture more emancipatory outcomes in the Global South.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <MapPin className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">Kenya</div>
                                        <div className="text-sm text-white/70">Location</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <DollarSign className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">$500</div>
                                        <div className="text-sm text-white/70">Per Participant</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Globe className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">Global South</div>
                                        <div className="text-sm text-white/70">Focus</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="mb-20">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                                <FileText className="w-6 h-6 text-white" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-800">Background</h2>
                                        </div>
                                        <div className="text-gray-700 leading-relaxed space-y-4">
                                            <p>
                                                In the Global South, &apos;coloniality&apos; has long been associated with political rule over
                                                subordinated countries <sup className="text-cyan-600 font-semibold">1</sup>. Struggles for
                                                &apos;decoloniality&apos; have evolved from the undoing of colonial rule, to the even more fundamental
                                                challenge of freeing knowledge, practice, and culture from deeper worldwide concentrations of
                                                incumbent power <sup className="text-cyan-600 font-semibold">2</sup>. In keeping with the more
                                                expansive ambitions of the Sustainable Development Goals, a decolonisation framework thus
                                                encompasses some of the most profound and pervasive critiques of globalising structures and
                                                their conditioning effects in every setting <sup className="text-cyan-600 font-semibold">3</sup>
                                                .
                                            </p>
                                            <p>
                                                Accordingly, the neglected imperative to &apos;decolonise methodologies&apos; in research and policy
                                                appraisal, embodies some of the most important and intractable challenges in this sustainability
                                                – offering crucial opportunities for thinking, knowing, and doing alike{" "}
                                                <sup className="text-cyan-600 font-semibold">4</sup>. The summer school will allow participants
                                                therefore to explore how methods for informing policy decisions and wider political debates can
                                                enable learning, enrich knowledge, enhance practice and nurture more emancipatory outcomes in
                                                the Global South.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200/50">
                                        <Award className="w-10 h-10 text-cyan-600 mb-3" />
                                        <h3 className="font-semibold text-gray-800 mb-2">Acclaimed Scholars</h3>
                                        <p className="text-sm text-gray-600">
                                            Learn from international experts in sustainability research and decoloniality
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                                        <Users className="w-10 h-10 text-blue-600 mb-3" />
                                        <h3 className="font-semibold text-gray-800 mb-2">Collaborative Learning</h3>
                                        <p className="text-sm text-gray-600">
                                            Small group workshops with 10-15 participants for personalized attention
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-20">
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">About the summer school</h2>
                                </div>
                                <div className="text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Drawing from the lessons on the{" "}
                                        <em className="text-cyan-600 font-medium">Decoloniality of Methods</em> webinar series (practices),
                                        and book project (theory), the summer school will provide a practical opportunity for participants
                                        to explore how methods have been (can be) used to inform, impact and transform policies, societies
                                        and economies. At the end of the training sessions, the participants will participate in the STEPS
                                        methods year workshop, as part of their post-summer school alumni engagement.
                                    </p>
                                    <p>
                                        The summer school takes into consideration a learner centered approach, allowing for theory,
                                        practice, and practical approaches. The summer school will be held in Kenya, however, due to the
                                        COVID-19 Pandemic restrictions, we are exploring the possibilities of online participation in some
                                        of the activities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Target participants</h2>
                                </div>
                                <div className="text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        The participants in the summer school will be drawn from multiple stakeholders and sectors, and will
                                        cut across various actor groups of interest to decolonization of methods, and valorization of next
                                        generation of practical methods.
                                    </p>
                                    <p>
                                        Specifically the summer school targets Post graduate students and early career researchers, policy
                                        makers, and practitioners contributing to sustainability.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                                        <DollarSign className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">General Summer School Fees</h2>
                                </div>
                                <div className="text-center mb-6">
                                    <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6 border border-green-200/50">
                                        <div className="text-5xl font-bold text-green-600 mb-2">$500</div>
                                        <div className="text-gray-600 text-lg">Per Participant</div>
                                    </div>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>
                                        Summer school fee will be $500 per participant. Applicants are required to indicate whether they are
                                        government/institution/organization sponsored, scholarship or self-sponsored or any other.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-20">
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Methods of delivery</h2>
                                </div>
                                <div className="mb-8">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The school will bring together acclaimed scholars of the field of sustainability research,
                                        decoloniality, and methods, aiming to offer each participant the opportunity to follow:
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {deliveryMethods.map((method, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed">{method}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mb-16">
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Outputs</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {outputs.map((output, index) => (
                                        <div
                                            key={index}
                                            className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                                            onClick={() => handleLinkClick(output.externalUrl)}
                                        >
                                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200/50 hover:border-cyan-300/50 hover:shadow-2xl transition-all duration-500 h-full">
                                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl text-white mb-6 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500">
                                                    {output.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                                                    {output.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6 leading-relaxed">{output.description}</p>
                                                <div className="flex items-center text-cyan-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                                                    <span className="mr-3">Explore</span>
                                                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50">
                                    <p className="text-cyan-700 text-center text-lg">
                                        <strong>Interactive Outputs:</strong> Click on any card above to explore the detailed resources and
                                        materials.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}