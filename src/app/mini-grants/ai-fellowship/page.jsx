import { ArrowLeft, Target, Globe, Award, Download, CheckCircle, Mail, FileText, Users, Calendar, DollarSign, Brain, Phone } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"

const thematicAreas = [
    "Application of Artificial Intelligence (AI) and Machine Learning (ML) for climate action",
    "Data-driven intelligent decision support systems for climate action",
    "Automation of climate data handling and processing",
    "Pattern extraction from big climate data",
    "Generative AI for analysing and communicating local adaptation metrics",
    "Indigenous knowledge integration in climate models",
]

const eligibilityCriteria = [
    "Be a current and active ARIN Fellow under the AI for Climate Resilience Fellowship Program",
    "Have completed all Basic Level Modules under the Project's Fellowship Program",
    "Have a background in research and/or policy work, with a focus on climate change, AI, and/or ML",
    "Submit a project proposal or concept note outlining how AI will address a specific climate resilience challenge in Africa",
    "Demonstrate the experience and/or skills necessary to carry a project through to successful completion",
    "Demonstrate a clear need for funding to support practical implementation of the capstone project",
    "Be affiliated with a recognised research institution (e.g., university, think tank) or relevant policy organisation",
    "Not currently holding an active ARIN minigrant award",
]

const applicationDocuments = [
    { icon: FileText, label: "Concept Note / Project Proposal", desc: "Original project idea  max 3 pages" },
    { icon: Users, label: "Three-Page CV", desc: "Including a list of referees" },
    { icon: Award, label: "Letter of Support", desc: "From the applicant's host institution" },
    { icon: FileText, label: "Motivation Letter", desc: "One page outlining your motivation" },
]

function ContactBar({ label }) {
    return (
        <div className="flex flex-wrap items-center gap-3 py-3 px-4 bg-green-50 border border-green-100 rounded-lg">
            <Mail className="w-4 h-4 text-green-700 flex-shrink-0" />
            <span className="text-sm text-slate-600 font-medium">{label}</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="text-slate-500">To:</span>
                <a href="mailto:f.oloo@arin-africa.org" className="text-green-700 hover:underline font-semibold">f.oloo@arin-africa.org</a>
                <span className="text-slate-400">|</span>
                <span className="text-slate-500">CC:</span>
                <a href="mailto:e.akinyi@arin-africa.org" className="text-green-700 hover:underline">e.akinyi@arin-africa.org</a>
                <a href="mailto:n.mutwii@arin-africa.org" className="text-green-700 hover:underline">n.mutwii@arin-africa.org</a>
            </div>
        </div>
    )
}

export default function AIFellowshipMiniGrants() {
    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gray-50">

                {/* Hero  white, clean */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
                        <Link href="/mini-grants" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-5 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Mini-Grants
                        </Link>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block" />
                                Applications Open
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-1">
                            Call for Mini-Grants
                        </h1>
                        <p className="text-lg text-slate-500 font-medium mb-4">
                            AI for Climate Resilience Solutions in Africa  ARIN / IDRC
                        </p>

                        {/* Key stats */}
                        <div className="flex flex-wrap gap-4 mb-5">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Deadline:</span>
                                <span className="text-sm font-bold text-slate-800">July 15, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <DollarSign className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Grant value:</span>
                                <span className="text-sm font-bold text-slate-800">USD 2,500</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <Award className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Awards:</span>
                                <span className="text-sm font-bold text-slate-800">10 grants</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <a
                                href="/pdfs/Call for Mini Grants - Leveraging Artificial Intelligence for Climate Resilience Solutions in Africa Project.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-700 font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download Full Call (PDF)
                            </a>
                            <a
                                href="mailto:f.oloo@arin-africa.org"
                                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Apply by Email
                            </a>
                        </div>

                        {/* Contact bar in hero */}
                        <ContactBar label="Submit applications to:" />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

                    {/* About */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <Globe className="w-5 h-5 text-slate-500" />
                            <h2 className="text-base font-bold text-slate-900">About the Project</h2>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                            ARIN is an international think tank of over <strong className="text-slate-800">400 researchers and policymakers</strong> across
                            41 African countries. The <strong className="text-slate-800">Leveraging AI for Climate Resilience Solutions in Africa</strong> project
                            is led by ARIN in partnership with the <strong className="text-slate-800">University of Nairobi</strong>, funded by{" "}
                            <strong className="text-slate-800">IDRC</strong>. It builds AI and machine learning capacity to advance climate action at local and national levels.
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The <strong className="text-slate-800">AI for Climate Resilience Fellowship</strong> develops African climate leaders at the intersection of AI, policy,
                            and sustainability  equipping them to build inclusive, responsible AI solutions for climate resilience.
                        </p>
                    </div>

                    {/* Grant Overview */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">10</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Mini-Grants</div>
                            <p className="text-xs text-slate-400 mt-1">Competitive awards</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">$2,500</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Per Grant</div>
                            <p className="text-xs text-slate-400 mt-1">USD per project</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">Jul 15</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Deadline 2026</div>
                            <p className="text-xs text-slate-400 mt-1">No late applications</p>
                        </div>
                    </div>

                    {/* Thematic Areas */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">Thematic Focus Areas</h2>
                                <p className="text-xs text-slate-400">Proposals must address one or more of these areas</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {thematicAreas.map((area, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                    <span className="text-slate-700 text-sm leading-snug">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">Eligibility Criteria</h2>
                                <p className="text-xs text-slate-400">All of the following must be met</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {eligibilityCriteria.map((criterion, i) => (
                                <div key={i} className="flex items-start gap-2.5 py-2 border-b border-gray-100 last:border-0">
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm leading-snug">{criterion}</span>
                                </div>
                            ))}
                        </div>
                        {/* Contact after eligibility */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-slate-500 mb-2">Questions about eligibility? Contact us:</p>
                            <div className="flex flex-wrap gap-3 text-sm">
                                <a href="mailto:f.oloo@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline font-medium">
                                    <Mail className="w-3.5 h-3.5" /> f.oloo@arin-africa.org
                                </a>
                                <a href="mailto:e.akinyi@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline">
                                    <Mail className="w-3.5 h-3.5" /> e.akinyi@arin-africa.org
                                </a>
                                <a href="mailto:n.mutwii@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline">
                                    <Mail className="w-3.5 h-3.5" /> n.mutwii@arin-africa.org
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* How to Apply */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">How to Apply</h2>
                                <p className="text-xs text-slate-400">Submit all documents as a single combined PDF by July 15, 2026</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-2 mb-5">
                            {applicationDocuments.map(({ icon: Icon, label, desc }, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-lg">
                                    <Icon className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-semibold text-slate-800">{label}</div>
                                        <div className="text-xs text-slate-500">{desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Submission contact */}
                        <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-4 h-4 text-green-700" />
                                <span className="text-sm font-bold text-slate-800">Submit by email  Deadline: July 15, 2026</span>
                            </div>
                            <div className="space-y-1.5 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 w-8 flex-shrink-0 text-xs">To:</span>
                                    <a href="mailto:f.oloo@arin-africa.org" className="text-green-700 hover:underline font-semibold">f.oloo@arin-africa.org</a>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-slate-500 w-8 flex-shrink-0 text-xs">CC:</span>
                                    <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                                        <a href="mailto:e.akinyi@arin-africa.org" className="text-green-700 hover:underline">e.akinyi@arin-africa.org</a>
                                        <a href="mailto:n.mutwii@arin-africa.org" className="text-green-700 hover:underline">n.mutwii@arin-africa.org</a>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-green-100">
                                Late or incomplete applications will not be considered.
                            </p>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">Ready to Apply?</h3>
                                <p className="text-sm text-slate-500">
                                    Download the full call for complete guidelines. Submit your package by <strong className="text-slate-800">July 15, 2026</strong>.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-3 text-sm">
                                    <a href="mailto:f.oloo@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline font-semibold">
                                        <Mail className="w-3.5 h-3.5" /> f.oloo@arin-africa.org
                                    </a>
                                    <a href="mailto:e.akinyi@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline">
                                        <Mail className="w-3.5 h-3.5" /> e.akinyi@arin-africa.org
                                    </a>
                                    <a href="mailto:n.mutwii@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline">
                                        <Mail className="w-3.5 h-3.5" /> n.mutwii@arin-africa.org
                                    </a>
                                </div>
                            </div>
                            <a
                                href="/pdfs/Call for Mini Grants - Leveraging Artificial Intelligence for Climate Resilience Solutions in Africa Project.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-700 font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors whitespace-nowrap"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
