"use client"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, DollarSign, Users, BookOpen, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const ARINFellowshipActivities = () => {
    const activities = [
        {
            id: 1,
            title: "Summer School",
            description:
                "Intensive research training programs designed to enhance skills and knowledge in various research methodologies and academic writing.",
            icon: GraduationCap,
            featured: false,
            link: "/summer-school",
            color: "from-blue-500 to-blue-600",
        },
        {
            id: 2,
            title: "Mini grants",
            description:
                "Small-scale funding opportunities to support innovative research projects and capacity building initiatives across Africa.",
            icon: DollarSign,
            featured: true,
            link: "/mini-grants",
            color: "from-green-500 to-green-600",
        },
        {
            id: 3,
            title: "NDC Fellowship",
            description:
                "Specialized fellowship program focusing on Nationally Determined Contributions and climate change research.",
            icon: Users,
            featured: false,
            link: "/ndc-fellowship",
            color: "from-purple-500 to-purple-600",
        },
        {
            id: 4,
            title: "NDC Academy",
            description:
                "Educational platform providing comprehensive training on climate policy, NDCs, and sustainable development practices.",
            icon: BookOpen,
            featured: false,
            link: "/ndc-academy",
            color: "from-orange-500 to-orange-600",
        },
        {
            id: 5,
            title: "Friday Reviews",
            description:
                "Weekly research review sessions where fellows present their work and receive feedback from peers and mentors.",
            icon: Calendar,
            featured: false,
            link: "/friday-reviews",
            color: "from-pink-500 to-pink-600",
        },
    ]

    return (
        <>
            <div id="fellowship-activities" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-full text-sm font-semibold mb-4">
                            What We Do
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Fellowship Activities</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our comprehensive programs designed to foster research excellence and innovation across Africa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {activities.map((activity) => {
                            const IconComponent = activity.icon
                            return (
                                <Link key={activity.id} href={activity.link} passHref>
                                    <Card
                                        className={`group relative h-full cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${activity.featured
                                            ? "bg-gradient-to-br from-[#48a4bb] to-[#9bc8ce] text-white"
                                            : "bg-white text-gray-900"
                                            } rounded-3xl border-0 shadow-xl`}
                                    >
                                        {!activity.featured && (
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                            ></div>
                                        )}

                                        {activity.featured ? (
                                            <>
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
                                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                                            </>
                                        ) : (
                                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gray-100/50 rounded-full translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"></div>
                                        )}

                                        <CardContent className="p-8 h-full flex flex-col relative z-10">
                                            {/* Icon */}
                                            <div className="mb-6">
                                                <div
                                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${activity.featured ? "bg-white/20" : `bg-gradient-to-br ${activity.color}`
                                                        }`}
                                                >
                                                    <IconComponent className={`w-8 h-8 ${activity.featured ? "text-white" : "text-white"}`} />
                                                </div>
                                            </div>

                                            <h3
                                                className={`text-xl font-bold mb-4 group-hover:text-opacity-90 transition-all duration-300 ${activity.featured ? "text-white" : "text-gray-900"
                                                    }`}
                                            >
                                                {activity.title}
                                            </h3>

                                            <p
                                                className={`text-sm leading-relaxed mb-6 flex-grow ${activity.featured ? "text-white/90" : "text-gray-600"
                                                    }`}
                                            >
                                                {activity.description}
                                            </p>

                                            <div className="mt-auto">
                                                <div
                                                    className={`flex items-center text-sm font-semibold group-hover:gap-3 transition-all duration-300 ${activity.featured ? "text-white" : "text-[#48a4bb]"
                                                        }`}
                                                >
                                                    For more information
                                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </CardContent>

                                        {activity.featured && (
                                            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                                                Featured
                                            </div>
                                        )}
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ARINFellowshipActivities
