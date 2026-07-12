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
    CheckCircle,
    Clock,
    Zap,
    ChevronRight,
} from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function MiniGrantsPage() {
    const [activeGrant, setActiveGrant] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("all")

    const grantExamples = [
        {
            title: "Accountable Adaptation Fellowship",
            // date: "November 18, 2024",
            description:
                "Background The Accountable Adaptation Initiative is launching a mini-grants programme. The programme is open to early to mid-career researchers from…",
            id: "accountable-adaptation",
            status: "completed",
        },
        {
            title: "Learning Together to Advance Evidence and Equity in Policymaking for achieving the SDGs (LEEPS)",
            // date: "August 8, 2024",
            description:
                "The Alliance for Evidence and Equity in Policy-making in Africa (AEEPA) is part of the Learning Together to Advance Evidence…",
            id: "leeps",
            status: "completed",
        },
        {
            title: "ARIN Governing SDGs Interactions Mini grants – Call for Applications- Readvertisement",
            // date: "September 30, 2024",
            description:
                "A. About the Project Numerous governments, businesses, and civil society organisations aim to contribute to achieving the 17 Sustainable Development…",
            id: "sdgs-interactions",
            status: "active",
        },

        {
            title: "Biodiversity Integration in Climate Adaptation and Mitigation Actions for Planet, People, and Human Health (BIOCAM4) Mini-grants",
            // date: "July 30, 2024",
            description:
                "CALL FOR MINIGRANTS: ADVANCING NATURE-BASED CLIMATE ACTIONS (NBCAS) IN AFRICA: A MINI-GRANT FOR LOCALLY- LED Evidence Generation AND POLICY INFLUENCE",
            id: "biocam",
            status: "active",
        },
        {
            title: "Climate Finance Fellowship",
            // date: "Coming Soon",
            description:
                "This fellowship aims to build capacity in climate finance mechanisms and support researchers in developing innovative financing solutions for climate adaptation and mitigation across Africa.",
            id: "climate-finance",
            status: "upcoming",
        },
        {
            title: "Artificial Intelligence For Climate Resilience",
            description:
                "Call for Mini-Grants: Leveraging Artificial Intelligence for Climate Resilience Solutions in Africa. Applications are open for researchers working at the intersection of AI and climate adaptation.",
            id: "ai-fellowship",
            status: "active",
        },
       
    ]

    const getStatusConfig = (status) => {
        switch (status) {
            case "completed":
                return {
                    label: "Completed",
                    icon: CheckCircle,
                    bgColor: "bg-slate-100",
                    textColor: "text-slate-600",
                    dotColor: "bg-slate-400",
                }
            case "active":
                return {
                    label: "Active",
                    icon: Zap,
                    bgColor: "bg-green-100",
                    textColor: "text-green-700",
                    dotColor: "bg-green-500",
                }
            case "upcoming":
                return {
                    label: "Upcoming",
                    icon: Clock,
                    bgColor: "bg-amber-100",
                    textColor: "text-amber-700",
                    dotColor: "bg-amber-500",
                }
            default:
                return {
                    label: "Unknown",
                    icon: Calendar,
                    bgColor: "bg-gray-100",
                    textColor: "text-gray-600",
                    dotColor: "bg-gray-400",
                }
        }
    }

    const handleGrantClick = (grantId) => {
        window.location.href = `/mini-grants/${grantId}`
    }

    const handleDocumentClick = () => {
        window.open(
            "https://www.arin-africa.org/wp-content/uploads/2024/05/GUIDEBOOK-ON-ARIN-FELLOWSHIP-MINI-GRANTS.pdf",
            "_blank",
        )
    }

    const categorizedGrants = {
        completed: grantExamples.filter((g) => g.status === "completed"),
        active: grantExamples.filter((g) => g.status === "active"),
        upcoming: grantExamples.filter((g) => g.status === "upcoming"),
    }

    const filteredGrants =
        selectedCategory === "all" ? grantExamples : grantExamples.filter((g) => g.status === selectedCategory)

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <div className="border-b border-slate-200 bg-white">
                    <div className="max-w-6xl mx-auto px-6 py-10">
                        <Button
                            variant="ghost"
                            className="mb-5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200"
                        >
                            ← Back to Home
                        </Button>

                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-slate-900">
                                ARIN Africa Fellowship Programs
                            </h1>

                            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                                Fostering systematic and coordinated co-generation of evidence within varied African contexts through
                                small grants and mentorship programs.
                            </p>

                            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                                <DollarSign className="w-4 h-4 text-slate-500" />
                                <div>
                                    <div className="text-xs text-slate-400">Grant Range</div>
                                    <div className="text-base font-semibold text-slate-800">$2,000 - $10,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 py-10">
                    {/* ARIN Mini Grants Section */}
                    <section className="mb-24">
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Award className="w-6 h-6 text-blue-600" />
                                <h2 className="text-3xl font-bold text-slate-900">ARIN Mini Grants</h2>
                            </div>
                            <p className="text-slate-600 text-lg">
                                Explore our current and upcoming funding opportunities for African researchers
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-6">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all ${selectedCategory === "all"
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                All ({grantExamples.length})
                            </button>
                            <button
                                onClick={() => setSelectedCategory("active")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedCategory === "active"
                                    ? "bg-green-600 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                Active ({categorizedGrants.active.length})
                            </button>
                            <button
                                onClick={() => setSelectedCategory("upcoming")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedCategory === "upcoming"
                                    ? "bg-amber-500 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                <Clock className="w-4 h-4" />
                                Upcoming ({categorizedGrants.upcoming.length})
                            </button>
                            <button
                                onClick={() => setSelectedCategory("completed")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedCategory === "completed"
                                    ? "bg-slate-600 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                <CheckCircle className="w-4 h-4" />
                                Completed ({categorizedGrants.completed.length})
                            </button>
                        </div>

                        {/* Grants Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filteredGrants.map((grant, index) => {
                                const statusConfig = getStatusConfig(grant.status)

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleGrantClick(grant.id)}
                                        className="group cursor-pointer bg-white border-2 border-slate-200 rounded-xl hover:border-slate-900 hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden"
                                    >
                                        {/* Status bar at top */}
                                        <div className={`h-1.5 w-full ${statusConfig.dotColor}`} />

                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="mb-4">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${statusConfig.bgColor} ${statusConfig.textColor}`}
                                                >
                                                    <div className={`w-1.5 h-1.5 rounded-full ${statusConfig.dotColor}`}></div>
                                                    {statusConfig.label}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-slate-700 transition-colors flex-1">
                                                {grant.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                                                {grant.description}
                                            </p>

                                            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors mt-auto pt-4 border-t border-slate-100">
                                                <span>View details</span>
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    {/* Background Section */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">Background and Rationale</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
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
                    </section>

                    {/* Purpose and Objectives Grid */}
                    <section className="mb-24">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Purpose */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="w-6 h-6 text-purple-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Purpose of the Mini-Grants</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed">
                                    ARIN is committed to fostering systematic and coordinated co-generation of evidence within varied
                                    African contexts. The ARIN Small Grant and Mentorship Scheme achieves this by providing small grants
                                    and facilitating mentorship among its beneficiaries. This program aims to guide researchers in
                                    collecting robust data and developing high-quality case studies. Ultimately, the goal is for these
                                    research outputs to be included in special issues or book volumes launched at the biennial ARIN Africa
                                    Research-Policy Fellows Assembly held towards the end of the year such as the one scheduled for
                                    November 2024 in Nairobi, Kenya.
                                </p>
                            </div>

                            {/* Objectives */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Lightbulb className="w-6 h-6 text-amber-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Specific Objectives</h2>
                                </div>
                                <div className="space-y-4">
                                    <div className="pl-4 border-l-2 border-blue-500">
                                        <h3 className="font-semibold text-slate-900 mb-1">
                                            Strengthen Evidence-Based Policymaking in Africa
                                        </h3>
                                        <p className="text-slate-600 text-sm">
                                            Improve understanding of the science-policy interface and develop national expertise in
                                            evidence-based policy.
                                        </p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-blue-500">
                                        <h3 className="font-semibold text-slate-900 mb-1">Cultivate a Community of Evidence Leaders</h3>
                                        <p className="text-slate-600 text-sm">
                                            Build a cohort of African researchers and policymakers who champion evidence-based approaches.
                                        </p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-purple-500">
                                        <h3 className="font-semibold text-slate-900 mb-1">Enhance African Knowledge Production</h3>
                                        <p className="text-slate-600 text-sm">
                                            Generate African-led knowledge products that contribute to knowledge leadership and inform
                                            development agendas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Value and Activities */}
                    <section className="mb-24">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Value */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <DollarSign className="w-6 h-6 text-orange-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Value of the Grants</h2>
                                </div>
                                <div className="text-center py-8">
                                    <div className="text-5xl font-bold text-orange-600 mb-2">$2,000 - $10,000</div>
                                    <p className="text-slate-700">
                                        ARIN provides mini-grants of between USD2000 and USD5000 to the Fellows.
                                    </p>
                                </div>
                            </div>

                            {/* Activities */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Activities</h2>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                        <h3 className="font-semibold text-slate-900 mb-2">Capacity Building</h3>
                                        <p className="text-slate-700 text-sm">
                                            Regular webinars and workshops equipping young African researchers with academic publishing
                                            skills through the Research Publishing Academy.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h3 className="font-semibold text-slate-900 mb-2">Publication Opportunities</h3>
                                        <p className="text-slate-700 text-sm">
                                            Co-publishing book series with dedicated editorial boards to increase visibility and impact of
                                            African research.
                                        </p>
                                    </div>
                                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                                        <h3 className="font-semibold text-slate-900 mb-2">Researcher Engagement</h3>
                                        <p className="text-slate-700 text-sm">
                                            Co-branded marketing strategies and interactive sessions to foster knowledge sharing and
                                            collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Support Section */}
                    <section className="mb-24">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-slate-900" />
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Support ARIN&apos;s Research-Policy Fellowship Program
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700">
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
                                <div className="bg-white border border-blue-200 rounded-lg p-6 mt-6">
                                    <p className="text-slate-700">
                                        For more information about ARIN&apos;s mini grants see this{" "}
                                        <button
                                            onClick={handleDocumentClick}
                                            className="font-semibold text-blue-600 hover:text-blue-700 underline inline-flex items-center gap-1 transition-colors"
                                        >
                                            Document
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <ArinFellowsFooter />
        </>
    )
}