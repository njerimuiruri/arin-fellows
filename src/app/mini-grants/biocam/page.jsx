import { ArrowLeft, Target, Globe, Award, Download, CheckCircle, Mail, FileText, Users, Calendar, DollarSign, Leaf, Clock } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"

const thematicAreas = [
    "Integrating biodiversity into climate adaptation and mitigation",
    "Ecosystem-based adaptation and landscape restoration",
    "Agroecology and biodiversity-friendly agriculture",
    "Socio-ecological, institutional, and governance dynamics shaping NBCAs",
    "Co-benefits for ecosystems, livelihoods, and human health",
    "Locally-led, context-specific evidence generation and policy influence",
]

const eligibilityCriteria = [
    "Early-career researcher, practitioner, or policymaker  typically within 5 years of your highest degree, or with comparable professional experience in climate, biodiversity, or related fields",
    "Affiliated with a recognised academic, research, policy, or practitioner institution at the time of application and throughout the grant period",
    "Conducting research or implementation activities in Africa, with a clear local, national, or regional focus",
    "Submitting a two-page (500700 words) concept note that clearly aligns with BioCAM4 priorities, with a feasible methodology and budget",
    "An existing ARIN Fellow, or willing to join and actively participate in ARIN Fellowship activities",
    "Not currently receiving another ARIN mini-grant, at application or during the proposed project period",
    "Able to work across disciplines and engage relevant stakeholders  communities, policymakers, and practitioners (preferred)",
]

const applicationDocuments = [
    { icon: FileText, label: "Motivation Letter", desc: "One page  interest, expertise, and fit with NBCAs" },
    { icon: Users, label: "Curriculum Vitae", desc: "No more than four pages" },
    { icon: FileText, label: "Concept Note", desc: "Up to two pages (7001,500 words), with methodology and budget" },
    { icon: Award, label: "Two Reference Letters", desc: "From senior academics or policymakers" },
]

const expectedOutcomes = [
    "A refined research proposal incorporating feedback from the selection process",
    "An 8,000-word case study report (working paper) analysing NBCAs in the fellow's country context, plus a policy brief with actionable recommendations",
    "Active participation in ARIN webinars, dialogues, and peer-learning sessions",
]

function ContactBar({ label }) {
    return (
        <div className="flex flex-wrap items-center gap-3 py-3 px-4 bg-teal-50 border border-teal-100 rounded-lg">
            <Mail className="w-4 h-4 text-teal-700 flex-shrink-0" />
            <span className="text-sm text-slate-600 font-medium">{label}</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="text-slate-500">To:</span>
                <a href="mailto:a.irungu@arin-africa.org" className="text-teal-700 hover:underline font-semibold">a.irungu@arin-africa.org</a>
                <span className="text-slate-400">|</span>
                <span className="text-slate-500">CC:</span>
                <a href="mailto:a.obonyo@arin-africa.org" className="text-teal-700 hover:underline">a.obonyo@arin-africa.org</a>
                <a href="mailto:e.akinyi@arin-africa.org" className="text-teal-700 hover:underline">e.akinyi@arin-africa.org</a>
            </div>
        </div>
    )
}

export default function Biocam4MiniGrants() {
    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gray-50">

                {/* Hero */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
                        <Link href="/mini-grants" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-5 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Mini-Grants
                        </Link>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse inline-block" />
                                Applications Open
                            </span>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">BioCAM4  Planet, People &amp; Human Health</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-1">
                            Call for Mini-Grants
                        </h1>
                        <p className="text-lg text-slate-500 font-medium mb-4">
                            Advancing Nature-Based Climate Actions (NBCAs) in Africa: A Mini-Grant for Locally-Led Evidence Generation and Policy Influence
                        </p>

                        {/* Key stats */}
                        <div className="flex flex-wrap gap-4 mb-5">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Deadline:</span>
                                <span className="text-sm font-bold text-slate-800">22 July, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <DollarSign className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Grant value:</span>
                                <span className="text-sm font-bold text-slate-800">3,000 per fellow</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <Clock className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Duration:</span>
                                <span className="text-sm font-bold text-slate-800">8 months</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <a
                                href="/pdfs/CALLFORMINIGRANTS.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-700 font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download Full Call (PDF)
                            </a>
                            <a
                                href="mailto:a.irungu@arin-africa.org"
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
                            <strong className="text-slate-800">BioCAM4</strong> (Biodiversity Integration in Climate Adaptation and Mitigation Actions, for Planet, People and Human Health)
                            is funded by the Government of Canada&apos;s New Frontiers in Research Fund (NFRF), the German Research Foundation (DFG), and UKRI.
                            The project is led by <strong className="text-slate-800">York University</strong> in partnership with IDOS, Radboud University,
                            the <strong className="text-slate-800">Africa Research and Impact Network (ARIN)</strong>, the Greater Virunga Transboundary Collaboration, and CATIE.
                            The mini-grant scheme is funded by DFG through a contract between IDOS and ARIN.
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The <strong className="text-slate-800">BioCAM4 Mini-Grant Fellowship</strong> supports early-career African researchers to conduct
                            high-quality, policy-relevant case studies on Nature-Based Climate Actions (NBCAs)  approaches that use ecosystem management,
                            conservation, and restoration to address climate change while improving biodiversity and human well-being.
                        </p>
                    </div>

                    {/* Grant Overview */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">3,000</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Per Fellow</div>
                            <p className="text-xs text-slate-400 mt-1">Catalytic funding</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">8 mo</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Fellowship Length</div>
                            <p className="text-xs text-slate-400 mt-1">Research + reporting</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">22 Jul</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Deadline 2026</div>
                            <p className="text-xs text-slate-400 mt-1">Incomplete applications not considered</p>
                        </div>
                    </div>

                    {/* Thematic Areas */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Leaf className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">Thematic Focus Areas</h2>
                                <p className="text-xs text-slate-400">Concept notes should align with BioCAM4 priorities</p>
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
                                <p className="text-xs text-slate-400">All criteria must be met unless marked preferred</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {eligibilityCriteria.map((criterion, i) => (
                                <div key={i} className="flex items-start gap-2.5 py-2 border-b border-gray-100 last:border-0">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm leading-snug">{criterion}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-slate-500 mb-2">Questions about eligibility? Contact us:</p>
                            <div className="flex flex-wrap gap-3 text-sm">
                                <a href="mailto:a.obonyo@arin-africa.org" className="flex items-center gap-1.5 text-teal-700 hover:underline font-medium">
                                    <Mail className="w-3.5 h-3.5" /> a.obonyo@arin-africa.org
                                </a>
                                <a href="mailto:e.akinyi@arin-africa.org" className="flex items-center gap-1.5 text-teal-700 hover:underline">
                                    <Mail className="w-3.5 h-3.5" /> e.akinyi@arin-africa.org
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Expected Outcomes */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-5 h-5 text-slate-500" />
                            <h2 className="text-base font-bold text-slate-900">Expected Outcomes</h2>
                        </div>
                        <div className="space-y-2">
                            {expectedOutcomes.map((outcome, i) => (
                                <div key={i} className="flex items-start gap-2.5 py-2 border-b border-gray-100 last:border-0">
                                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                    <span className="text-slate-600 text-sm leading-snug">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How to Apply */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">How to Apply</h2>
                                <p className="text-xs text-slate-400">Submit all documents as a single combined PDF by 22 July, 2026</p>
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
                        <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-4 h-4 text-teal-700" />
                                <span className="text-sm font-bold text-slate-800">Submit by email  Deadline: 22 July, 2026</span>
                            </div>
                            <div className="space-y-1.5 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 w-8 flex-shrink-0 text-xs">To:</span>
                                    <a href="mailto:a.irungu@arin-africa.org" className="text-teal-700 hover:underline font-semibold">a.irungu@arin-africa.org</a>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-slate-500 w-8 flex-shrink-0 text-xs">CC:</span>
                                    <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                                        <a href="mailto:a.obonyo@arin-africa.org" className="text-teal-700 hover:underline">a.obonyo@arin-africa.org</a>
                                        <a href="mailto:e.akinyi@arin-africa.org" className="text-teal-700 hover:underline">e.akinyi@arin-africa.org</a>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-teal-100">
                                Use the subject line: <strong>BioCAM4 Mini-Grant Application  [Your Full Name]</strong>. Incomplete applications will not be considered.
                            </p>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">Ready to Apply?</h3>
                                <p className="text-sm text-slate-500">
                                    Download the full call for complete guidelines. Submit your package by <strong className="text-slate-800">22 July, 2026</strong>.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-3 text-sm">
                                    <a href="mailto:a.irungu@arin-africa.org" className="flex items-center gap-1.5 text-teal-700 hover:underline font-semibold">
                                        <Mail className="w-3.5 h-3.5" /> a.irungu@arin-africa.org
                                    </a>
                                    <a href="mailto:a.obonyo@arin-africa.org" className="flex items-center gap-1.5 text-teal-700 hover:underline">
                                        <Mail className="w-3.5 h-3.5" /> a.obonyo@arin-africa.org
                                    </a>
                                    <a href="mailto:e.akinyi@arin-africa.org" className="flex items-center gap-1.5 text-teal-700 hover:underline">
                                        <Mail className="w-3.5 h-3.5" /> e.akinyi@arin-africa.org
                                    </a>
                                </div>
                            </div>
                            <a
                                href="/pdfs/CALLFORMINIGRANTS.pdf"
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