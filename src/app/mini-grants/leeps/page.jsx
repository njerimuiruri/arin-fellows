import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Users, Target, Search, Award, BookOpen, ExternalLink } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"

export default function LeepsMiniGrants() {
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
                                    className="mb-6 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Mini-grants
                                </Button>
                            </Link>

                            <div className="mb-6">
                                <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
                                        LEEPS
                                    </span>
                                    <span className="block text-3xl lg:text-4xl text-indigo-300 mt-2">Mini-grants</span>
                                </h1>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 mb-8">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Calendar className="w-6 h-6 text-indigo-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">August 8, 2024</div>
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
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Learning Together to Advance Evidence and Equity in Policymaking for achieving the SDGs (LEEPS)
                                </h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    The Alliance for Evidence and Equity in Policy-making in Africa (AEEPA) is part of the Learning
                                    Together to Advance Evidence and Equity in Policy-making for Achieving SDGs (LEEPS) partnership
                                    coordinated by R4D and funded by IDRC, Hewlett Foundation and Bosch Foundation. AEEPA is led by the
                                    African Institute for Development Policy (AFIDEP) in collaboration with the Africa Research and Impact
                                    Network (ARIN), the African Institute for Health Policies and Health Systems (AIHPHS) in Nigeria and
                                    the Makerere University School of Gender and Women Studies (MakSWGS) in Uganda.
                                </p>

                                <p>
                                    AEEPA supports African countries in regaining their momentum toward achieving the SDGs and leaving no
                                    one behind by championing and enabling the consistent and systemic use of the best available data,
                                    research, and equity analyses in policy and programme decisions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Evidence Informed Policy-making in Africa</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    Evidence Informed Policy-making (EIP) is critical in Africa&apos;s pursuit of sustainable development.
                                    Evidence and data help to inform appropriate actions in the present and future and facilitate
                                    collaboration among relevant stakeholders towards the achievement of sustainable development. Africa
                                    has made several efforts towards enhancing evidence-informed policymaking through commissioning
                                    various studies to respond to needs e.g., COVID-19 or establishing evidence committees and platforms
                                    to enhance consolidation of evidence to inform decisions. However, these efforts remain relatively
                                    reactive and are not properly institutionalized due to two main impediments: First, there is limited
                                    availability of reliable evidence on what works in different sectors and for different populations,
                                    and second, there is insufficient capacity to help convert high-quality information into practical
                                    interventions, as observed during the COVID-19 pandemic. This project responds to the second challenge
                                    by training ARIN Fellows across Africa on EIP institutionalization, as well as initiating a small
                                    grant scheme to build their capacity to systematically document and identify gaps, challenges,
                                    recommended actions and opportunities for advancing the EIP agenda within their institutions and/or
                                    the wider evidence ecosystem.
                                </p>

                                <p>
                                    EIP sensitizations have been conducted to create awareness among ARIN Fellows on the LEEPS AEEPA
                                    project, its objectives, and the value of institutionalizing EIP and equity analyses in EIP. This was
                                    followed by a two-week training of the ARIN Fellows on evidence synthesis and translation and equity
                                    analyses as one of the critical steps in the EIP process.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Search className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Terms of Application</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    Approximately 10-15 mini-grants of about USD 2000-3000 each will be issued on a competitive basis.
                                </p>
                                <p>
                                    A maximum of 5 mini-grants per African region, namely, East, South, West, and Central Africa, will be
                                    issued.
                                </p>
                                <p>
                                    Two thirds of the mini-grants will be awarded to EIP/equity trainees. With the training experience,
                                    these trainees will be well better placed to implement the mini-grants in line with the goals of the
                                    LEEPS project and to enhance impact.
                                </p>
                                <p>
                                    Mini-grants will generate evidence from different African countries beyond the ones earmarked for this
                                    study. The proposals will focus on case studies documenting existing EIP leadership, financing,
                                    structures, mechanisms, tools and technical capacity within the applicant&apos;s institution or
                                    network they are part of or a policy institution they work with. The case studies will identify gaps,
                                    challenges, recommended actions and opportunities for strengthening the existing EIP structures,
                                    mechanisms and technical capacity. The case studies will explore gender equity and inclusion in all
                                    the aspects investigated.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Thematic Focus of the Mini-grants</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    Recognizing the critical need for evidence-informed policymaking across Africa, and the importance of
                                    sharing knowledge across contexts and languages, we welcome country case studies in English and/or
                                    French. These studies should explore the existing EIP leadership, financing, structures, mechanisms,
                                    tools and technical capacity within the applicant&apos;s institution or network they are part of, or a
                                    policy institution they work with, to identify gaps, challenges, recommended actions and opportunities
                                    for strengthening the existing EIP structures, mechanisms and technical capacity. The case studies
                                    will explore gender equity and inclusion in all the aspects investigated.
                                </p>

                                <p>
                                    Awardees will be expected to conduct self-initiated case studies focused on their home countries. Case
                                    studies in reproductive health and clean energy sectors will be prioritized. These case studies must
                                    promise to contribute significantly to the understanding of evidence-informed policymaking
                                    institutional capacity in Africa. The findings should not only benefit the fellow&apos;s home country
                                    but also hold broader applicability for other African nations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">More Information</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p className="mb-8">More about this project</p>

                                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 border-2 border-indigo-300 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">More Information</h3>
                                    <p className="text-gray-700 mb-6 text-lg">For more information on the project please see</p>
                                    <Link href="/mini-grants/leeps-subpage" className="w-full sm:w-auto">
                                        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                            this link
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                    </Link>
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
