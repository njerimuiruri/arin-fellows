"use client"

import { useState, useMemo } from "react"
import { Search, Calendar, User, ArrowRight, FileText, Clock, BookOpen, X, ChevronLeft, ChevronRight } from "lucide-react"
import { briefs } from "../../../data/brief/brief"
import Link from "next/link"
import Image from "next/image"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

const ITEMS_PER_PAGE = 6

function parseDate(dateStr) {
    if (!dateStr) return new Date(0)
    const d = new Date(dateStr)
    return isNaN(d.getTime()) ? new Date(0) : d
}

const categoryBadge = (category) => {
    const map = {
        'Briefs': 'bg-blue-100 text-blue-800',
        'Friday Reviews': 'bg-emerald-100 text-emerald-800',
        'Climate': 'bg-emerald-100 text-emerald-800',
        'Energy': 'bg-amber-100 text-amber-800',
        'Governance': 'bg-purple-100 text-purple-800',
        'Biodiversity': 'bg-green-100 text-green-800',
        'Health': 'bg-rose-100 text-rose-800',
        'Agriculture': 'bg-lime-100 text-lime-800',
    }
    return map[category] || 'bg-gray-100 text-gray-700'
}

const categoryPlaceholderBg = (category) => {
    const map = {
        'Briefs': 'from-blue-100 to-blue-200',
        'Friday Reviews': 'from-emerald-100 to-teal-200',
        'Climate': 'from-emerald-100 to-teal-200',
        'Energy': 'from-amber-100 to-yellow-200',
        'Governance': 'from-purple-100 to-violet-200',
        'Biodiversity': 'from-green-100 to-lime-200',
        'Health': 'from-rose-100 to-pink-200',
    }
    return map[category] || 'from-gray-100 to-gray-200'
}

export default function BriefsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    // Sort by date descending (latest first)
    const sortedBriefs = useMemo(() => {
        return [...briefs].sort((a, b) => parseDate(b.date) - parseDate(a.date))
    }, [])

    const filteredBriefs = useMemo(() => {
        setCurrentPage(1)
        if (!searchTerm.trim()) return sortedBriefs
        const q = searchTerm.trim().toLowerCase()
        return sortedBriefs.filter(
            (brief) =>
                brief.title.toLowerCase().includes(q) ||
                brief.author.toLowerCase().includes(q) ||
                brief.category.toLowerCase().includes(q) ||
                brief.tags.some((tag) => tag.toLowerCase().includes(q)) ||
                brief.briefPreview?.toLowerCase().includes(q),
        )
    }, [searchTerm, sortedBriefs])

    const totalPages = Math.ceil(filteredBriefs.length / ITEMS_PER_PAGE)
    const pageBriefs = filteredBriefs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    const goToPage = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gray-50">

                {/* Hero */}
                <div className="bg-white border-b border-gray-200 border-t-4 border-t-blue-600">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-3 inline-block">
                            ← Back to Home
                        </Link>
                        <h1 className="text-4xl font-bold text-blue-900 mb-2">Research Briefs</h1>
                        <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
                            In-depth research briefs from African scholars and policy makers sharing their findings and insights.
                        </p>
                        <div className="flex flex-wrap gap-5 mt-5 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-blue-500" /> {briefs.length} Briefs Available</span>
                            <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-blue-500" /> Research &amp; Policy Focus</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" /> Latest 2025 Updates</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* Search bar */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search by title, author, category or keyword..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        {searchTerm.trim() && (
                            <p className="text-xs text-gray-500 mt-2 pl-1">
                                {filteredBriefs.length} result{filteredBriefs.length !== 1 ? "s" : ""} for &ldquo;{searchTerm}&rdquo;
                            </p>
                        )}
                    </div>

                    {/* Results summary */}
                    {filteredBriefs.length > 0 && (
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-gray-500">
                                Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredBriefs.length)}</span> of <span className="font-semibold text-gray-700">{filteredBriefs.length}</span> briefs
                            </p>
                            <p className="text-xs text-gray-400">Sorted: latest first</p>
                        </div>
                    )}

                    {/* Briefs Grid */}
                    {filteredBriefs.length === 0 ? (
                        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                            <FileText className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500 font-medium mb-1">No briefs found</p>
                            <p className="text-sm text-gray-400 mb-4">Try a different search term</p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium underline"
                            >
                                Clear search
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {pageBriefs.map((brief) => (
                                    <div
                                        key={brief.id}
                                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col"
                                    >
                                        {/* Image or placeholder */}
                                        <div className="relative overflow-hidden h-44 shrink-0">
                                            {brief.image ? (
                                                <Image
                                                    src={brief.image}
                                                    alt={brief.title}
                                                    width={400}
                                                    height={176}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className={`w-full h-full bg-gradient-to-br ${categoryPlaceholderBg(brief.category)} flex items-center justify-center`}>
                                                    <FileText className="w-10 h-10 text-gray-300" />
                                                </div>
                                            )}
                                            <div className="absolute top-3 left-3">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryBadge(brief.category)}`}>
                                                    {brief.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {brief.date}
                                            </div>

                                            <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-3 mb-2">
                                                {brief.title}
                                            </h3>

                                            {brief.author && (
                                                <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-3">
                                                    <User className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                                    <span className="line-clamp-2">{brief.author}</span>
                                                </div>
                                            )}

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                                                {brief.tags.slice(0, 2).map((tag, i) => (
                                                    <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link href={`/briefs/${brief.id}`}>
                                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                                                    Read Full Brief
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-8">
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronLeft className="w-4 h-4" /> Prev
                                    </button>

                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => goToPage(page)}
                                                className={`w-9 h-9 text-sm font-medium rounded-lg transition-colors ${
                                                    currentPage === page
                                                        ? 'bg-blue-600 text-white'
                                                        : 'text-gray-600 hover:bg-gray-100 border border-gray-200'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
