"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ndcFellowshipData } from "../../../data/ndc-fellowship/ndc-fellowship"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Image from "next/image"

export default function NDCFellowshipPage() {
    const handleItemClick = (item) => {
        window.location.href = `/ndc-fellowship/${item.id}`
    }

    const getDisplayDescription = (description) => {
        if (!description) {
            return "A transformative fellowship program designed to empower the next generation of African leaders in sustainable development research and policy. More details coming soon."
        }
        return description.length > 200 ? `${description.substring(0, 200)}...` : description
    }

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
                            <div className="mb-8">
                                <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        NDC Fellowship
                                    </span>
                                    <span className="block text-3xl lg:text-4xl text-cyan-300 mt-2">Programs</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12">
                                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                                    Explore our NDC Fellowship programs designed to build capacity and leadership in climate change
                                    adaptation and mitigation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {ndcFellowshipData.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {ndcFellowshipData.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-300"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="mb-4">
                                            <div className="text-sm text-gray-500 mb-2">
                                                Posted on {item.date} • Categories: {item.categories.join(", ")}
                                            </div>
                                            <h3
                                                className="text-2xl font-bold text-gray-800 mb-4 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                                                onClick={() => handleItemClick(item)}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed mb-6">{getDisplayDescription(item.description)}</p>
                                        <Button
                                            onClick={() => handleItemClick(item)}
                                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300"
                                        >
                                            Continue Reading <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-white/50 max-w-2xl mx-auto">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ArrowRight className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Fellowship Programs Coming Soon</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We are currently developing our NDC Fellowship programs. Please check back soon for exciting
                                    opportunities to contribute to sustainable development in Africa.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ArinFellowsFooter />
        </>
    )
}
