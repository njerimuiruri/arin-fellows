import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Globe, ExternalLink, Users, Award } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Image from "next/image"
import Link from "next/link"

export default function LeepsProjectPage() {
    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
                <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-teal-400/20"></div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
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
                            <div className="mb-6">
                                <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        LEEPS
                                    </span>
                                </h1>
                                <p className="text-xl lg:text-2xl text-cyan-300 font-medium max-w-4xl mx-auto leading-relaxed">
                                    Learning Together to Advance Evidence and Equity in Policy-making for Achieving SDGs
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 mb-8">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Calendar className="w-5 h-5 text-cyan-300" />
                                    <div>
                                        <div className="text-sm font-semibold text-white">July 1, 2024</div>
                                        <div className="text-xs text-white/70">Posted</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Globe className="w-5 h-5 text-blue-300" />
                                    <span className="text-sm font-medium">Research Projects</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Award className="w-5 h-5 text-green-300" />
                                    <span className="text-sm font-medium">Projects</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Users className="w-5 h-5 text-purple-300" />
                                    <span className="text-sm font-medium">Programs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-4 border border-white/50">
                        <Image
                            src="/img/leepsbanner.jpg"
                            alt="LEEPS Project Banner"
                            width={1200}
                            height={256}
                            className="w-full h-64 object-cover rounded-2xl"
                            priority
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    The Evidence Informed Policy making in Africa under the Africa LEEPS partnership- Evidence Informed
                                    Policymaking project (Anglophone hub) is led by AFIDEP in collaboration with the Africa Research and
                                    Impact Network (ARIN), the African Institute for Health Policies and Health Systems- Nigeria and the
                                    School of Gender and Women Studies- Makerere University. The role of EIP is critical in Africa&apos;s
                                    pursuit of sustainable development. Evidence and data help to inform appropriate actions in the
                                    present and future and facilitate collaboration among relevant stakeholders towards achievement of
                                    sustainable development.
                                </p>

                                <p>
                                    Africa as a continent has made several efforts towards enhancing evidence base policy making through
                                    commissioning various studies to respond to needs e.g., COVID-19 or establishing evidence committees,
                                    platforms to enhance consolidation of evidence for decisions. However, these efforts remain relatively
                                    reactive and are not properly institutionalised due to two main impediments: First, there is limited
                                    availability of reliable evidence on what works in different sectors and for different populations and
                                    secondly a mass of capacity to help convert high-quality information into practical interventions, as
                                    observed during the COVID-19 pandemic. This project therefore responds to the second challenge by
                                    training on EIP institutionalization as well as initiating a small grant scheme to build capacity of
                                    relevant fellows across Africa&apos;s pursuit of sustainable development towards understanding and
                                    contributing to the EIP agenda.
                                </p>

                                <p>
                                    An EIP sensitization training has been conducted, to create awareness among the fellows on the EIP
                                    project and its objectives and capacity build them. This was followed by a two-week training with
                                    tailor-made modules on different aspects of Institutionalising Evidence in Africa.
                                </p>

                                <p>
                                    Fellows who successfully underwent the EIP training were invited to apply for the mentorship phase.
                                    About 10-15 mini grants will be issued on a competitive basis where fellows will be asked to apply and
                                    describe their topics of study. These trainees will be well placed to implement the mini-grants in
                                    line with the goals of the project and to enhance impacts not only in their institutions but also to
                                    capacity build others within their respective regions.The results will be consolidated to produce a
                                    book volume on EIP practices, innovations, and opportunities for scaling up.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">
                                    ARIN AEEPA Mini-grants Scheme – Call for Application
                                </h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    The Alliance for Evidence and Equity in Policy-making in Africa (AEEPA) is part of the Learning
                                    Together to Advance Evidence and Equity in Policy-making for Achieving SDGs (LEEPS) partnership
                                    coordinated by R4D and funded by IDRC, Hewlett Foundation and Bosch Foundation. AEEPA is led by the{" "}
                                    <a
                                        href="https://afidep.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200"
                                    >
                                        African Institute for Development Policy (AFIDEP)
                                    </a>{" "}
                                    in collaboration with the{" "}
                                    <a
                                        href="https://www.arin-africa.org/"
                                        className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200"
                                    >
                                        Africa Research and Impact Network (ARIN)
                                    </a>
                                    , the{" "}
                                    <a
                                        href="https://aihps.ebsu.edu.ng/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200"
                                    >
                                        African Institute for Health Policies and Health Systems (AIHPHS)
                                    </a>{" "}
                                    in Nigeria and the{" "}
                                    <a
                                        href="https://womenstudies.mak.ac.ug/history/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200"
                                    >
                                        Makerere University School of Gender and Women Studies (MakSWGS)
                                    </a>{" "}
                                    in Uganda.
                                </p>
                                <div className="text-center">
                                    <a
                                        href="https://www.arin-africa.org/wp-content/uploads/2024/07/Call-for-Applications-LEEPS-EIP-Minigrants_DEDLINE-EXTENDED.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                                    >
                                        <span className="mr-2">READ MORE</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
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