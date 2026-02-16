"use client"

import { useState, useEffect } from "react"
import { FileText, Calendar, Award, ChevronDown, Clock, TrendingUp, Target, BookOpen } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function KnowledgeProductsPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const climateFinanceContributions = [
        "Present climate finance research at Friday Reviews",
        "Submit policy briefs on climate finance topics",
        "Participate in report writing workshops",
        "Review and provide feedback on draft sections"
    ]

    const climateHealthContributions = [
        "Present health-climate research at Friday Reviews",
        "Submit case studies or evidence summaries",
        "Join the report writing team",
        "Participate in stakeholder consultation workshops"
    ]

    const publicationOpportunities = [
        "Contribute chapters to annual thematic book volumes",
        "Submit articles to special journal issues",
        "Co-author with other fellows on collaborative projects"
    ]

    const publicationSupport = [
        "Manuscript development mentorship",
        "Peer review navigation",
        "Writing workshops and editing support",
        "Fast-track publication consideration"
    ]

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <div className="relative bg-white text-gray-900 overflow-hidden">
                    {/* Animated background effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-[#030f41]/5 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#48a4bb]/5 rounded-full blur-3xl animate-float-delayed"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#030f41]/5 rounded-full blur-3xl animate-float-slow"></div>

                        {/* Animated dots */}
                        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#030f41] rounded-full animate-ping-slow"></div>
                        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#48a4bb] rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[#030f41] rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8 z-10">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="mb-8 text-gray-600 hover:text-[#030f41] hover:bg-gray-100 transition-all duration-300 rounded-full px-6 py-2 border border-gray-200">
                                ← Back to Activities
                            </button>

                            <div className="mb-10">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight animate-slide-up">
                                    <span className="block text-[#030f41] relative inline-block">
                                        Knowledge Products
                                        <span className="absolute bottom-2 left-0 w-full h-4 bg-[#030f41]/10 -rotate-1 -z-10 animate-pulse-slow"></span>
                                    </span>
                                    <span className="block text-3xl md:text-5xl lg:text-6xl text-[#48a4bb] mt-3">Publishing Your Work</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                    ARIN is committed to ensuring fellow research reaches policymakers, practitioners, and the
                                    broader research community. In 2026, you have multiple pathways to publication.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-[#030f41]/40" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

                    {/* ARIN Flagship Reports Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#030f41] mb-4 flex items-center justify-center gap-3">
                                <Award className="w-8 h-8 text-[#030f41]" />
                                ARIN Flagship Reports
                            </h2>
                        </div>

                        {/* Climate Finance Report */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 mb-12 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-gradient-to-br from-[#48a4bb] to-[#3a8a9a] text-white p-4 rounded-xl flex-shrink-0">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#030f41] mb-2">
                                        i) State of Evidence in Africa on Climate Finance Report 2026
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        This report consolidates fellow-generated insights on climate finance mechanisms to inform
                                        policy debates, investment strategies, and research agendas.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-bold text-[#030f41] mb-4 text-xl">How to contribute:</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {climateFinanceContributions.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#48a4bb] transition-all duration-300">
                                            <span className="text-[#48a4bb] mt-1 font-bold">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#48a4bb]/10 to-[#3a8a9a]/10 rounded-xl p-6">
                                <h4 className="font-bold text-[#030f41] mb-3 text-xl flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-[#48a4bb]" />
                                    Timeline:
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-[#48a4bb] mt-1 font-bold">•</span>
                                        <span><strong>Research presentations:</strong> January-June 2026</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-[#48a4bb] mt-1 font-bold">•</span>
                                        <span><strong>Report writing:</strong> July-September 2026</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-[#48a4bb] mt-1 font-bold">•</span>
                                        <span><strong>Launch:</strong> October 2026 (likely at major climate conference)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Climate and Health Report */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-gradient-to-br from-[#030f41] to-[#48a4bb] text-white p-4 rounded-xl flex-shrink-0">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#030f41] mb-2">
                                        ii) State of Evidence on Climate Change and Health in Africa Report 2026
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        This report synthesises evidence on climate-health intersections to inform climate policy, public
                                        health planning, and investment decisions.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-bold text-[#030f41] mb-4 text-xl">How to contribute:</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {climateHealthContributions.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#030f41] transition-all duration-300">
                                            <span className="text-[#030f41] mt-1 font-bold">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#030f41]/10 to-[#48a4bb]/10 rounded-xl p-6">
                                <h4 className="font-bold text-[#030f41] mb-3 text-xl flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-[#030f41]" />
                                    Timeline:
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-[#030f41] mt-1 font-bold">•</span>
                                        <span><strong>Research presentations:</strong> January-June 2026</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-[#030f41] mt-1 font-bold">•</span>
                                        <span><strong>Report writing:</strong> July-September 2026</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-[#030f41] mt-1 font-bold">•</span>
                                        <span><strong>Launch:</strong> October 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Academic Publications Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#030f41] mb-4 flex items-center justify-center gap-3">
                                <BookOpen className="w-8 h-8 text-[#48a4bb]" />
                                Academic Publications
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#48a4bb] text-white p-4 rounded-xl flex-shrink-0">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#030f41] mb-2">
                                        Taylor & Francis Special Issues and Book Volumes
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Through our MoU with Taylor & Francis, fellows have guaranteed publication pathways for
                                        high-quality research.
                                    </p>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                {/* Opportunities */}
                                <div>
                                    <h4 className="font-bold text-[#030f41] mb-4 text-xl flex items-center gap-2">
                                        <Target className="w-5 h-5 text-[#48a4bb]" />
                                        Opportunities:
                                    </h4>
                                    <div className="space-y-3">
                                        {publicationOpportunities.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#48a4bb] transition-all duration-300">
                                                <span className="text-[#48a4bb] mt-1 font-bold">•</span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Support Provided */}
                                <div>
                                    <h4 className="font-bold text-[#030f41] mb-4 text-xl flex items-center gap-2">
                                        <Award className="w-5 h-5 text-[#48a4bb]" />
                                        Support provided:
                                    </h4>
                                    <div className="space-y-3">
                                        {publicationSupport.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#48a4bb] transition-all duration-300">
                                                <span className="text-[#48a4bb] mt-1 font-bold">•</span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    {/* <div className="bg-gradient-to-br from-[#030f41] to-[#48a4bb] rounded-3xl p-8 md:p-12 text-white text-center animate-fade-in">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Share Your Research?</h3>
                        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                            Join ARIN fellows in contributing to flagship reports and academic publications that shape
                            policy and advance knowledge across Africa.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-[#030f41] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                                Contact Your Regional Focal Point
                            </button>
                            <button className="bg-[#48a4bb] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3a8a9a] transition-all duration-300 transform hover:scale-105 border-2 border-white">
                                View Publication Guidelines
                            </button>
                        </div>
                    </div> */}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 border-t border-gray-200 py-6 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-600 text-sm">
                            © 2026 <span className="text-[#030f41] font-semibold">ARIN Fellowship</span> • Advancing Research Excellence Through Publication
                        </p>
                    </div>
                </div>

                <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-30px) translateX(10px); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-25px); }
                }

                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 1; }
                    75%, 100% { transform: scale(2.5); opacity: 0; }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float-slow 10s ease-in-out infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out 0.1s both;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out both;
                }
            `}</style>
            </div>
            <ArinFellowsFooter />
        </>
    )
}