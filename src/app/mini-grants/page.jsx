"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    FileText,
    Users,
    Calendar,
    DollarSign,
    BookOpen,
    ArrowRight,
    Award,
    Target,
    Lightbulb,
    ExternalLink,
} from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function MiniGrantsPage() {
    const [activeGrant, setActiveGrant] = useState(null)

    const grantExamples = [
        {
            title: "Accountable Adaptation Fellowship",
            date: "November 18, 2024",
            description:
                "Background The Accountable Adaptation Initiative is launching a mini-grants programme. The programme is open to early to mid-career researchers from…",
            id: "accountable-adaptation",
        },
        {
            title: "ARIN Governing SDGs Interactions Mini grants – Call for Applications- Readvertisement",
            date: "September 30, 2024",
            description:
                "A. About the Project Numerous governments, businesses, and civil society organisations aim to contribute to achieving the 17 Sustainable Development…",
            id: "sdgs-interactions",
        },
        {
            title: "Learning Together to Advance Evidence and Equity in Policymaking for achieving the SDGs (LEEPS)",
            date: "August 8, 2024",
            description:
                "The Alliance for Evidence and Equity in Policy-making in Africa (AEEPA) is part of the Learning Together to Advance Evidence…",
            id: "leeps",
        },
        {
            title: "Leveraging Mathematical Sciences for Climate Resilience Solutions (Math4CCR): Mini-grant",
            date: "July 30, 2024",
            description:
                "The role of mathematical modelling and Artificial Intelligence (AI) is becoming increasingly crucial in strengthening climate information systems and predictions…",
            id: "math4ccr",
        },
        {
            title: "BioCAM Mini-grants",
            date: "July 30, 2024",
            description:
                "The relationship between climate change and biodiversity loss is profound. Climate change accelerates biodiversity decline: Rapid climate shifts challenge species...",
            id: "biocam",
        },
    ]

    const handleGrantClick = (grantId) => {
        window.location.href = `/mini-grants/${grantId}`
    }

    const handleDocumentClick = () => {
        window.open(
            "https://www.arin-africa.org/wp-content/uploads/2024/05/GUIDEBOOK-ON-ARIN-FELLOWSHIP-MINI-GRANTS.pdf",
            "_blank",
        )
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
                                        ARIN Africa
                                    </span>
                                    <span className="block text-4xl lg:text-5xl text-cyan-300 mt-2">Science-Policy Mini-grants</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12">
                                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                                    Fostering systematic and coordinated co-generation of evidence within varied African contexts through
                                    small grants and mentorship programs.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <DollarSign className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">$2,000 - $5,000</div>
                                        <div className="text-sm text-white/70">Grant Range</div>
                                    </div>
                                </div>
                                {/* <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Users className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">Mentorship</div>
                                        <div className="text-sm text-white/70">Included</div>
                                    </div>
                                </div> */}
                                {/* <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Globe className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">Africa-wide</div>
                                        <div className="text-sm text-white/70">Coverage</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Background and rationale</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    There is a broad consensus that an evidence-informed development agenda is essential for achieving
                                    long-term, inclusive development growth in Africa. This is reflected in both Agenda 2063 and the
                                    Science, Technology and Innovation Strategy for Africa (STISA) 2024. These frameworks call on African
                                    countries to significantly increase their investment in research and development (R&D) by attaining at
                                    least 1% of their gross domestic product (GDP). This investment is crucial for building Africa&apos;s
                                    technical expertise, improving research infrastructure, fostering innovation and entrepreneurship, and
                                    creating a policy environment that propels &ldquo;Africa&apos;s transition to an innovation-led and
                                    evidence-informed knowledge-based economy&rdquo;.
                                </p>
                                <p>
                                    Furthermore, a critical need exists for both evidence-based policymaking and the effective sharing of
                                    this evidence across diverse African contexts, overcoming the bilingual divide that can be a barrier.
                                    In response to this, recent decades have witnessed a surge in research and policy activities across
                                    various sectors, particularly in health, energy, agriculture, science and technology, and more
                                    recently, climate change. However, research efforts on the continent remain fragmented, with limited
                                    capacity retention, opportunities for in-continent learning, and inadequate networking among
                                    researchers, policymakers, and practitioners. Additionally, challenges persist in publishing research
                                    and developing strong scientific leadership, as evidenced by the limited number of African-led
                                    research outputs. Compounding these issues is that most African researchers struggle to secure
                                    sufficient domestic and international funding to generate the empirically grounded evidence necessary
                                    for practical policy decisions.
                                </p>
                                <p>
                                    It is within this context that ARIN established the ARIN Africa Evidence-Informed Policy Fellowship
                                    program. This program brings together fellows to collaborate on generating evidence and sharing
                                    lessons learned across the continent. However, even fellows face challenges in securing opportunities
                                    and funding to pursue demand-driven empirical research.
                                </p>
                                <p>
                                    In recognition of the persistent funding constraints faced by many talented African scholars with
                                    significant research potential, ARIN has established the ARIN Mini-grant and Mentorship Scheme. This
                                    initiative directly addresses the dearth of opportunities and budgetary limitations hindering in-depth
                                    contextual analyses across diverse African regions and countries.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Purpose of the Mini-Grants</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    ARIN is committed to fostering systematic and coordinated co-generation of evidence within varied
                                    African contexts. The ARIN Small Grant and Mentorship Scheme achieves this by providing small grants
                                    and facilitating mentorship among its beneficiaries. This program aims to guide researchers in
                                    collecting robust data and developing high-quality case studies. Ultimately, the goal is for these
                                    research outputs to be included in special issues or book volumes launched at the biennial ARIN Africa
                                    Research-Policy Fellows Assembly held towards the end of the year such as the one scheduled for
                                    November 2024 in Nairobi, Kenya.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Lightbulb className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Specific Objectives</h2>
                            </div>
                            <div className="space-y-6">
                                <div className="border-l-4 border-green-400 pl-6">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        To strengthen Evidence-Based Policymaking in Africa:
                                    </h3>
                                    <p className="text-gray-700">
                                        The mini-grants seek to focus on activities that improve the understanding of the science-policy
                                        interface, develop national expertise in evidence-based policy, and identify gaps in incorporating
                                        evidence into decision-making processes.
                                    </p>
                                </div>
                                <div className="border-l-4 border-blue-400 pl-6">
                                    <h3 className="font-semibold text-gray-800 mb-2">To cultivate a Community of Evidence Leaders:</h3>
                                    <p className="text-gray-700">
                                        Through the mini-grants, ARIN aims to build a cohort of African researchers and policymakers who
                                        champion evidence-based approaches and possess the skills to identify evidence needs and promote its
                                        utilization across the continent.
                                    </p>
                                </div>
                                <div className="border-l-4 border-purple-400 pl-6">
                                    <h3 className="font-semibold text-gray-800 mb-2">To enhance African Knowledge Production:</h3>
                                    <p className="text-gray-700">
                                        Through the mini-grants, ARIN emphasizes the program&apos;s goal of generating African-led knowledge
                                        products like book volumes and special issues that contribute to knowledge leadership and inform
                                        development agendas aligned with Africa&apos;s strategic frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Value and Activities */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                                    <DollarSign className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Value of the Grants</h2>
                            </div>
                            <div className="text-center mb-6">
                                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 border border-orange-200/50">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">$2,000 - $5,000</div>
                                    <div className="text-gray-600 text-lg">
                                        ARIN provides mini-grants of between USD2000 and USD5000 to the Fellows.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Activities of the mini grants</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200/50">
                                    <h3 className="font-semibold text-gray-800 mb-2">Capacity Building:</h3>
                                    <p className="text-gray-700 text-sm">
                                        ARIN and Taylor & Francis will co-host regular capacity-building webinars and workshops, equipping
                                        young African researchers with the necessary skills to navigate the academic publishing landscape.
                                        This includes the launch of a Research Publishing Academy, modelled after Taylor & Francis&apos;
                                        successful program in South Asia.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200/50">
                                    <h3 className="font-semibold text-gray-800 mb-2">Publication Opportunities:</h3>
                                    <p className="text-gray-700 text-sm">
                                        The partnership will explore avenues to increase the visibility and impact of African research. This
                                        includes co-publishing book series with dedicated editorial boards.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-4 border border-teal-200/50">
                                    <h3 className="font-semibold text-gray-800 mb-2">Researcher Engagement:</h3>
                                    <p className="text-gray-700 text-sm">
                                        The joint effort will prioritize continuous engagement with researchers. ARIN and Taylor & Francis
                                        will develop a roadmap for the next six months, about co-branded marketing strategies and
                                        interactive sessions to foster knowledge sharing and collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Support ARIN&apos;s Research-Policy Fellowship Program
                                </h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    Various funding sources, including dedicated grant funding, private sector investment, and
                                    philanthropic contributions support the ARIN mini-grant program. We are very grateful to our donors
                                    and partners who have been supporting us.
                                </p>
                                <p>
                                    To adequately and effectively address the funding challenges faced by early career researchers in
                                    Africa, ARIN aims to have a mini-grants portfolio of at least USD 5,000,000. Therefore, to contribute
                                    financially to the ARIN Research-Policy Fellowship Program, please contact Amon Mtunji, ARIN&apos;s
                                    Finance Manager, at A.mtunji@arin-africa.org.
                                </p>
                                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200/50">
                                    <p className="text-gray-700">
                                        For more information about ARIN&apos;s mini grants see this{" "}
                                        <button
                                            onClick={handleDocumentClick}
                                            className="font-semibold text-cyan-600 hover:text-cyan-700 underline inline-flex items-center gap-1 transition-colors duration-200"
                                        >
                                            Document
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ARIN Mini Grants Examples */}
                    <div className="mb-16">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">ARIN Mini Grants</h2>
                            </div>
                            <div className="space-y-6">
                                {grantExamples.map((grant, index) => (
                                    <div
                                        key={index}
                                        className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                                        onClick={() => handleGrantClick(grant.id)}
                                    >
                                        <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 border border-gray-200/50 hover:border-emerald-300/50 hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-start justify-between mb-4">
                                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 flex-1 pr-4">
                                                    {grant.title}
                                                </h3>
                                                <div className="flex items-center text-gray-500 text-sm">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    {grant.date}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mb-4 leading-relaxed">{grant.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300">
                                                    <span className="mr-3">read more</span>
                                                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ArinFellowsFooter />
        </>
    )
}
