import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Target, Users, Award, Calculator, TrendingUp, BookOpen } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"

export default function Math4CCRMiniGrants() {
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

                    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <Link href="/mini-grants" className="w-full sm:w-auto">
                                <Button
                                    variant="ghost"
                                    className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Mini-grants
                                </Button>
                            </Link>

                            <div className="mb-8">
                                <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        Math4CCR
                                    </span>
                                    <span className="block text-4xl lg:text-5xl text-cyan-300 mt-2">Mini-grants</span>
                                </h1>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 mb-12">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Calendar className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">July 30, 2024</div>
                                        <div className="text-sm text-white/70">Posted</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Calculator className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Mathematical AI for Climate Resilience</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    The role of mathematical modelling and Artificial Intelligence (AI) is becoming increasingly crucial
                                    in strengthening climate information systems and predictions for resilience planning. This
                                    convergence, known as mathematical AI, offers the potential to generate comprehensive scenarios on
                                    climate risk, vulnerability patterns, and greenhouse gas emissions across various sectors. By
                                    analysing vast volumes of weather and climate data, mathematical AI leads to more integrated and
                                    accurate predictions of climate change, ultimately guiding future actions. However, a major challenge
                                    hinders progress: the lack of adequate skills to deploy and interpret AI/mathematics in climate
                                    modelling for resilience planning and resource allocation across contexts. This gap stems primarily
                                    from two factors: limited training opportunities on AI-related Science, Technology, Engineering, and
                                    Mathematics (STEM) subjects within Africa, and a persistent gender disparity within the AI field,
                                    reflected in the low number of women in academia and the AI workforce. This project, titled
                                    Mathematical Sciences for Climate Resilience Solutions in Africa (Math4CCR), seeks to leverage the
                                    power of mathematical AI. It aims to build a strong foundation of mathematical AI skills within
                                    academia and policy spaces. By strengthening and institutionalizing action-oriented capacity, Math4CCR
                                    will empower early-career researchers and policymakers to address climate challenges.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Four-Phase Approach</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    The proposed project will be achieved through four phases. The first phase, scoping, will involve a
                                    desk review of existing Mathematical AI tools, frameworks, and models, alongside a capacity gap
                                    assessment. The second phase, training, will focus on capacity development through developed
                                    e-learning modules, fellowship programs, mini-grants, and internship opportunities. The third phase,
                                    institutionalization, will involve developing a regional master&apos;s curriculum and fostering
                                    engagement through policy labs. Finally, the fourth phase, community building, will focus on outreach
                                    and engagement through sensitization webinars, side events, and annual conferences. By project
                                    completion, we anticipate a significant enhancement in the utility of mathematical sciences for
                                    climate change planning and response, alongside a reduction in the gender gap within these fields.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Building Capacity &amp; Networks</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    In response to these identified gaps, we propose the Mathematical Sciences for Climate Resilience
                                    Solutions in Africa (Math4CCR) project. This project aims to build a strong foundation of mathematical
                                    AI skills within academia and policy spaces. Math4CCR will achieve this by strengthening and
                                    institutionalizing action-oriented capacity among early career researchers and policymakers, while
                                    also advancing women&apos;s participation in artificial intelligence for climate action.
                                </p>
                                <p>
                                    The project will provide targeted training and fellowships based on identified needs. It will leverage
                                    case studies and mini-grants to build evidence on best practices, demonstrating where M-AI has been or
                                    can be scaled up to catalyse climate action and resilience. Additionally, Math4CCR will establish and
                                    sustain a support network for M-AI experts, fostering continuous learning and capacity strengthening
                                    for climate action across academia, government, and industry.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Project Objectives</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    To strengthen the capacities of early career researchers to apply mathematical Sciences and AI for
                                    climate Action;
                                </p>
                                <p>
                                    To foster Institutionalization of Mathematical Sciences and AI skills and expertise for climate
                                    Action; and
                                </p>
                                <p>
                                    To cultivate a cohort of AI specialists/champions proficient in applying mathematical sciences and AI
                                    to address climate change.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">About the Math4CCR Mini-grants</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    This project will offer ten (10) mini-research grants of up to USD 2,500 per project to the Math4CCR
                                    champions to conduct innovative case studies in different African contexts. The mathematical AI
                                    champions will be sponsored to present the findings of these case studies at international or global
                                    conferences focused on mathematics and climate change. Additionally, they will participate in climate
                                    science panels and pre-events organized by global gatherings such as the Africa Climate Change Week,
                                    COP29, promoting thought leadership in climate science. The findings and best practices from these
                                    case studies will be compiled into a book or special issue, which will be launched at a high-level
                                    event.
                                </p>

                                <p className="mb-8">The call for applications for the Math4CCR mini-grants is coming soon.</p>

                                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-8 border-2 border-cyan-300 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Opening Soon</h3>
                                    <p className="text-gray-700 mb-6 text-lg">
                                        Stay tuned for the call for applications for Math4CCR mini-grants
                                    </p>
                                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-2 shadow-lg">
                                        <BookOpen className="w-5 h-5" />
                                        Applications Coming Soon
                                    </div>
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
