import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Leaf, ExternalLink, AlertTriangle, Search, Target, Users, Award } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"

export default function BioCamMiniGrants() {
    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <Link href="/mini-grants" className="w-full sm:w-auto">
                                <Button
                                    variant="ghost"
                                    className="mb-6 text-white/60 hover:text-white hover:bg-white/5 border border-white/10 transition-all duration-300 rounded-lg px-6 py-2"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Mini-grants
                                </Button>
                            </Link>

                            <div className="mb-4">
                                <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 leading-tight tracking-tight">
                                    <span className="text-white">BioCAM</span>
                                    <span className="block text-2xl lg:text-3xl text-slate-300 mt-2">Mini-grants</span>
                                </h1>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-4 text-white/80 mb-6">
                                <div className="flex items-center space-x-3 bg-white/10 border border-white/10 rounded-lg px-5 py-2.5">
                                    <Calendar className="w-5 h-5 text-white/60" />
                                    <div>
                                        <div className="text-base font-semibold text-white">July 30, 2024</div>
                                        <div className="text-xs text-white/50">Posted</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Leaf className="w-5 h-5 text-slate-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Climate-Biodiversity Nexus</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    The relationship between climate change and biodiversity loss is profound. Climate change accelerates
                                    biodiversity decline: Rapid climate shifts challenge species&apos; adaptability and contribute to
                                    biodiversity loss. Species extinction or migration disrupt ecosystems, impacting water sources,
                                    triggering crop failures, vulnerability to extreme weather events, endangering communities.
                                    Biodiversity loss also intensifies climate breakdown: Large-scale agriculture, urban expansion, and
                                    industry convert vital ecosystems like wetlands and forests, elevating greenhouse gas emissions. This
                                    undermines carbon absorption, weakens Earth&apos;s cooling capacity and impairs adaptation. These
                                    intertwined crises jeopardize food, water, living conditions, and human health. Currently,
                                    governments&apos; commitments under the Paris Climate Agreement are nowhere near levels needed to
                                    avert catastrophic climate change.
                                </p>

                                <p>
                                    Similarly, the Kunming-Montreal Global Biodiversity Framework adopted in December 2022 has a steep
                                    task of halting mass extinctions. But climate–biodiversity interdependence is also a source of hope.
                                    According to the Intergovernmental Panel on Climate Change (IPCC) Sixth Assessment Report (AR6),
                                    safeguarding biodiversity and ecosystems is fundamental to climate-resilient development and
                                    mitigation. This is at the core of nature-based climate actions (NBCAs), this project&apos;s key
                                    concept. This concept brings together growing interest in the broad Nature-based Solutions (NbS)
                                    approach, and in collaborative climate actions by non-state and subnational actors for the
                                    implementation of the Paris Climate Agreement. Examples of NBCAs include establishing protected areas
                                    for forest, aquatic and marine ecosystems (e.g. protected watersheds, mangrove forests) and restoring
                                    and rewilding degraded ecosystems. NBCAs promise important co-benefits to human health and
                                    livelihoods, including enhanced food security, access to traditional knowledge, recreation and
                                    tourism. NBCAs are undertaken around the world through collaborations of cities, regional authorities,
                                    businesses, financial institutions, non-governmental organizations, Indigenous Peoples and networks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <AlertTriangle className="w-5 h-5 text-slate-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">NBCA Challenges</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    While not the sole solution, NBCAs are potent approaches that cannot be ignored. While NBCAs are
                                    powerful, they are not always straightforward. When badly designed, they can harm biodiversity and
                                    people. Some climate change mitigation strategieson land, freshwater, or marine areashinder
                                    biodiversity objectives. Hasty carbon-focused tree-planting and monocultures can weaken local
                                    biodiversity. Hydropower schemes may negatively affect aquatic biodiversity and have severe negative
                                    social impacts. Rapid environmental shifts make predicting and managing conservation and restoration
                                    outcomes more challenging. The rush for rapid action can obscure considerations of equity, inclusion,
                                    and the rights of communities most at risk. Furthermore, NBCAs demand well-coordinated collaboration
                                    among diverse actors, often across boundaries. Typically small in scale, NBCAs are nowhere near the
                                    scale and urgency of climate and biodiversity crises and chronically underfunded, as with conservation
                                    globally.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Search className="w-5 h-5 text-slate-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">The Overlooked Component</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    To mobilize credible actions by cities, businesses, NGOs, and networks for climate adaptation and
                                    mitigation, global institutions have established frameworks such as the Race to Zero Expert Group and
                                    the UN High-Level Expert Group. While beginning to highlight biodiversity integration, their calls to
                                    action remain broad and disconnected from local communities and Indigenous Peoples. We know little
                                    about NBCAs globally (e.g., their distribution, patterns, and performance) and much less about optimal
                                    NBCA deployment with equitable collaboration among diverse actors for context-relevant actions or how
                                    to assess their progress. This constrains the scaling-up of NBCAs and limits evidence-based policy
                                    recommendations for effective funding flow to local actors that could deliver these outcomes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Target className="w-5 h-5 text-slate-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">BioCAM4 Project Goal</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    The overarching goal for this consortium project  which we call BioCAM4  is to develop methodologies
                                    for mapping NBCA trends worldwide and assessing local opportunities and challenges for NBCAs with
                                    dedicated deep-dive studies in two world regions: East Africa and Central America. Interdisciplinary
                                    and cross-sectoral research will strengthen capacity for NBCAs promising to address the following
                                    three key climate-related risks, which affect vulnerable communities in biodiversity rich areas whose
                                    livelihoods depend on the local environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Users className="w-5 h-5 text-slate-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">BioCAM4 Objectives & Implementation</h3>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    Integrating mixed, participatory methods with a custom interdisciplinary and trans-sectoral approach,
                                    BioCAM4 will achieve its overarching goal via three specific objectives: 1. Global mapping and
                                    analysis: A comprehensive global mapping and analysis of NBCAs will be co-produced by social
                                    scientists, biologists, and stakeholders. The resulting open-access database will offer insights on
                                    global NBCA distribution, patterns, and performance. 2. Context-specific exploration of action
                                    situations for NBCAs in focus areas in the Global South: We will complement the global analysis with
                                    deep-dive studies that engage stakeholders and communities in four countries: Rwanda (Virunga region)
                                    and Kenya (Lake Victoria region) in East Africa, Costa Rica (Brunca region) and Guatemala (Trifinio
                                    Region) in Central America. The vulnerable groups for BioCAM4 are communities surrounding conservation
                                    and restoration sites in the above regional focus areas. We understand vulnerability in terms of
                                    exposure, sensitivity, and adaptive capacity. The communities in the focus areas are among the most
                                    affected by climate impacts, least responsible for it, and have reduced adaptive capacity due to
                                    social-economic fragility.
                                </p>

                                <p>
                                    We will explore existing and potential NBCAs in focus areas, identifying facilitating and hindering
                                    factors, to understand their outputs, outcomes, and impacts. Participatory design with practitioners,
                                    social scientists, vulnerable populations, and local and regional research end-users in our focus
                                    areas will engage local actors to implement effective and inclusive NBCAs, while providing bottom-up
                                    insights for improving indicators for tracking outcomes and impacts for the global database. Ethicists
                                    and biologists will support integration of justice principles and sound conservation science and
                                    social science perspectives with attention to local relevance. Research translation and policy
                                    guidance: Leveraging community-based and international partnerships, science-policy specialists with
                                    expertise in biology, political science and science diplomacy will translate research insights from
                                    both global and local analyses into actionable recommendations for growing and scaling-up NBCAs. These
                                    recommendations will guide implementers (local authorities, governments, UN Climate Change, and UN
                                    Biodiversity processes) and global funders (Global Environment Facility, Green Climate Fund) to direct
                                    funding and resources effectively toward NBCAs, and enhance capacity at community level.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Award className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">About the BioCAM4 Mini-grants</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    BioCAM4 research comprises three work packages. Specifically, Work Package 2 relates to the
                                    context-specific explorations of local action situations through deep-dive studies. The project will
                                    conduct deep-dive studies in selected focus areas to probe socio-ecological factors influencing
                                    decision-making and implementation of NBCAs. Using participatory and mixed methodologies the deep
                                    dives will be co-created with vulnerable communities and regional stakeholders, and Indigenous
                                    Peoples. Our approach draws from the Networks of Actions Situations (NAS) method, which expanded upon
                                    the Institutional Analysis and Development (IAD) framework. This adapted NAS framework reveals
                                    context-specific drivers and outcomes of local decision-making on natural resource use, as evidenced
                                    in prior studies on groundwater overuse, and the water-energy-food nexus. The NAS framework will
                                    uncover how biophysical, cultural and institutional factors affect community action for implementing
                                    NBCAs in the study regions, understand action situations and actor interactions therein, and their
                                    outputs, outcomes, and impacts. We will concurrently unpack ethics, equity, inclusivity and human
                                    rights principles in the design, implementation, analyses of NBCAs, generating insights for their
                                    integration in decision-making.
                                </p>

                                <p>
                                    Deep-dive studies will: (1) co-design a method for monitoring drivers and outcomes, (2) assess jointly
                                    with stakeholders whether NBCAs produce ecosystem-service outcomes that mitigate risks to ecosystems,
                                    livelihoods, and human health, (3) identify drivers that hinder or foster outcomes (behavioral
                                    changes) and impacts (long-term changes). The participatory bottom-up approach will (4) concurrently
                                    co-create capacity-strengthening and training for NBCAs; and (5) improve indicators for global NBCA
                                    assessment beyond inputs and outputs towards gauging outcomes and impacts across ecological,
                                    livelihood, and health indicators.
                                </p>

                                <p>
                                    Thus, the deep-dives will contribute to improving data collection and enhance the progress assessment
                                    framework, providing comprehensive data and analysis from input through to impact. Concurrently,
                                    multi-level governance analyses will advance understanding of the global governance and initiatives
                                    that affect local NBCAs (or not) and the respective insights will inform policy guidance for global
                                    actors as described below.
                                </p>

                                <p className="mb-8">
                                    The deep-dive studies will be funded. A call for application for mini-grants to conduct the deep-dive
                                    studies of this project is coming soon.
                                </p>

                                <div className="bg-slate-900 rounded-xl p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-4">More Information</h3>
                                    <p className="text-slate-300 mb-6 text-lg">For more information on the project please see</p>
                                    <Link href="/mini-grants/biocam-subpage" className="w-full sm:w-auto">
                                        <button className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-8 rounded-lg text-base inline-flex items-center gap-2 transition-all duration-200 shadow">
                                            this link
                                            <ExternalLink className="w-4 h-4" />
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