import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Globe, Leaf, ExternalLink, AlertTriangle, Search, Target, Users, Award, MapPin, Zap, Heart, TrendingUp, DollarSign, Building } from 'lucide-react';
import ARINNavbar from '@/components/navbar/navbar';
import ArinFellowsFooter from '@/components/footer/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BioCamp4Page() {
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

                            <Link href="/mini-grants/biocam" className="w-full sm:w-auto">
                                <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Mini-grants
                                </Button>
                            </Link>
                            <div className="mb-6">
                                <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        BioCAM4
                                    </span>
                                </h1>
                                <p className="text-xl lg:text-2xl text-cyan-300 font-medium max-w-4xl mx-auto leading-relaxed">
                                    Biodiversity Integration in Climate Adaptation and Mitigation Actions for Planet, People and Human Health
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 mb-8">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Calendar className="w-5 h-5 text-cyan-300" />
                                    <div>
                                        <div className="text-sm font-semibold text-white">July 24, 2024</div>
                                        <div className="text-xs text-white/70">Posted</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Globe className="w-5 h-5 text-blue-300" />
                                    <span className="text-sm font-medium">Research Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-4 border border-white/50">
                        <Image
                            src="/img/biocam1.png"
                            alt="BioCAM4 Project Banner"
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
                                    Climate change accelerates biodiversity decline and biodiversity loss intensifies climate breakdown. Current national commitments under the Paris Agreement and the Kunming-Montreal Biodiversity Framework do not live up to these challenges. Nature-based Climate Action (NBCA) is a multi-actor, cross-sectoral collaborative commitments that integrate nature and biodiversity considerations within climate mitigation and adaptation strategies. NBCAs have the potential to complement national commitments while responding to climate change-induced risks to (i) terrestrial and ecosystems, (ii) living standards and (iii) human health.
                                </p>
                                <p>
                                    The overall objective of the <a href="https://biocam4.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200">BioCAM4</a> consortium project is to develop methodologies for mapping NBCA trends worldwide and assessing local opportunities and challenges through deep-dive studies in two biodiversity hot-spot world regions: East Africa and Central America, where vulnerable groups and communities are among the most affected by climate impacts, least responsible for it, and have reduced adaptive capacity due to social and economic fragility.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">The BioCAM4 Vision</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p className="mb-4">BioCAM4 is an interdisciplinary and trans-sectoral research partnership dedicated to:</p>
                                <ul className="space-y-3">
                                    <li>Developing methodologies for mapping NBCA trends worldwide and assessing local opportunities and challenges for NBCAs with dedicated deep-dive studies in two world regions: East Africa and Central America.</li>
                                    <li>Engaging practitioners from local farming and tourism sectors and stakeholders from local governments and communities in the selected focus areas. On-site workshops and webinars will engage global institutions for policy recommendations, e.g., the UNFCCC, CBD, and global funding agencies while strengthening local capacity.</li>
                                    <li>Fostering leadership in the Global South and research collaboration through our focus areas in Africa and Central America.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Search className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">The Objectives of the BioCAM4 Project</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                                <p>The consortium engages in research co-creation and policy outreach at global and local levels to strengthen the capacity of NBCAs.</p>
                                <p>BioCAM4 consortium project pursues three specific objectives:</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                                        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                                            <Globe className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">Global Mapping</h3>
                                        <p className="text-gray-700 text-sm">A comprehensive global mapping and analysis of NBCAs and an open-access database to offer insights on global NBCA distribution, patterns, and performance.</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                                        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">Local Exploration</h3>
                                        <p className="text-gray-700 text-sm">Context-specific and locally relevant exploration of local dynamics of NBCAs in four localities across two regions that are highly biodiverse.</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                                        <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                                            <Users className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">Knowledge Mobilization</h3>
                                        <p className="text-gray-700 text-sm">Co-creation of knowledge mobilization and policy outreach to translate research insights into policy guidance for equitable funding flows.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Packages */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Leaf className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">The BioCAM4 Work Packages</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                                <p>BioCAM4 project Integrates mixed, participatory methods with a custom interdisciplinary and trans-sectoral approach, BioCAM4 will achieve its overarching goal via three specific objectives through three research work packages:</p>

                                <div className="space-y-8">
                                    <div className="border-l-4 border-blue-500 pl-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Work Package One (WP-1)</h3>
                                        <p>Work Package 1 is dedicated to the development of a comprehensive global mapping and analysis of NBCAs. The resulting open-access database will offer insights into global NBCA distribution, patterns, and performance.</p>
                                        <p className="mt-3">The global mapping is dedicated to:</p>
                                        <ul className="mt-2 space-y-1">
                                            <li>reflect multi-actor collaboration</li>
                                            <li>align with global climate and biodiversity goals</li>
                                            <li>address local and regional climate and biodiversity risks to local ecosystems, human health, and livelihoods.</li>
                                        </ul>
                                    </div>

                                    <div className="border-l-4 border-green-500 pl-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Work Package Two (WP-2)</h3>
                                        <p>Context-specific exploration of action situations for NBCAs in focus areas in the Global South. We will complement the global analysis with deep-dive studies that engage stakeholders and communities in four countries: Rwanda (Virunga region) and Kenya (Lake Victoria region) in East Africa, Costa Rica (Brunca region) and Guatemala (Trifinio Region) in Central America.</p>
                                    </div>

                                    <div className="border-l-4 border-purple-500 pl-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Work Package Three (WP-3)</h3>
                                        <p>Research translation and policy guidance: Leveraging community-based and international partnerships, science-policy specialists with expertise in biology, political science, and science diplomacy will translate research insights from both global and local analyses into actionable recommendations for growing and scaling up NBCAs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Project Flow</h2>
                            <Image
                                src="/img/biocam2.png"
                                alt="BioCAM4 Project Flow Diagram"
                                width={1200}
                                height={256}
                                className="w-full h-64 object-contain rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Project Beneficiaries</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Local Stakeholders Indigenous Peoples</h3>
                                    <p className="text-gray-700 text-sm">Primary beneficiaries in focus areas: Data, training, capacity-strengthening, network and outreach.</p>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Local and Regional Governments</h3>
                                    <p className="text-gray-700 text-sm">Actors in NBCA or regulations in focus areas and worldwide: Data, training, capacity-strengthening</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Global Funding Agencies</h3>
                                    <p className="text-gray-700 text-sm">e.g GEF, GCF: Data and recommendations for decisions</p>
                                </div>
                                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border border-yellow-200">
                                    <h3 className="font-bold text-gray-800 mb-2">National Governments</h3>
                                    <p className="text-gray-700 text-sm">Government departments: Data framework to scale up, create, enable, and strengthen capacity for NBCAs.</p>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Intergovernmental Institutions</h3>
                                    <p className="text-gray-700 text-sm">e.g UNFCCC, CBD, IPCC, IPBES: Data Insights for programs and mobilize.</p>
                                </div>
                                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Data Community</h3>
                                    <p className="text-gray-700 text-sm">e.g CAMDA: Data and methodologies for monitoring progress</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Project Outcomes</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Capacity-strengthening and training</h3>
                                    <p className="text-gray-700 text-sm">Early career researcher training; co-created framework for just, effective locally relevant NBCAs in focus areas and beyond.</p>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Recommendations and Policy guidance</h3>
                                    <p className="text-gray-700 text-sm">co-created recommendations for global funders and institutions to help them make better decisions to channel funding to local actors.</p>
                                </div>
                                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Reduced greenwashing</h3>
                                    <p className="text-gray-700 text-sm">principles and data-driven assessment mechanisms for effective NBCAs grounded in sound science, inclusivity, and equity.</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                                    <h3 className="font-bold text-gray-800 mb-2">Visibility/Recognition</h3>
                                    <p className="text-gray-700 text-sm">Good practices of credible NBCAs by local actors and Indigenous people are shared for replicability, scaling-up, and recognition.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Project Impacts</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="border-l-4 border-green-500 pl-6">
                                    <h3 className="font-bold text-gray-800 mb-2">Climate and Environmental</h3>
                                    <p className="text-gray-700">Advancement of Global adaptation and mitigation goals and sustainable development goals through research</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h3 className="font-bold text-gray-800 mb-2">Scientific</h3>
                                    <p className="text-gray-700">Advancement of collaboration across social sciences, humanities, biological sciences, and communities of policy and practice.</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h3 className="font-bold text-gray-800 mb-2">Societal</h3>
                                    <p className="text-gray-700">Buy-in for practices that align biodiversity and climate goals while improving livelihood and human health outcomes in focus areas.</p>
                                </div>
                                <div className="border-l-4 border-orange-500 pl-6">
                                    <h3 className="font-bold text-gray-800 mb-2">Policy-related</h3>
                                    <p className="text-gray-700">Integration of NBCAs in climate policy and funding agencies in focus areas and worldwide.</p>
                                </div>
                                <div className="border-l-4 border-cyan-500 pl-6">
                                    <h3 className="font-bold text-gray-800 mb-2">Economic</h3>
                                    <p className="text-gray-700">Contribution to thriving communities through capacity strengthening.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Funding */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                                    <DollarSign className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Funding</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p>BioCAM4 is supported in part by funding from the Government of Canada&apos;s New Frontiers in Research Fund (NFRF)</p>
                                <div className="mt-6">
                                    <Image
                                        src="/img/biocam3.png"
                                        alt="BioCAM4 Project Funders"
                                        width={1200}
                                        height={128}
                                        className="w-full h-32 object-contain rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Project Partners</h2>
                            <Image
                                src="/img/biocam4.png"
                                alt="All BioCAM4 Project Partners"
                                width={1200}
                                height={192}
                                className="w-full h-48 object-contain rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Consortium Partners */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Consortium Partners</h2>
                            <Image
                                src="/img/biocam5.png"
                                alt="All BioCAM4 Consortium Partners"
                                width={1200}
                                height={192}
                                className="w-full h-48 object-contain rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Project Team */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center mr-4">
                                    <Building className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Project Team at ARIN</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200 text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full">
                                        <Image
                                            src="/img/prof.jpg"
                                            alt="Dr Joanes Atela"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-1">Dr Joanes Atela</h3>
                                    <p className="text-gray-600 text-sm">Co-Principal Investigator</p>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full">
                                        <Image
                                            src="/img/DrAgevi.jpg"
                                            alt="Dr Humphrey Agevi"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-1">Dr Humphrey Agevi</h3>
                                    <p className="text-gray-600 text-sm">Project Lead</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full">
                                        <Image
                                            src="/img/emily-bolo.jpg"
                                            alt="Emily Bolo"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-1">Emily Bolo</h3>
                                    <p className="text-gray-600 text-sm">Research Scientist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    );
}