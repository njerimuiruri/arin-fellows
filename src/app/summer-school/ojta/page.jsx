"use client";

import { useState, useEffect } from "react"
import { FileText, Users, Calendar, MapPin, DollarSign, BookOpen, ArrowRight, Globe, Award, ChevronDown, Zap, TrendingUp, Target } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar";
import ArinFellowsFooter from "@/components/footer/footer";

export default function JustEnergyTransitionPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeCard, setActiveCard] = useState(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const outputs = [
        {
            title: "Comprehensive Learning Materials",
            description: "Detailed module materials, case studies, and resources from Kenya and South Africa",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "Action Plans for JET",
            description: "Actionable strategies and frameworks tailored to local contexts",
            icon: <Target className="w-6 h-6" />,
        },
        {
            title: "Capacity-Building Toolkits",
            description: "Best practices, policy recommendations, and financing strategies for African contexts",
            icon: <FileText className="w-6 h-6" />,
        },
    ]

    const capacityDimensions = [
        {
            title: "Human Capacity",
            description: "Developing technical skills and expertise required to design, install, operate, and maintain renewable energy systems across engineering, finance, policy, and social sciences.",
        },
        {
            title: "Institutional Capacity",
            description: "Strengthening governance structures and regulatory frameworks to support transparent, equitable, and inclusive energy transitions while safeguarding vulnerable populations.",
        },
        {
            title: "Financial Capacity",
            description: "Enhancing access to climate finance and sustainable energy investments through innovative financing mechanisms that attract public and private sector investments.",
        },
        {
            title: "Community Empowerment",
            description: "Building capacity of local communities to actively participate in energy decision-making processes as co-creators of solutions reflecting their needs and aspirations.",
        },
    ]

    const beneficiaries = [
        {
            title: "Policymakers & Government Officials",
            description: "Decision-makers from national, regional, and local governments responsible for formulating, implementing, and regulating energy and climate policies.",
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "Energy Sector Professionals",
            description: "Engineers, project managers, and technical experts working in renewable energy, fossil fuel industries, or energy efficiency sectors.",
            icon: <Zap className="w-6 h-6" />,
        },
        {
            title: "Financial Institutions & Investors",
            description: "Professionals interested in sustainable energy financing, green bonds, and innovative financial mechanisms for renewable energy projects.",
            icon: <DollarSign className="w-6 h-6" />,
        },
        {
            title: "Civil Society & NGOs",
            description: "Representatives advocating for climate justice, energy equity, and sustainable development to influence policy and implement grassroots solutions.",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            title: "Academia & Researchers",
            description: "University faculty, researchers, and students focused on energy systems, climate change, or socio-economic development.",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "Private Sector Stakeholders",
            description: "Businesses, entrepreneurs, and startups in renewable energy seeking to understand policy frameworks and financing opportunities.",
            icon: <TrendingUp className="w-6 h-6" />,
        },
    ]

    const trainingObjectives = [
        "Provide a comprehensive understanding of Just Energy Transitions (JET) including environmental, social, and economic dimensions",
        "Develop technical and financial expertise to design, implement, and finance renewable energy projects",
        "Strengthen governance and policy frameworks in Africa, with focus on Kenya and South Africa",
        "Identify and address capacity gaps including skills development, institutional coordination, and access to finance",
        "Promote community engagement and social justice in renewable energy initiatives",
    ]

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section - White Background with Green/Blue Animations */}
                <div className="relative bg-white text-gray-900 overflow-hidden">
                    {/* Animated ripple effects in background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600/5 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float-delayed"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-float-slow"></div>

                        {/* Animated dots */}
                        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-600 rounded-full animate-ping-slow"></div>
                        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-600 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-600 rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>

                        {/* Floating geometric shapes */}
                        <div className="absolute top-1/4 right-1/3 w-32 h-32 border-2 border-green-600/10 rounded-full animate-spin-very-slow"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-blue-600/10 rounded-lg rotate-45 animate-float-rotate"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8 z-10">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="mb-8 text-gray-600 hover:text-green-700 hover:bg-gray-100 transition-all duration-300 rounded-full px-6 py-2 border border-gray-200">
                                ← Back to Home
                            </button>

                            <div className="mb-10">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight animate-slide-up">
                                    <span className="block text-green-700 relative inline-block">
                                        Just and Sustainable
                                        <span className="absolute bottom-2 left-0 w-full h-4 bg-green-600/10 -rotate-1 -z-10 animate-pulse-slow"></span>
                                    </span>
                                    <span className="block text-3xl md:text-5xl lg:text-6xl text-blue-700 mt-3">Energy Transitions in Africa</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 mt-6 font-medium">Summer School Training Program</p>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                    Building capacity for equitable, inclusive, and sustainable energy transitions across Africa,
                                    with a focus on Kenya and South Africa.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-100 hover:border-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <MapPin className="w-7 h-7 text-green-700" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-green-700">Kenya & South Africa</div>
                                        <div className="text-sm text-gray-600">Focus Countries</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-100 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <Zap className="w-7 h-7 text-blue-700" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-blue-700">Just Transition</div>
                                        <div className="text-sm text-gray-600">Framework</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-100 hover:border-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <Globe className="w-7 h-7 text-green-700" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-green-700">Africa-Wide</div>
                                        <div className="text-sm text-gray-600">Impact</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-green-700/40" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    {/* Background Section */}
                    <div className="mb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2 animate-slide-in-left">
                                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                            <FileText className="w-7 h-7 text-green-700" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-green-700">Background</h2>
                                    </div>
                                    <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
                                        <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                            The global imperative to transition toward sustainable energy systems is no longer optional but a necessity,
                                            as climate change continues to exacerbate environmental, social, and economic vulnerabilities. However, the
                                            shift from fossil fuels to renewable energy must not only focus on climate mitigation but also emphasise justice,
                                            equity, and inclusivity.
                                        </p>
                                        <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                            A Just Energy Transition (JET) goes beyond merely reducing emissions; it demands
                                            that the transition process distributes its benefits and burdens fairly across all segments of society, particularly
                                            for those who are historically marginalised or economically disadvantaged.
                                        </p>
                                        <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                            In the African context, where energy poverty and socio-economic inequalities are widespread, the notion of a
                                            Just Transition takes on even greater significance. Countries like Kenya and South Africa are at the forefront of renewable energy adoption on the continent, but
                                            they still face significant hurdles in ensuring that these transitions are inclusive, equitable, and sustainable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 animate-slide-in-right">
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:border-green-600 transition-all duration-300 hover:-translate-y-2">
                                    <Award className="w-12 h-12 text-green-700 mb-3" />
                                    <h3 className="font-bold text-green-700 text-lg mb-2">Equity & Justice</h3>
                                    <p className="text-sm text-gray-600">
                                        Ensuring fair distribution of benefits and burdens across all segments of society
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:border-blue-600 transition-all duration-300 hover:-translate-y-2">
                                    <Zap className="w-12 h-12 text-blue-700 mb-3" />
                                    <h3 className="font-bold text-blue-700 text-lg mb-2">Renewable Focus</h3>
                                    <p className="text-sm text-gray-600">
                                        Advancing renewable energy adoption while addressing energy poverty
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Capacity Development */}
                    <div className="mb-20 animate-fade-in">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <TrendingUp className="w-7 h-7 text-green-700" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-green-700">Capacity Development for Just Energy Transition</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg mb-8">
                                <p>
                                    Capacity development plays a pivotal role in making the energy transition not only technically feasible but also
                                    socially just and economically viable. It involves strengthening the capabilities of individuals, institutions, and
                                    systems to understand, implement, and sustain the energy transition in a way that promotes equity and social
                                    justice.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {capacityDimensions.map((dimension, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-green-600 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <h3 className="text-xl font-bold text-green-700 mb-3">{dimension.title}</h3>
                                        <p className="text-gray-700 leading-relaxed">{dimension.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Training Objectives */}
                    <div className="mb-20 animate-fade-in">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center mb-8">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-7 h-7 text-blue-700" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Training Objectives</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {trainingObjectives.map((objective, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-blue-600 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                                                <span className="text-white font-bold">{index + 1}</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed text-lg">{objective}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Target Audience */}
                    <div className="mb-20 animate-fade-in">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center mb-8">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <Users className="w-7 h-7 text-green-700" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-green-700">Who Benefits from this Training?</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed mb-8 text-lg">
                                <p>
                                    This training program is designed for a diverse group of stakeholders involved in the energy transition process,
                                    with a particular focus on Africa. The program targets multiple sectors to ensure comprehensive capacity building.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {beneficiaries.map((beneficiary, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-green-600 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-green-700 mb-4 border border-gray-200">
                                            {beneficiary.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-green-700 mb-3">{beneficiary.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{beneficiary.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Why This Training is Critical */}
                    <div className="mb-20 animate-fade-in">
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-lg p-8 md:p-10 border border-green-100 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-md">
                                    <Award className="w-7 h-7 text-green-700" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-green-700">Why This Training is Critical</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
                                <p>
                                    This training program aims to address capacity gaps by equipping participants with the tools, strategies,
                                    and practical knowledge necessary to operationalise a just energy transition in Africa. It focuses on four critical areas:
                                </p>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start">
                                        <span className="text-green-700 mr-3 text-xl">•</span>
                                        <span><strong className="text-green-700">Understanding the Fundamentals:</strong> Comprehensive understanding of the principles of energy transitions, including social, economic, and environmental challenges and opportunities.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-700 mr-3 text-xl">•</span>
                                        <span><strong className="text-blue-700">Financing Mechanisms:</strong> Traditional and innovative financing models, offering practical insights into overcoming financial barriers.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-700 mr-3 text-xl">•</span>
                                        <span><strong className="text-green-700">Governance and Policy Frameworks:</strong> Exploring governance structures and policies that facilitate just transitions in Kenya, South Africa, and other African countries.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-700 mr-3 text-xl">•</span>
                                        <span><strong className="text-blue-700">Addressing Capacity Gaps:</strong> Strategies for developing a skilled workforce, improving institutional coordination, and increasing access to sustainable energy finance.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Expected Outcomes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-scale-in">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <Award className="w-7 h-7 text-green-700" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-green-700">Expected Outcomes</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-3">
                                <p className="flex items-start">
                                    <span className="text-green-700 mr-2">✓</span>
                                    <span>Gain expertise in just energy transitions with thorough understanding of global and African contexts</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-green-700 mr-2">✓</span>
                                    <span>Develop practical skills for policy and project implementation that are socially inclusive and economically viable</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-green-700 mr-2">✓</span>
                                    <span>Strengthen institutional capacity and governance structures to support just transitions</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-green-700 mr-2">✓</span>
                                    <span>Enhance access to financing mechanisms including climate finance and green bonds</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-green-700 mr-2">✓</span>
                                    <span>Promote gender equity and social inclusion in energy projects</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-green-700 mr-2">✓</span>
                                    <span>Contribute to local and global dialogues on just transitions</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <Globe className="w-7 h-7 text-blue-700" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-700">Post-Training Support</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-3">
                                <p className="flex items-start">
                                    <span className="text-blue-700 mr-2">✓</span>
                                    <span>Ongoing support through webinars and discussion forums</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-blue-700 mr-2">✓</span>
                                    <span>Expert consultations for continuous learning</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-blue-700 mr-2">✓</span>
                                    <span>Stakeholder engagement and networking opportunities</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-blue-700 mr-2">✓</span>
                                    <span>Long-term collaborations in the energy transition space</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-blue-700 mr-2">✓</span>
                                    <span>Access to case studies from Kenya, South Africa, and other developing countries</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="text-blue-700 mr-2">✓</span>
                                    <span>Knowledge sharing platform for best practices replication</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outputs */}
                    <div className="mb-16 animate-fade-in">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
                            <div className="flex items-center mb-8">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <FileText className="w-7 h-7 text-green-700" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-green-700">Training Outputs</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                {outputs.map((output, index) => (
                                    <div
                                        key={index}
                                        className="group cursor-pointer animate-scale-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        <div className={`bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-700 hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-3 ${activeCard === index ? 'scale-105' : ''}`}>
                                            <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl text-green-700 mb-6 group-hover:bg-green-700 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                                {output.icon}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
                                                {output.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">{output.description}</p>
                                            <div className="flex items-center text-green-700 font-semibold group-hover:gap-3 transition-all duration-300">
                                                <span className="mr-2">Learn More</span>
                                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 border-t border-gray-200 py-6 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-600 text-sm">
                            © 2025 <span className="text-green-700 font-semibold">Just and Sustainable Energy Transitions in Africa</span> • Building Capacity for Equitable Energy Future
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

                @keyframes float-rotate {
                    0%, 100% { transform: translateY(0px) rotate(45deg); }
                    50% { transform: translateY(-15px) rotate(50deg); }
                }

                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 1; }
                    75%, 100% { transform: scale(2.5); opacity: 0; }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                @keyframes spin-very-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
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

                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
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

                .animate-float-rotate {
                    animation: float-rotate 7s ease-in-out infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }

                .animate-spin-very-slow {
                    animation: spin-very-slow 30s linear infinite;
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

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out both;
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.8s ease-out 0.2s both;
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