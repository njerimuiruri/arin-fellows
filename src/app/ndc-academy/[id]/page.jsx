"use client"
import ArinFellowsFooter from "@/components/footer/footer"
import ARINNavbar from "@/components/navbar/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users, Share2 } from "lucide-react"
import { ndcFellowshipData } from "../../../../data/ndc-fellowship/ndc-fellowship"
import Image from "next/image"

export default function NDCFellowshipDetailPage({ params }) {
    const id = params.id

    const item = ndcFellowshipData.find((item) => item.id === Number.parseInt(id))

    if (!item) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Fellowship Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested fellowship could not be found.</p>
                    <Button onClick={() => (window.location.href = "/ndc-fellowship")}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Fellowship
                    </Button>
                </div>
            </div>
        )
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: item.title,
                text:
                    item.description ||
                    "NDC Fellowship Program - Research and Policy Transformation for Sustainable Development in Africa",
                url: window.location.href,
            })
        } else {
            navigator.clipboard.writeText(window.location.href)
            alert("Link copied to clipboard!")
        }
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
                        </div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <Button
                                onClick={() => (window.location.href = "/ndc-fellowship")}
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 mb-6"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Fellowship
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-cyan-300">
                                        <Calendar className="w-5 h-5" />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {item.categories.map((category, index) => (
                                            <span
                                                key={index}
                                                className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        {item.title}
                                    </span>
                                </h1>

                                {item.description ? (
                                    <p className="text-xl text-white/90 leading-relaxed mb-8">{item.description}</p>
                                ) : (
                                    <p className="text-xl text-white/90 leading-relaxed mb-8">
                                        A transformative fellowship program designed to empower the next generation of African leaders in
                                        sustainable development research and policy.
                                    </p>
                                )}

                                <div className="flex gap-4">
                                    <Button
                                        onClick={handleShare}
                                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Share Fellowship
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:pl-12">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
                    <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Fellowship Overview</h2>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">About the Program</h3>
                                <p className="text-gray-700">{item.content.background}</p>
                            </div>

                            <div className="text-center py-8">
                                <Users className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">Program Details Coming Soon</h3>
                                <p className="text-gray-500">
                                    We are currently developing comprehensive program details including research focus areas, application
                                    requirements, and fellowship benefits. Stay tuned for updates!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
