"use client"

import { useState, useEffect } from "react"
import { BookOpen, Calendar, Users, Award, TrendingUp, ChevronDown, Clock, MapPin, Zap } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function MentorshipCapacityBuildingPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const taylorFrancisModules = [
        {
            module: "Module 1: Research Fundamentals",
            topics: [
                "Developing research questions",
                "Literature review strategies",
                "Research design and methodology"
            ]
        },
        {
            module: "Module 2: Academic Writing",
            topics: [
                "Structuring scholarly articles",
                "Writing for impact",
                "Clarity and conciseness in academic prose"
            ]
        },
        {
            module: "Module 3: Publication Process",
            topics: [
                "Selecting the right journal",
                "Preparing manuscripts for submission",
                "Understanding the peer review process"
            ]
        },
        {
            module: "Module 4: Responding to Reviewers",
            topics: [
                "Interpreting reviewer comments",
                "Revising manuscripts effectively",
                "Navigating rejection and resubmission"
            ]
        },
        {
            module: "Module 5: Building Your Research Portfolio",
            topics: [
                "Developing a publication strategy",
                "Research communication beyond journals",
                "Building academic visibility"
            ]
        }
    ]

    const aiProgramComponents = [
        "Self-paced e-learning modules",
        "Hands-on project assignments",
        "Mentorship from AI specialists",
        "Internship opportunities with partner institutions",
        "Policy lab sessions for research translation"
    ]

    const aiLearningTopics = [
        "Mathematical AI tools and frameworks",
        "Climate modelling and forecasting",
        "Data analysis for climate resilience",
        "Machine learning applications",
        "Translating AI insights into policy tools"
    ]

    const summerSchoolDays = [
        { day: "Day 1-2", focus: "Understanding Fundamentals" },
        { day: "Day 3", focus: "Financing Mechanisms" },
        { day: "Day 4", focus: "Governance and Policy Frameworks" },
        { day: "Day 5", focus: "Addressing Capacity Gaps" }
    ]

    const summerSchoolBenefits = [
        "Certificate of Participation",
        "Training materials and resources",
        "Networking with African and international experts",
        "Potential for follow-up collaboration"
    ]

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <div className="relative bg-white text-gray-900 overflow-hidden">
                    {/* Animated background effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-[#48a4bb]/5 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#030f41]/5 rounded-full blur-3xl animate-float-delayed"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#48a4bb]/5 rounded-full blur-3xl animate-float-slow"></div>

                        {/* Animated dots */}
                        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#48a4bb] rounded-full animate-ping-slow"></div>
                        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#030f41] rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[#48a4bb] rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8 z-10">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="mb-8 text-gray-600 hover:text-[#48a4bb] hover:bg-gray-100 transition-all duration-300 rounded-full px-6 py-2 border border-gray-200">
                                ← Back to Activities
                            </button>

                            <div className="mb-10">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight animate-slide-up">
                                    <span className="block text-[#030f41] relative inline-block">
                                        Mentorship and
                                        <span className="absolute bottom-2 left-0 w-full h-4 bg-[#48a4bb]/10 -rotate-1 -z-10 animate-pulse-slow"></span>
                                    </span>
                                    <span className="block text-3xl md:text-5xl lg:text-6xl text-[#48a4bb] mt-3">Capacity Building</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                    Strengthening your research, writing, and technical skills through partnerships with leading institutions
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-[#48a4bb]/40" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

                    {/* Monthly Workshops with Taylor & Francis */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 mb-12 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-[#48a4bb] text-white p-4 rounded-xl flex-shrink-0">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#030f41] mb-4">
                                    a) Monthly Workshops with Taylor & Francis Group
                                </h3>
                                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <Calendar className="w-4 h-4 text-[#48a4bb]" />
                                        <span className="font-medium">When: Last Wednesday of each month</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <Clock className="w-4 h-4 text-[#48a4bb]" />
                                        <span className="font-medium">Duration: 3-4 hours</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <MapPin className="w-4 h-4 text-[#48a4bb]" />
                                        <span className="font-medium">Format: Online interactive sessions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                            Following our successful MoU with Taylor & Francis Group, these workshops provide training on
                            the following modules:
                        </p>

                        <div className="space-y-4 mb-8">
                            {taylorFrancisModules.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#48a4bb] hover:shadow-md transition-all duration-300 animate-scale-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <h4 className="font-bold text-[#030f41] mb-3 text-lg">{item.module}</h4>
                                    <ul className="space-y-2">
                                        {item.topics.map((topic, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                <span className="text-[#48a4bb] mt-1 font-bold">•</span>
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-[#48a4bb]/10 to-[#030f41]/10 rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-[#030f41] mb-2 flex items-center gap-2 text-lg">
                                <Award className="w-5 h-5 text-[#48a4bb]" />
                                Expected Outcome:
                            </h4>
                            <p className="text-gray-700 text-lg">
                                Your participation culminates in publication opportunities in dedicated book volumes or special
                                issues on critical African topics.
                            </p>
                        </div>

                        <div className="bg-[#48a4bb]/5 border-l-4 border-[#48a4bb] rounded-lg p-4">
                            <p className="text-[#030f41] font-semibold text-lg">
                                <strong>How to participate:</strong> All fellows are automatically enrolled. Check your email
                                for monthly session links.
                            </p>
                        </div>
                    </div>

                    {/* AI for Climate Resilience Training */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 mb-12 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-[#030f41] text-white p-4 rounded-xl flex-shrink-0">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#030f41] mb-4">
                                    b) AI for Climate Resilience Training
                                </h3>
                                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <Users className="w-4 h-4 text-[#030f41]" />
                                        <span className="font-medium">Target audience: Fellows interested in mathematical sciences, data science, or AI applications</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 text-gray-600">
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <MapPin className="w-4 h-4 text-[#030f41]" />
                                        <span className="font-medium">Format: Blended learning (online modules + in-person workshops)</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <Clock className="w-4 h-4 text-[#030f41]" />
                                        <span className="font-medium">Duration: 6 months</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                            Developed and piloted at the University of Nairobi and Makerere University, this program
                            strengthens your capacity to apply mathematical sciences to climate challenges.
                        </p>

                        <div className="mb-6">
                            <h4 className="font-bold text-[#030f41] mb-4 text-xl">Selected Fellows will learn:</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                                {aiLearningTopics.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#030f41] transition-all duration-300">
                                        <span className="text-[#030f41] mt-1 font-bold">•</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#030f41]/10 to-[#48a4bb]/10 rounded-xl p-6">
                            <h4 className="font-bold text-[#030f41] mb-4 text-xl">Program Components:</h4>
                            <div className="space-y-3">
                                {aiProgramComponents.map((component, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-[#030f41] mt-1 font-bold">•</span>
                                        <span>{component}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summer School on Just Energy Transition */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-4 rounded-xl flex-shrink-0">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#030f41] mb-4">
                                    c) Summer School on Just Energy Transition
                                </h3>
                                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <Calendar className="w-4 h-4 text-green-600" />
                                        <span className="font-medium">When: August 2026 (exact dates TBA)</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <MapPin className="w-4 h-4 text-green-600" />
                                        <span className="font-medium">Where: (Location TBA) - Building on our 2025 success in Kampala, Uganda</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                        <Clock className="w-4 h-4 text-green-600" />
                                        <span className="font-medium">Duration: 5 days intensive</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 bg-green-50 border border-green-100 rounded-xl p-4">
                            <h4 className="font-bold text-green-800 mb-2 text-lg">Partners:</h4>
                            <p className="text-gray-700 text-lg">
                                Makerere University Business School, Norwegian University of Science and Technology, SouthSouthNorth
                            </p>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                            This intensive program equips you with practical tools and strategies to operationalise just energy
                            transitions in Africa.
                        </p>

                        <div className="mb-6">
                            <h4 className="font-bold text-[#030f41] mb-4 text-xl">Four Focus Areas:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {summerSchoolDays.map((item, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                                        <div className="font-bold text-green-700 mb-1 text-lg">{item.day}:</div>
                                        <div className="text-gray-700 text-lg">{item.focus}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-[#030f41] mb-4 text-xl">What you will receive:</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                                {summerSchoolBenefits.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-gray-700 text-lg">
                                        <span className="text-green-600 mt-1 font-bold">•</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#48a4bb]/5 border-l-4 border-[#48a4bb] rounded-lg p-4">
                            <p className="text-[#030f41] font-semibold text-lg">
                                <strong>How to apply:</strong> Application forms will be released in the coming months.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 border-t border-gray-200 py-6 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-600 text-sm">
                            © 2026 <span className="text-[#48a4bb] font-semibold">ARIN Fellowship</span> • Building Capacity for Research Excellence
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

                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
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

                .animate-scale-in {
                    animation: scale-in 0.6s ease-out both;
                }
            `}</style>
            </div>
            <ArinFellowsFooter />
        </>
    )
}