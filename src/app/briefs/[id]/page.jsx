"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Tag } from "lucide-react"
import { briefs, getCategoryColor } from "../../../../data/brief/brief"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

export default function BriefDetailPage({ params }) {
    const brief = briefs.find((b) => b.id === Number.parseInt(params.id))

    if (!brief) {
        notFound()
    }

    return (
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
                    <Link href="/briefs">
                        <Button
                            variant="ghost"
                            className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Briefs
                        </Button>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-6">
                                <Badge className={`bg-gradient-to-r ${getCategoryColor(brief.category)} text-white border-0 mb-4`}>
                                    {brief.category}
                                </Badge>
                                <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">{brief.title}</h1>
                            </div>

                            <div className="space-y-4 text-white/90">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-cyan-300" />
                                    <span>Published: {brief.date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <User className="w-5 h-5 text-cyan-300" />
                                    <span>{brief.author}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-cyan-300" />
                                    <span>Presented: {brief.presentationDate}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6">
                                {brief.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                                        <Tag className="w-3 h-3 mr-1" />
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src={brief.image || "/placeholder.svg"}
                                alt={brief.title}
                                width={640}
                                height={320}
                                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Card className="bg-white/70 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl overflow-hidden">
                    <CardContent className="p-12">
                        {/* Short Description */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Executive Summary</h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200/50">
                                {brief.shortDescription}
                            </p>
                        </div>

                        {/* Full Content */}
                        <div className="prose prose-lg max-w-none">
                            <div
                                className="text-gray-800 leading-relaxed space-y-6"
                                dangerouslySetInnerHTML={{ __html: brief.content }}
                            />
                        </div>

                        {/* Share Section */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Share2 className="w-5 h-5 text-gray-600" />
                                    <span className="text-gray-600 font-medium">Share this brief</span>
                                </div>
                                <div className="flex gap-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                                        className="rounded-full"
                                    >
                                        Copy Link
                                    </Button>
                                    <Link href="/briefs">
                                        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 rounded-full">
                                            Browse More Briefs
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
