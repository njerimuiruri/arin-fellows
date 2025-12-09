"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight, FileText, Clock, BookOpen } from "lucide-react"
import { briefs, getCategoryColor } from "../../../data/brief/brief"
import Link from "next/link"
import Image from "next/image"

export default function BriefsPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredBriefs = useMemo(() => {
        if (!searchTerm) return briefs

        return briefs.filter(
            (brief) =>
                brief.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                brief.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                brief.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                brief.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                brief.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
        )
    }, [searchTerm])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
            {/* Hero Section */}
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
                        <Button
                            variant="ghost"
                            className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2"
                        >
                            ← Back to Home
                        </Button>

                        <div className="mb-8">
                            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                    Research Briefs
                                </span>
                            </h1>
                        </div>

                        <div className="max-w-4xl mx-auto mb-12">
                            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                                In-depth research briefs from African scholars and policy makers sharing their findings and insights
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                <FileText className="w-6 h-6 text-cyan-300" />
                                <div>
                                    <div className="text-lg font-semibold text-white">{briefs.length} Briefs</div>
                                    <div className="text-sm text-white/70">Available</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                <BookOpen className="w-6 h-6 text-cyan-300" />
                                <div>
                                    <div className="text-lg font-semibold text-white">Research</div>
                                    <div className="text-sm text-white/70">& Policy Focus</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                <Clock className="w-6 h-6 text-cyan-300" />
                                <div>
                                    <div className="text-lg font-semibold text-white">Latest</div>
                                    <div className="text-sm text-white/70">2025 Updates</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 mb-12">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            type="text"
                            placeholder="Search briefs by title, author, category, or keywords..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80 backdrop-blur-sm"
                        />
                    </div>
                    {searchTerm && (
                        <div className="mt-4 text-center text-gray-600">
                            Found {filteredBriefs.length} brief{filteredBriefs.length !== 1 ? "s" : ""} matching &ldquo;{searchTerm}
                            &rdquo;
                        </div>
                    )}
                </div>

                {/* Briefs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBriefs.map((brief) => (
                        <Card
                            key={brief.id}
                            className="bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-3xl"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={brief.image || "/placeholder.svg"}
                                    alt={brief.title}
                                    width={400}
                                    height={192}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className={`bg-gradient-to-r ${getCategoryColor(brief.category)} text-white border-0`}>
                                        {brief.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                    <Calendar className="w-4 h-4" />
                                    {brief.date}
                                </div>
                                <CardTitle className="text-lg font-bold leading-tight line-clamp-3 group-hover:text-blue-600 transition-colors">
                                    {brief.title}
                                </CardTitle>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                    <User className="w-4 h-4" />
                                    <span className="line-clamp-1">{brief.author}</span>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <CardDescription className="text-gray-700 line-clamp-3 mb-4">{brief.shortDescription}</CardDescription>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {brief.tags.slice(0, 2).map((tag, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <Link href={`/briefs/${brief.id}`}>
                                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 rounded-xl">
                                        Read Full Brief
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredBriefs.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50">
                            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No briefs found</h3>
                            <p className="text-gray-600">Try adjusting your search terms or browse all available briefs.</p>
                            <Button
                                onClick={() => setSearchTerm("")}
                                className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
                            >
                                Clear Search
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
