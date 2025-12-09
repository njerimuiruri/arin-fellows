"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Tag, Video, FileText } from "lucide-react"
import { ndcAcademyData } from "../../../data/ndc-academy/ndc-academy"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Image from "next/image"

export default function NDCAcademyPage() {
    const handleItemClick = (item) => {
        window.location.href = `/ndc-academy/${item.id}`
    }

    const getAllVideos = () => {
        const videos = []
        ndcAcademyData.forEach((item) => {
            if (item.content?.projectOutputs) {
                item.content.projectOutputs.forEach((output) => {
                    if (output.items) {
                        output.items.forEach((video) => {
                            if (video.type === "youtube") {
                                videos.push({
                                    ...video,
                                    parentItem: item,
                                    outputTitle: output.title,
                                })
                            }
                        })
                    }
                })
            }
        })
        return videos
    }

    const getAllDownloads = () => {
        const downloads = []
        ndcAcademyData.forEach((item) => {
            if (item.content?.downloads) {
                item.content.downloads.forEach((download) => {
                    downloads.push({
                        ...download,
                        parentItem: item,
                    })
                })
            }
        })
        return downloads
    }

    const allVideos = getAllVideos()
    const allDownloads = getAllDownloads()

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
                                        NDC Academy
                                    </span>
                                    <span className="block text-3xl lg:text-4xl text-cyan-300 mt-2">Programs</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12">
                                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                                    Building capacity in climate finance and policy implementation across Africa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Programs</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Explore our comprehensive programs designed to enhance climate finance knowledge and build leadership
                                capacity
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {ndcAcademyData.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                                                {item.categories[0]}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="mb-6">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {item.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Tag className="w-4 h-4" />
                                                    {item.categories.length} categories
                                                </div>
                                            </div>
                                            <h3
                                                className="text-2xl font-bold text-gray-800 mb-4 cursor-pointer hover:text-blue-600 transition-colors duration-200 line-clamp-2"
                                                onClick={() => handleItemClick(item)}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">{item.description}</p>

                                        <div className="flex items-center justify-between">
                                            <Button
                                                onClick={() => handleItemClick(item)}
                                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300 group"
                                            >
                                                Continue Reading
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                            </Button>

                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                {item.content?.projectOutputs && (
                                                    <div className="flex items-center gap-1">
                                                        <Video className="w-4 h-4" />
                                                        <span>{item.content.projectOutputs.length}</span>
                                                    </div>
                                                )}
                                                {item.content?.downloads && (
                                                    <div className="flex items-center gap-1">
                                                        <FileText className="w-4 h-4" />
                                                        <span>{item.content.downloads.length}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
