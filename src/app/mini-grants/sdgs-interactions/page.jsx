import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Globe, Target, Users, Award, Building, HandHeart } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"
import Image from "next/image"

export default function SDGsInteractionsMiniGrants() {
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
                                        Governing SDGs
                                    </span>
                                    <span className="block text-4xl lg:text-5xl text-cyan-300 mt-2">Interactions Mini-grants</span>
                                </h1>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 mb-12">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Calendar className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">September 30, 2024</div>
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
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">About the Project</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    Numerous governments, businesses, and civil society organisations aim to contribute to achieving the
                                    17 Sustainable Development Goals in the Global South. However, cherry-picking SDGs coupled with lack
                                    of alignment between initiatives means trade-offs are not addressed and opportunities for synergy are
                                    missed. When trade-offs are not addressed, progress in one SDG comes at the expense of progress in
                                    another SDG. When synergies are ignored, valuable opportunities are lost and resources wasted. This
                                    undermines the effectiveness of the indivisible SDG agenda, which seeks to reach all the goals
                                    simultaneously. Addressing trade-offs and building synergies between SDGs requires alignment between
                                    development actors and efforts that are driven by different priorities and interests. Progress towards
                                    achieving the SDGs is hampered by international development projects duplicating efforts on the
                                    ground; lack of coherence between donor policies; misalignment between national policies and
                                    multilateral development programmes; and diverging private sector investments. Aligning SDG efforts by
                                    these public and private actors operating across levels has itself become a challenge that will
                                    determine whether SDGs will be met in 2030. The Africa Research and Impact Network (ARIN), together
                                    with our international, Dutch and East-African partners, is implementing &apos;Governing SDGs
                                    interaction in East Africa which studies the effectiveness of governance mechanisms that aim to align
                                    SDG efforts between:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>different government departments</li>
                                    <li>donors and recipients</li>
                                    <li>different donors</li>
                                    <li>public and private initiatives</li>
                                </ul>
                                <p>
                                    Governing SDG interactions is challenging, given that resources and responsibilities for different
                                    SDGs and SDG targets are fragmented across sectors and levels, resulting in governance gaps.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Project Aims</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    Its aim is to study alignment mechanisms between public and private actors at different governance
                                    levels, with the goal of transforming fragmented SDG governance into an inclusive and effective
                                    polycentric governance system that allows trade-offs to be addressed and synergies to be built between
                                    SDGs.
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>
                                        <strong>Inter-departmental alignment:</strong> addressing SDG interactions through aligning aid,
                                        trade, and investment policies, and policies of other ministries.
                                    </li>
                                    <li>
                                        <strong>Donor–recipient alignment:</strong> addressing SDG interactions through aligning development
                                        assistance with the development strategies in the global South.
                                    </li>
                                    <li>
                                        <strong>Inter-donor alignment:</strong> addressing SDG interactions through aligning development
                                        assistance with other bilateral and multilateral donors.
                                    </li>
                                    <li>
                                        <strong>Public-private alignment:</strong> addressing SDG interactions through aligning public and
                                        private development initiatives.
                                    </li>
                                </ul>
                                <p>
                                    It also aims to support better alignment between development actors and efforts, to minimize
                                    trade-offs, maximize synergies, and achieve the SDGs in Ethiopia, Kenya and Uganda. In each case study
                                    country, one SDG is the starting point for studying trade-offs and synergies with other SDGs:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>
                                        <strong>Ethiopia:</strong> Multi-level study of interactions with SDG15 (Life on land): the
                                        challenge of landscape restoration
                                    </li>
                                    <li>
                                        <strong>Kenya:</strong> Multi-level study of interactions with SDG2 (No hunger): the challenge of
                                        climate-smart livestock
                                    </li>
                                    <li>
                                        <strong>Uganda:</strong> Multi-level study of interactions with SDG6 (Clean water and sanitation):
                                        the urban water-energy-food nexus
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Terms of Application</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>✞ Approximately 10 mini-grants of about 2500 euros each will be issued on a competitive basis.</p>
                                <p>
                                    ✞ A maximum of 5 mini-grants per African region, namely, East, South, West, and Central Africa, will
                                    be issued. Preference will be given to those in the Francophone Africa region.
                                </p>
                                <p>
                                    ✞ Mini-grants will generate evidence from different African countries beyond the ones earmarked for
                                    this study.
                                </p>
                                <p>
                                    ✞ Awardees will have to undertake to commit their time from the research inception to the completion
                                    of the research project.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Building className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Thematic Focus</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    Recognizing the urgent need to align efforts for achieving the Sustainable Development Goals (SDGs)
                                    across the Global South, and the importance of addressing trade-offs and synergies in SDG governance,
                                    we welcome country case studies in English. These studies should explore the existing alignment
                                    mechanisms between public and private actors, and across different governance levels. The aim is to
                                    identify gaps, challenges, recommended actions, and opportunities for strengthening the alignment of
                                    SDG efforts.
                                </p>
                                <p>
                                    Awardees will be expected to conduct self-initiated case studies focused on their home countries,
                                    Priority will be given to studies that focus on SDG interactions in sectors such as landscape
                                    restoration (SDG 15), climate-smart livestock practices (SDG 2), or the urban water-energy-food nexus
                                    (SDG 6). These case studies should contribute significantly to the understanding of how to transform
                                    fragmented SDG governance into an inclusive and effective system. The findings should not only benefit
                                    the fellow&apos;s home country but also hold broader applicability for other regions in Africa.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    To be eligible for an ARIN Governing SDGs interactions Mini-grant, applicants must meet the following
                                    criteria:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>
                                        <strong>Current ARIN Fellow:</strong> We welcome applications from all interested researchers,
                                        however, those actively participating in the ARIN Fellowship program will be prioritized.
                                    </li>
                                    <li>
                                        <strong>Research and/or Policy Experience:</strong> Applicants should demonstrate experience in
                                        conducting research or working in a policy-related field. Applications focusing on SDG interactions
                                        in sectors such as landscape restoration (SDG 15), climate-smart livestock practices (SDG 2), or the
                                        urban water – energy – food nexus (SDG 6) sectors will be prioritized.
                                    </li>
                                    <li>
                                        <strong>Institutional Affiliation:</strong> Applicants must be affiliated with a recognized research
                                        institution (e.g., universities, think tanks) or a relevant policy organization (e.g., government
                                        departments).
                                    </li>
                                    <li>
                                        <strong>No Prior ARIN Funding:</strong> Applicants cannot have received full or partial funding from
                                        ARIN for the same proposed project.
                                    </li>
                                    <li>
                                        <strong>Selection Preference:</strong> While all applications will be considered, preference will be
                                        given to applicants from the Global South.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                    <HandHeart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Expected Activities</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    The ARIN Governing SDGs interactions Mini-grant program fosters knowledge exchange and capacity
                                    building through a variety of outputs:
                                </p>
                                <p>
                                    <strong>Knowledge Sharing and Collaboration</strong>
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>
                                        <strong>Learning and exchange webinars:</strong> Awardees will participate in webinars to share
                                        research findings and engage with a wider audience.
                                    </li>
                                    <li>
                                        <strong>Research seminars:</strong> Awardees will present their research at the various ARIN
                                        seminars to foster discussion and collaboration.
                                    </li>
                                    <li>
                                        <strong>Monthly convenings:</strong> Throughout the grant period, ARIN will host monthly meetings
                                        specifically focused on Governing SDGs interactions and the progress of awardees&apos; case studies.
                                        These meetings will culminate in the Fellows&apos; Assembly in November 2025.
                                    </li>
                                    <li>
                                        <strong>ARIN Friday Reviews:</strong> Awardees will get the privilege to be slotted in ARIN Friday
                                        Reviews.
                                    </li>
                                </ul>
                                <p>
                                    <strong>2. Capacity Building:</strong>
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>
                                        <strong>Mentorship and training:</strong> Fellows will receive ongoing mentorship and training in
                                        scientific writing, research translation and communication skills, equipping them to effectively
                                        communicate their findings in various formats.
                                    </li>
                                </ul>
                                <p>
                                    <strong>3. Knowledge Products:</strong>
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>
                                        <strong>Book volume:</strong> A book volume will be published, featuring in-country case studies
                                        authored by the awardees. This book volume will be published by Taylor & Francis, a leading global
                                        publisher.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Building className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Application Requirements</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>Applicants will be selected through a competitive process based on the following criteria:</p>
                                <p>
                                    • <strong>Eligibility:</strong> Applicants must meet the eligibility criteria outlined in Section D.
                                </p>
                                <p>
                                    • <strong>Application Materials:</strong> A complete application package includes:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>A statement of motivation speaking on the applicant&apos;s qualifications and suitability</li>
                                    <li>Curriculum Vitae (CV)</li>
                                    <li>Verified academic documents</li>
                                    <li>At least 1 academic reference letter</li>
                                    <li>
                                        Research Concept Note: This document should outline the proposed research topic, methodology, and
                                        expected outcomes.
                                    </li>
                                    <li>
                                        Detailed Project Budget: Specify costs associated with all project activities. Please note that
                                        budgets exceeding the indicated maximum allocation will not be accommodated.
                                    </li>
                                    <li>
                                        Relevant electronic copy of a sample publication where the applicant is the sole, lead or senior
                                        author.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Evaluation Process</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    The selection committee, composed of the ARIN Executive Director, relevant ARIN program managers (i.e.
                                    Research, Policy & Engagement, and Fellowship) and the Governing SDGs interactions Technical Lead and
                                    Project Manager, will evaluate applications through a two stage process involving an initial screening
                                    and an in-depth merit review. A shortlist of qualified applicants will be selected for further
                                    evaluation based on:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>Applicant Motivation</li>
                                    <li>Concept Relevance</li>
                                    <li>Research-Policy Experience</li>
                                    <li>Alignment to the overall goal and conceptualisation of the project</li>
                                    <li>Potential for impact</li>
                                    <li>Methodological robustness, among others including gender equity, equality, and inclusion.</li>
                                </ul>
                                <p>
                                    Finalists will be notified of the award and invited to attend an orientation session to discuss
                                    research project objectives and expectations. Upon successful completion of the orientation, finalists
                                    will be presented with a fellowship agreement to sign.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                                    <HandHeart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Gender Equity, Equality and Inclusion</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    ARIN recognizes that gender equity, equality, and inclusion are fundamental human rights and essential
                                    foundations for a peaceful, prosperous, and sustainable world. Therefore, we strongly encourage
                                    applicants to submit gender-responsive or transformative project proposals that prioritize these
                                    principles.
                                </p>
                                <p>
                                    For more details on how gender considerations will be integrated into the evaluation process and
                                    potential research topics, please refer to ARIN&apos;s online gender guidelines.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Monitoring and Evaluation</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    To ensure successful project implementation, ARIN will employ a monitoring and evaluation process
                                    throughout the mini-grant cycle. Awardees will be required to submit regular progress reports to the
                                    ARIN Fellowship Manager. These reports will detail implementation progress, achieved results, and any
                                    challenges encountered. The reports will track performance against pre-determined indicators
                                    established collaboratively between the Fellowship Manager and each recipient.
                                </p>
                                <p>
                                    Upon project completion, recipients must submit a final report. This comprehensive document will
                                    assess the project&apos;s success, catalogue deliverables, and provide a financial summary. The report
                                    will also capture key learnings and experiences throughout the grant period. It serves the dual
                                    purpose of meeting ARIN&apos;s reporting requirements and informing decisions regarding future grant
                                    awards.
                                </p>
                                <p>
                                    The ARIN Secretariat will review these reports to evaluate project success, potential for further
                                    funding, and overall program impact.
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
                                <h2 className="text-3xl font-bold text-gray-800">How to Apply</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p className="mb-8">
                                    For full consideration, applications must be submitted via e-mail to e.akinyi@arin-africa.org copying
                                    a.irungu@arin-africa.org, and l.ochieng@arin-africa.org no later than 13th October 2024.
                                </p>
                                <p className="mb-8">
                                    Incomplete applications or applications received after the deadline will not be considered.
                                </p>

                                {/* <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-8 border-2 border-cyan-300 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Information</h3>
                                    <p className="text-gray-700 mb-6 text-lg">
                                        Ready to apply for the SDGs Interactions Mini-grants?
                                    </p>
                                    <Link href="mailto:e.akinyi@arin-africa.org" className="w-full sm:w-auto">
                                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                            Submit Application
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <Image
                                src="/img/banner.png"
                                alt="SDGs Interactions Program"
                                width={1200}
                                height={400}
                                className="w-full h-auto rounded-2xl object-cover shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
