import { ArrowLeft, Target, Award, Download, CheckCircle, Mail, FileText, Users, Calendar, DollarSign, BookOpen, ExternalLink, Clock } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"

const eligibilityCriteria = [
    "Be one of the ten ARIN fellows who received a mini-grant during LEEPS Phase I (2023–2025)",
    "Demonstrate how the proposed Phase II activity builds directly on Phase I case study findings",
    "Show how the activity contributes to lasting institutional change",
    "Female applicants are encouraged to apply",
]

const applicationRequirements = [
    { label: "Applicant information", detail: "Name, institution, contact details" },
    { label: "Institutional context", detail: "Brief description of the institution and the EIP gap or opportunity identified in Phase I" },
    { label: "Proposed activity", detail: "Concrete steps to institutionalise EIP, including timeline and key stakeholders" },
    { label: "Expected outcomes and indicators", detail: "What will change in structures, processes, or capacities" },
    { label: "Budget breakdown", detail: "In USD, with justification" },
    { label: "Sustainability plan", detail: "How the change will endure beyond the grant period" },
]

const selectionCriteria = [
    { criterion: "Relevance to institutionalising EIP", weight: "30%" },
    { criterion: "Feasibility and clarity of the activity plan", weight: "20%" },
    { criterion: "Alignment with Phase I case study findings", weight: "20%" },
    { criterion: "Potential for lasting institutional change", weight: "15%" },
    { criterion: "Inclusion of gender equity considerations", weight: "15%" },
]

const reportingRequirements = [
    "Participate in monthly check-in calls with ARIN",
    "Submit a brief progress report midway through the grant period",
    "Submit a final report (including evidence of institutional changes, such as policies, tools, or training materials) and a financial statement upon completion",
    "Attend engagement sessions such as the ARIN Friday reviews",
    "Attend relevant conferences, workshops and/or webinars whenever called upon",
]

function ContactBar() {
    return (
        <div className="flex flex-wrap items-center gap-3 py-3 px-4 bg-green-50 border border-green-100 rounded-lg">
            <Mail className="w-4 h-4 text-green-700 flex-shrink-0" />
            <span className="text-sm text-slate-600 font-medium">Enquiries:</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <a href="mailto:j.mandela@arin-africa.org" className="text-green-700 hover:underline font-semibold">j.mandela@arin-africa.org</a>
                <span className="text-slate-400">|</span>
                <a href="mailto:e.akinyi@arin-africa.org" className="text-green-700 hover:underline">e.akinyi@arin-africa.org</a>
            </div>
        </div>
    )
}

export default function LeepsMiniGrants() {
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
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                <BookOpen className="w-3 h-3" />
                                LEEPS / AEEPA · Phase II
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-1">
                            Phase II Mini-Grants — Call for Applications
                        </h1>
                        <p className="text-lg text-slate-500 font-medium mb-4">
                            Institutionalising Evidence-Informed Policymaking · ARIN / AEEPA
                        </p>

                        {/* Key stats */}
                        <div className="flex flex-wrap gap-4 mb-5">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <DollarSign className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Maximum grant:</span>
                                <span className="text-sm font-bold text-slate-800">USD 4,500</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <Clock className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Duration:</span>
                                <span className="text-sm font-bold text-slate-800">6 months</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Deadline:</span>
                                <span className="text-sm font-bold text-red-700">30 June 2026</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <a
                                href="/pdfs/LEEPS Expression of Interest.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-700 font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download Full Call (PDF)
                            </a>
                            <a
                                href="mailto:j.mandela@arin-africa.org"
                                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Us
                            </a>
                        </div>

                        <ContactBar />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

                    {/* About */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <BookOpen className="w-5 h-5 text-slate-500" />
                            <h2 className="text-base font-bold text-slate-900">About This Call</h2>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            This call is open exclusively to the <strong className="text-slate-800">ten ARIN fellows</strong> who received a mini-grant during{" "}
                            <strong className="text-slate-800">LEEPS Phase I (2023–2025)</strong>. Phase II grants support fellows in translating their Phase I case study
                            findings into <strong className="text-slate-800">lasting institutional change</strong> — embedding Evidence-Informed Policymaking (EIP)
                            into the structures, processes, and capacities of their home institutions.
                        </p>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                            Note: If you are a Phase I mini-grant recipient but are unable to apply, please notify ARIN so that another fellow from the broader training cohort may be considered.
                        </p>
                    </div>

                    {/* Key figures */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">10</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Eligible Fellows</div>
                            <p className="text-xs text-slate-400 mt-1">Phase I mini-grant recipients</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">$4,500</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Max Per Grant</div>
                            <p className="text-xs text-slate-400 mt-1">No overheads or indirect costs</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                            <div className="text-3xl font-extrabold text-slate-900 mb-1">6 mo</div>
                            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Implementation</div>
                            <p className="text-xs text-slate-400 mt-1">Per grant period</p>
                        </div>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">Eligibility</h2>
                                <p className="text-xs text-slate-400">Who can apply</p>
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
                    </div>

                    {/* Application Requirements */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">Application Requirements</h2>
                                <p className="text-xs text-slate-400">Short proposal — maximum 3 pages</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {applicationRequirements.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {String.fromCharCode(97 + i)}
                                    </span>
                                    <div>
                                        <span className="text-slate-800 text-sm font-semibold">{item.label}</span>
                                        <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Selection Criteria */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">Selection Criteria</h2>
                                <p className="text-xs text-slate-400">Reviewed by an AEEPA representatives selection committee</p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg border border-gray-200">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left py-2.5 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">Criterion</th>
                                        <th className="text-right py-2.5 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectionCriteria.map((row, i) => (
                                        <tr key={i} className="border-b border-gray-100 last:border-0">
                                            <td className="py-3 px-4 text-slate-700">{row.criterion}</td>
                                            <td className="py-3 px-4 text-right font-bold text-slate-900">{row.weight}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Reporting */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">Reporting & Accountability</h2>
                                <p className="text-xs text-slate-400">Requirements for grantees</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {reportingRequirements.map((req, i) => (
                                <div key={i} className="flex items-start gap-2.5 py-2 border-b border-gray-100 last:border-0">
                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm leading-snug">{req}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How to Apply */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="w-5 h-5 text-slate-500" />
                            <div>
                                <h2 className="text-base font-bold text-slate-900">How to Apply</h2>
                                <p className="text-xs text-slate-400">Submit a single PDF by 30 June 2026</p>
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-4 h-4 text-green-700" />
                                <span className="text-sm font-bold text-slate-800">Submit your application by email</span>
                            </div>
                            <div className="space-y-1.5 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 text-xs w-8 flex-shrink-0">To:</span>
                                    <a href="mailto:E.akinyi@arin-africa.org" className="text-green-700 hover:underline font-semibold">E.akinyi@arin-africa.org</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 text-xs w-8 flex-shrink-0">CC:</span>
                                    <a href="mailto:j.mandela@arin-africa.org" className="text-green-700 hover:underline">j.mandela@arin-africa.org</a>
                                </div>
                                <div className="flex items-start gap-2 mt-2 pt-2 border-t border-green-100">
                                    <span className="text-slate-500 text-xs w-8 flex-shrink-0">Subject:</span>
                                    <span className="text-slate-700 text-xs font-mono bg-white px-2 py-1 rounded border border-green-200">LEEPS Phase II Mini-Grant Application</span>
                                </div>
                            </div>
                            <p className="text-xs text-red-600 font-semibold mt-3 pt-3 border-t border-green-100">
                                Deadline: 30 June 2026 · Late or incomplete applications will not be considered.
                            </p>
                        </div>

                        <a
                            href="/pdfs/LEEPS Expression of Interest.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-700 font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download Full Call (PDF)
                        </a>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">Ready to Apply?</h3>
                                <p className="text-sm text-slate-500 mb-1">
                                    Submit a single PDF to the address below by <strong className="text-red-700">30 June 2026</strong>.
                                </p>
                                <p className="text-xs text-slate-400 mb-3">For any inquiry, contact:</p>
                                <div className="flex flex-wrap gap-3 text-sm">
                                    <a href="mailto:j.mandela@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline font-semibold">
                                        <Mail className="w-3.5 h-3.5" /> j.mandela@arin-africa.org
                                    </a>
                                    <a href="mailto:e.akinyi@arin-africa.org" className="flex items-center gap-1.5 text-green-700 hover:underline">
                                        <Mail className="w-3.5 h-3.5" /> e.akinyi@arin-africa.org
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="/pdfs/LEEPS Expression of Interest.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-700 font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors whitespace-nowrap"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Call (PDF)
                                </a>
                                <a
                                    href="mailto:E.akinyi@arin-africa.org?cc=j.mandela@arin-africa.org&subject=LEEPS%20Phase%20II%20Mini-Grant%20Application"
                                    className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors whitespace-nowrap"
                                >
                                    <Mail className="w-4 h-4" />
                                    Apply by Email
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
